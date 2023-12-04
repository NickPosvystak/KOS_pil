function sendEmail() {
  // Get form input values
  let userName = document.getElementById('form-name');
  let userEmail = document.getElementById('form-email');
  let messageField = document.getElementById('form-message');

  // Check for empty fields
  if (
    userName.value === '' ||
    userEmail.value === '' ||
    messageField.value === ''
  ) {
    alert('Please fill in all fields before submitting the form!');
  } else {
    // If all fields are filled, proceed with sending the email
    let params = {
      name: userName.value,
      email: userEmail.value,
      message: messageField.value,
    };

    const serviceID = 'service_zd4sbq6';
    const templateID = 'template_abxrfhl';

    emailjs
      .send(serviceID, templateID, params)
      .then(res => {
        // Clear form fields
        userName.value = '';
        userEmail.value = '';
        messageField.value = '';

        console.log(res);
        alert('This form has been successfully submitted!');
      })
      .catch(error => console.log(error.message));
  }
}

