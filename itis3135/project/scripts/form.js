const form = document.getElementById('contact-form');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Disable the submit button and show loading text
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Prepare form data
    const formData = new FormData(form);
    formData.append('access_key', '252320b8-01d4-4634-bcae-98a632ee7037');

    // Send the form data to Web3Forms API
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const result = await response.json();
        if (result.success) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("There was an error sending your message.");
        }
    } catch (error) {
        alert("There was an error sending your message.");
    } finally {
        // Re-enable the submit button and reset text
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    }
});