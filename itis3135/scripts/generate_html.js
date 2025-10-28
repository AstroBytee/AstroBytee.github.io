function generateHTML() {
    // Get the introduction content as HTML string
    let content = createIntroduction();
    // Display the content inside a <pre><code> block to preserve formatting
    document.getElementById('outputContainer').innerHTML = `<pre><code>&lth2&gtIntroduction HTML&lt/h2&gt${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
    // Set the heading to indicate HTML output
    document.getElementsByTagName('h2')[0].textContent = "Introduction HTML";
    // Apply syntax highlighting
    hljs.highlightAll();
}
// Event listener for the Generate HTML button
document.getElementById('generateHTML').addEventListener('click', generateHTML);