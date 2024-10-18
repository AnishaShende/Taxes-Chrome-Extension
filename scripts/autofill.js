// Example autofill data
const formData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "1234567890",
};

const fillForm = () => {
  // Find form fields and set their values
  const firstNameField = document.querySelector('input[name="firstName"]');
  const lastNameField = document.querySelector('input[name="lastName"]');
  const emailField = document.querySelector('input[name="email"]');
  const phoneField = document.querySelector('input[name="phone"]');

  if (firstNameField) firstNameField.value = formData.firstName;
  if (lastNameField) lastNameField.value = formData.lastName;
  if (emailField) emailField.value = formData.email;
  if (phoneField) phoneField.value = formData.phone;
};

// Trigger the function to fill the form
fillForm();
