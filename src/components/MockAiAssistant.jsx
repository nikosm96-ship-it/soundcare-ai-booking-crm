import { useEffect, useMemo, useState } from 'react';
import { getBookings } from '../services/bookingStorage.js';

const draftTypes = [
  'Appointment reminder',
  'Follow-up message',
  'Missing information request',
  'Reschedule request',
];

const toneOptions = ['Professional', 'Friendly', 'Brief'];

const toneOpeners = {
  Professional: 'Hello',
  Friendly: 'Hi',
  Brief: 'Hello',
};

const toneClosings = {
  Professional: 'Thank you, SoundCare Demo Team',
  Friendly: 'Thanks, SoundCare Demo Team',
  Brief: 'SoundCare Demo Team',
};

function displayValue(value, fallback) {
  return value || fallback;
}

function createBookingLabel(booking) {
  const customerName = displayValue(booking.customerName, 'Unnamed customer');
  const service = displayValue(booking.service, 'service not selected');

  return `${customerName} - ${service}`;
}

function createDateTimeLine(booking) {
  const preferredDate = displayValue(booking.preferredDate, 'the requested date');
  const preferredTime = displayValue(booking.preferredTime, 'the requested time');

  return `${preferredDate} at ${preferredTime}`;
}

function createDraftBody({ booking, draftType, tone }) {
  const customerName = displayValue(booking.customerName, 'there');
  const service = displayValue(booking.service, 'your requested service');
  const dateTime = createDateTimeLine(booking);
  const opener = toneOpeners[tone];
  const closing = toneClosings[tone];

  const templates = {
    'Appointment reminder': `${opener} ${customerName},\n\nThis is a reminder for your demo ${service} booking preferred for ${dateTime}. Please reply with any administrative scheduling questions or updates.\n\nThis message is a non-medical administrative draft.\n\n${closing}`,
    'Follow-up message': `${opener} ${customerName},\n\nThank you for your demo ${service} booking request. We are following up to confirm the preferred appointment details: ${dateTime}. Please let us know if the contact or scheduling details need to be updated.\n\nThis message is a non-medical administrative draft.\n\n${closing}`,
    'Missing information request': `${opener} ${customerName},\n\nWe are reviewing your demo ${service} booking request and need a little more administrative information before confirming the appointment. Please reply with any missing contact details or scheduling preferences.\n\nThis message is a non-medical administrative draft.\n\n${closing}`,
    'Reschedule request': `${opener} ${customerName},\n\nWe received your demo ${service} booking preference for ${dateTime}. If you need to reschedule, please reply with a new preferred date and time.\n\nThis message is a non-medical administrative draft.\n\n${closing}`,
  };

  if (tone === 'Brief') {
    return templates[draftType]
      .replace('Please reply with any administrative scheduling questions or updates.', 'Reply with any scheduling updates.')
      .replace('Please let us know if the contact or scheduling details need to be updated.', 'Reply with any scheduling updates.')
      .replace('Please reply with any missing contact details or scheduling preferences.', 'Reply with any missing details.')
      .replace('please reply with a new preferred date and time.', 'reply with a new preferred date and time.');
  }

  return templates[draftType];
}

export default function MockAiAssistant({ refreshKey }) {
  const [bookings, setBookings] = useState(() => getBookings());
  const [selectedBookingId, setSelectedBookingId] = useState('');
  const [draftType, setDraftType] = useState(draftTypes[0]);
  const [tone, setTone] = useState(toneOptions[0]);
  const [draftText, setDraftText] = useState('');

  useEffect(() => {
    const latestBookings = getBookings();

    setBookings(latestBookings);
    setSelectedBookingId((currentId) => {
      if (latestBookings.some((booking) => booking.id === currentId)) {
        return currentId;
      }

      return latestBookings[0]?.id || '';
    });
    setDraftText('');
  }, [refreshKey]);

  const selectedBooking = useMemo(
    () => bookings.find((booking) => booking.id === selectedBookingId),
    [bookings, selectedBookingId],
  );

  function handleGenerateDraft() {
    if (!selectedBooking) {
      setDraftText('');
      return;
    }

    setDraftText(createDraftBody({ booking: selectedBooking, draftType, tone }));
  }

  function handleClearDraft() {
    setDraftText('');
  }

  return (
    <section className="mock-ai-assistant" aria-labelledby="mock-ai-title">
      <div className="section-heading">
        <p className="phase-label">Administrative assistant</p>
        <h2 id="mock-ai-title">Mock AI Assistant</h2>
        <p>
          Generate safe administrative draft text from fake demo booking data.
          No real AI, API keys, backend calls, or message sending are used.
        </p>
      </div>

      {bookings.length > 0 ? (
        <div className="mock-ai-panel">
          <div className="form-grid">
            <label className="form-field" htmlFor="mock-ai-booking">
              <span>Booking</span>
              <select
                id="mock-ai-booking"
                value={selectedBookingId}
                onChange={(event) => {
                  setSelectedBookingId(event.target.value);
                  setDraftText('');
                }}
              >
                {bookings.map((booking) => (
                  <option key={booking.id} value={booking.id}>
                    {createBookingLabel(booking)}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-field" htmlFor="mock-ai-draft-type">
              <span>Draft type</span>
              <select
                id="mock-ai-draft-type"
                value={draftType}
                onChange={(event) => {
                  setDraftType(event.target.value);
                  setDraftText('');
                }}
              >
                {draftTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-field" htmlFor="mock-ai-tone">
              <span>Tone</span>
              <select
                id="mock-ai-tone"
                value={tone}
                onChange={(event) => {
                  setTone(event.target.value);
                  setDraftText('');
                }}
              >
                {toneOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mock-ai-actions">
            <button
              className="primary-button"
              type="button"
              onClick={handleGenerateDraft}
            >
              Generate draft
            </button>
            <button
              className="secondary-button"
              type="button"
              onClick={handleClearDraft}
              disabled={!draftText}
            >
              Clear draft
            </button>
          </div>

          <label className="form-field form-field--full" htmlFor="mock-ai-draft">
            <span>Generated draft</span>
            <textarea
              id="mock-ai-draft"
              className="mock-ai-output"
              rows="8"
              value={draftText}
              readOnly
              placeholder="Generated administrative draft text will appear here."
            />
          </label>
        </div>
      ) : (
        <p className="empty-state">
          No demo bookings are available for draft generation.
        </p>
      )}
    </section>
  );
}
