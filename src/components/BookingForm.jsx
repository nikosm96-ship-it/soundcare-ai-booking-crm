import { useState } from 'react';
import { BOOKING_STATUSES } from '../data/bookingStatus.js';
import { createBookingRequest } from '../services/bookingRepository.js';

const serviceOptions = [
  'Hearing test',
  'Hearing aid consultation',
  'Follow-up appointment',
  'Device cleaning',
];

const initialFormValues = {
  customerName: '',
  customerEmail: '',
  customerPhone: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  notes: '',
};

function createBookingId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `booking-${crypto.randomUUID()}`;
  }

  return `booking-${Date.now()}`;
}

function validateBookingForm(values) {
  const errors = {};

  if (!values.customerName.trim()) {
    errors.customerName = 'Please enter a customer name.';
  }

  if (!values.customerEmail.trim()) {
    errors.customerEmail = 'Please enter a customer email.';
  }

  if (!values.service) {
    errors.service = 'Please choose a service.';
  }

  return errors;
}

export default function BookingForm({ onBookingSaved }) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateBookingForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage('');
      return;
    }

    const timestamp = new Date().toISOString();
    const newBooking = {
      id: createBookingId(),
      customerName: formValues.customerName.trim(),
      customerEmail: formValues.customerEmail.trim(),
      customerPhone: formValues.customerPhone.trim(),
      service: formValues.service,
      preferredDate: formValues.preferredDate,
      preferredTime: formValues.preferredTime,
      notes: formValues.notes.trim(),
      status: BOOKING_STATUSES.NEW,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    setIsSaving(true);

    try {
      await createBookingRequest(newBooking);

      setFormValues(initialFormValues);
      setErrors({});
      setSuccessMessage('received');

      if (onBookingSaved) {
        onBookingSaved();
      }
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="booking-form-section" aria-labelledby="booking-form-title">
      <div className="section-heading">
        <h2 id="booking-form-title">Appointment request form</h2>
        <p>
          Share your contact details and preferred appointment window. Required
          fields are marked with an asterisk.
        </p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        {successMessage ? (
          <div className="confirmation-card" role="status">
            <h3>Thank you!</h3>
            <p>Your appointment request has been received.</p>
            <p>Our team will review your request and contact you soon.</p>
          </div>
        ) : null}

        <div className="form-grid">
          <label className="form-field" htmlFor="customerName">
            <span>Full Name *</span>
            <input
              id="customerName"
              name="customerName"
              type="text"
              value={formValues.customerName}
              onChange={handleChange}
              aria-invalid={Boolean(errors.customerName)}
              aria-describedby={
                errors.customerName ? 'customerName-error' : undefined
              }
            />
            {errors.customerName ? (
              <span className="field-error" id="customerName-error">
                {errors.customerName}
              </span>
            ) : null}
          </label>

          <label className="form-field" htmlFor="customerEmail">
            <span>Email Address *</span>
            <input
              id="customerEmail"
              name="customerEmail"
              type="email"
              value={formValues.customerEmail}
              onChange={handleChange}
              aria-invalid={Boolean(errors.customerEmail)}
              aria-describedby={
                errors.customerEmail ? 'customerEmail-error' : undefined
              }
            />
            {errors.customerEmail ? (
              <span className="field-error" id="customerEmail-error">
                {errors.customerEmail}
              </span>
            ) : null}
          </label>

          <label className="form-field" htmlFor="customerPhone">
            <span>Phone Number</span>
            <input
              id="customerPhone"
              name="customerPhone"
              type="tel"
              value={formValues.customerPhone}
              onChange={handleChange}
            />
          </label>

          <label className="form-field" htmlFor="service">
            <span>Service *</span>
            <select
              id="service"
              name="service"
              value={formValues.service}
              onChange={handleChange}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? 'service-error' : undefined}
            >
              <option value="">Choose a service</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service ? (
              <span className="field-error" id="service-error">
                {errors.service}
              </span>
            ) : null}
          </label>

          <label className="form-field" htmlFor="preferredDate">
            <span>Preferred date</span>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={formValues.preferredDate}
              onChange={handleChange}
            />
          </label>

          <label className="form-field" htmlFor="preferredTime">
            <span>Preferred time</span>
            <input
              id="preferredTime"
              name="preferredTime"
              type="time"
              value={formValues.preferredTime}
              onChange={handleChange}
            />
          </label>

          <label className="form-field form-field--full" htmlFor="notes">
            <span>Additional Notes</span>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              value={formValues.notes}
              onChange={handleChange}
              placeholder="Morning appointment preferred, accessibility requests, or scheduling details."
            />
          </label>
        </div>

        <button className="primary-button" type="submit" disabled={isSaving}>
          {isSaving ? 'Sending request...' : 'Request Appointment'}
        </button>
      </form>
    </section>
  );
}
