const form = document.querySelector('login-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const newForm = {};
  const formData = {};

  const formElements = form.elements;

  let isFormValid = true;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.type !== 'submit' && element.value.trim() === '') {
      isFormValid = false;
      break;
    }

    formData[element.name] = element.value.trim();
  }

  if (!isFormValid) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);

  form.reset();
});