export const required = (value) => (value ? null : "Field is required!");
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address!"
    : undefined;

export const telephone = (phoneNumber) =>
  phoneNumber && !/^9989[012345789][0-9]{7}$/i.test(phoneNumber)
    ? "Invalid must be 9989XXXXXXXX"
    : undefined;
