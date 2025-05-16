document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultationForm');
  const confirmation = document.querySelector('.form-confirmation');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('consultName')?.value.trim(),
      email: document.getElementById('consultEmail')?.value.trim(),
      phone: document.getElementById('consultPhone')?.value.trim(),
      company: document.getElementById('consultCompany')?.value.trim(),
      service: document.getElementById('consultService')?.value,
      details: document.getElementById('consultDetails')?.value.trim(),
    };

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        form.reset();                     // clear fields
        form.style.display = 'none';     // hide the form
        confirmation.classList.add('show'); // show thank you message
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Network error. Please try again later.');
    }
  });
});
