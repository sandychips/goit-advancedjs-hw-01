// An object for storing form data
const formData = {
    email: '',
    message: '',
  };
  
  // Form
  const form = document.querySelector('.feedback-form');
  
  // Checking local storage when loading a page
  window.addEventListener('load', () => {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedData) {
      formData.email = savedData.email || '';
      formData.message = savedData.message || '';
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  });
  
  // Delegation of events for input tracking
  form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value.trim(); // We save data without spaces
    localStorage.setItem('feedback-form-state', JSON.stringify(formData)); // Save to local storage
  });
  
  // Form submission processing
  form.addEventListener('submit', event => {
    event.preventDefault();
  
    // Check that the fields are filled in
    if (formData.email === '' || formData.message === '') {
      alert('Fill please all fields');
      return;
    }
  
    // Data output to the console
    console.log(formData);
  
    // Cleanup of local storage and forms
    localStorage.removeItem('feedback-form-state');
    form.reset();
    Object.keys(formData).forEach(key => (formData[key] = '')); // Reset the formData object
  });