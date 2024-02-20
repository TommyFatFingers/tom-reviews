document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const resultsContainer = document.getElementById('results');

    // Load the search index from fileList.json
    fetch(`../scripts/fileList.json?${new Date().getTime()}`)
        .then(response => response.json())
        .then(data => {
            const searchIndex = data.files;

            searchBox.addEventListener('input', function() {
                const query = this.value.replace(/-/g, '').toLowerCase();
                const results = searchIndex.filter(url => url.replace(/-/g, '').toLowerCase().includes(query));
                displayResults(results);
            });
        })
        .catch(error => console.error('Error loading the search index:', error));

        function displayResults(results) {
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = ''; // Clear previous results
            results.forEach(url => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = url; // Set the URL as the href attribute of the link
                a.textContent = url; // Use the URL as the link text or modify as needed
                a.target = "_blank"; // Optional: Opens the link in a new tab/window
                li.appendChild(a);
                resultsContainer.appendChild(li);
            });
        }
        
});
