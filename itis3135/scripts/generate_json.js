function generateJSON() {
    // Get the form data.
    let data = collectFormData();
    // If data collection failed (e.g., due to validation), exit the function.
    if (!data) { return; }
    // Convert the data to a JSON string with indentation for readability.
    let jsonString = JSON.stringify(data, null, 4);
    // Display the JSON string inside a <pre><code> block to preserve formatting
    document.getElementById('outputContainer').innerHTML = `<pre><code>${jsonString}</code></pre>`;
    // Set the heading to indicate JSON output
    document.getElementsByTagName('h2')[0].innerText = "Introduction JSON";
    // Apply syntax highlighting
    hljs.highlightAll();
    // Hide the form elements to focus on the output
    toggleForm("hide");
}
// Event listener for the Generate JSON button
document.getElementById('generateJSON').addEventListener('click', generateJSON);
