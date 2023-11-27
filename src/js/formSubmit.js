function sendEmail() {
  let params = {
    name: document.getElementById('form-name').value,
    email: document.getElementById('form-email').value,
    message: document.getElementById('form-message').value,
  };
  const serviceID = 'service_zd4sbq6';
  const templateID = 'template_abxrfhl';
  emailjs
    .send(serviceID, templateID, params)
    .then(res => {
      (document.getElementById('form-name').value = ''),
        (document.getElementById('form-email').value = ''),
        (document.getElementById('form-message').value = ''),
        console.log(res);
      alert('This form has been successfully submitted!');
    })
    .catch(error => console.log(error.message));
}

// submitForm.addEventListener('submit', event => {
// //   event.preventDefault();

//   if (userName.value === '' || userEmail.value === ''|| messageField.value === '') {
//     alert('Ensure you input a value in both fields!');
//   } else {
//     alert('This form has been successfully submitted!');
//   }
//   console.log(
//     `This form has a username of ${userName.value} and E-mail of ${userEmail.value}`
//   );
//   userName.value = '';
//     userEmail.value = '';
//     messageField.value = '';
// });
