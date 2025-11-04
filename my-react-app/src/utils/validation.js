export const isRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return Boolean(value);
};

export const isEmail = (value) => {
  if (!value) return false;
  const emailPattern =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
  return emailPattern.test(String(value).trim());
};

export const validateLeadForm = (form) => {
  const errors = {};

  if (!isRequired(form.name)) {
    errors.name = 'Please tell us your name.';
  }

  if (!isRequired(form.email)) {
    errors.email = 'An email address is required.';
  } else if (!isEmail(form.email)) {
    errors.email = 'Please enter a valid email.';
  }

  if (!isRequired(form.company)) {
    errors.company = 'Company is required.';
  }

  if (!isRequired(form.useCase)) {
    errors.useCase = 'Select the primary use case.';
  }

  if (!isRequired(form.message)) {
    errors.message = 'Please share a bit about your goals.';
  }

  return errors;
};
