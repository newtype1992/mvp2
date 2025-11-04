import React, { useState } from 'react';
import FormField from '../components/FormField';
import { validateLeadForm } from '../utils/validation';

const defaultForm = {
  name: '',
  email: '',
  company: '',
  role: '',
  phone: '',
  useCase: '',
  message: '',
};

const TalkToSales = ({ addToast }) => {
  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const leadsEndpoint = import.meta.env.VITE_LEADS_ENDPOINT;

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateLeadForm(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      addToast?.({ message: 'Please fix the highlighted fields.', type: 'is-danger' });
      return;
    }

    setSubmitting(true);
    setStatus('');
    const payload = { ...form, submittedAt: new Date().toISOString() };

    try {
      if (leadsEndpoint) {
        const response = await fetch(leadsEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          throw new Error('Failed to submit lead');
        }
      } else {
        // Mock submission in development
        // eslint-disable-next-line no-console
        console.info('[Swift Slots lead]', payload);
        await new Promise((resolve) => setTimeout(resolve, 900));
      }

      setForm(defaultForm);
      addToast?.({ message: 'Thanks! The team will reach out shortly.', type: 'is-success' });
      setStatus('success');
    } catch (error) {
      addToast?.({
        message: 'Something went wrong sending your request. Please try again.',
        type: 'is-danger',
      });
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="section talk-to-sales">
      <div className="container">
        <div className="columns is-variable is-8">
          <div className="column is-12-tablet is-5-desktop">
            <h1 className="title has-text-white">Talk to sales</h1>
            <p className="subtitle has-text-grey-light">
              Tell us about your cancellations playbook and we&apos;ll share benchmarks, integrations, and an ROI plan
              tailored to your locations.
            </p>
            <div className="box has-background-dark-lighter is-shadowless">
              <h2 className="title is-5 has-text-white">What you&apos;ll get</h2>
              <ul className="sales-highlights">
                <li>30-minute strategy session with marketplace specialists.</li>
                <li>Benchmarks on fill rate, recovered revenue, and no-show reduction.</li>
                <li>Integration roadmap for your current booking stack.</li>
              </ul>
            </div>
            {status === 'success' ? (
              <article className="message is-primary mt-4">
                <div className="message-body">
                  We received your request. Watch your inbox for a scheduling link within the next business day.
                </div>
              </article>
            ) : null}
            {status === 'error' ? (
              <article className="message is-danger mt-4">
                <div className="message-body">We couldn&apos;t send the form. Please try again or email hello@swiftslots.com.</div>
              </article>
            ) : null}
          </div>
          <div className="column is-12-tablet is-7-desktop">
            <div className="box has-background-black-bis">
              <form onSubmit={handleSubmit} noValidate>
                <FormField id="lead-name" label="Name" required error={errors.name}>
                  <input
                    id="lead-name"
                    className="input"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                  />
                </FormField>
                <FormField id="lead-email" label="Email" required error={errors.email}>
                  <input
                    id="lead-email"
                    className="input"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                  />
                </FormField>
                <FormField id="lead-company" label="Company" required error={errors.company}>
                  <input
                    id="lead-company"
                    className="input"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange('company')}
                    required
                  />
                </FormField>
                <FormField id="lead-role" label="Role" error={errors.role}>
                  <div className="select is-fullwidth">
                    <select id="lead-role" name="role" value={form.role} onChange={handleChange('role')}>
                      <option value="">Select role</option>
                      <option value="Owner">Owner / Founder</option>
                      <option value="Operations Manager">Operations Manager</option>
                      <option value="Marketing Lead">Marketing Lead</option>
                      <option value="Staff Manager">Staff Manager</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </FormField>
                <FormField id="lead-phone" label="Phone" helpText="Optional">
                  <input
                    id="lead-phone"
                    className="input"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                  />
                </FormField>
                <FormField id="lead-usecase" label="Primary use case" required error={errors.useCase}>
                  <div className="select is-fullwidth">
                    <select
                      id="lead-usecase"
                      name="use-case"
                      value={form.useCase}
                      onChange={handleChange('useCase')}
                      required
                    >
                      <option value="">Select one</option>
                      <option value="Fitness">Fitness studio / gym</option>
                      <option value="Beauty">Salon / spa</option>
                      <option value="Medical">Medical / clinic</option>
                      <option value="Wellness">Wellness / therapy</option>
                      <option value="Other">Other services</option>
                    </select>
                  </div>
                </FormField>
                <FormField id="lead-message" label="Tell us about your goals" required error={errors.message}>
                  <textarea
                    id="lead-message"
                    className="textarea"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                  />
                </FormField>
                <div className="field is-grouped is-justify-content-flex-end mt-5">
                  <div className="control">
                    <button type="submit" className={`button is-primary ${submitting ? 'is-loading' : ''}`}>
                      {submitting ? 'Sending...' : 'Submit request'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToSales;
