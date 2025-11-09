// Load and insert header and footer components
fetch('./components/header.html') // Fetch header component
    .then((response) => response.text()) // Convert response to text
    .then((headerHtml) => {
        fetch('./components/footer.html') // Fetch footer component
            .then((response) => response.text()) // Convert response to text
            .then((footerHtml) => { 
                // Insert header at the top and footer at the bottom of the body
                document.body.insertAdjacentHTML('afterbegin', headerHtml);
                document.body.insertAdjacentHTML('beforeend', footerHtml);
            })
            .catch((error) => console.error('Error loading footer:', error)); // Handle footer fetch errors
    })
    .catch((error) => console.error('Error loading header:', error)); // Handle header fetch errors
