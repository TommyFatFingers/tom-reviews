console.log("hello");
aasync function search() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    try {
        // Fetch the JSON file containing the list of HTML files
        const response = await fetch('../scripts/fileList.json');
        const data = await response.json();

        // Remove hyphens from the input
        const normalizedInput = input.replace(/-/g, '');

        // Create a case-insensitive regular expression pattern based on the characters in the normalized input
        const pattern = new RegExp(Array.from(normalizedInput).join('.*'), 'i');

        // Filter HTML files based on the regular expression pattern
        const matchingFiles = data.files.filter(fileName => pattern.test(fileName));

        // Display links to the matching HTML files
        if (matchingFiles.length > 0) {
            matchingFiles.forEach(fileName => {
                var filePath = '/' + fileName;
                var link = document.createElement('a');
                link.href = filePath;
                link.textContent = fileName;

                resultsContainer.appendChild(link);
                resultsContainer.appendChild(document.createElement('br'));
            });
        } else {
            resultsContainer.innerHTML = '<p>No results found.</p>';
        }
    } catch (error) {
        console.error('Error fetching file list:', error);
    }
}

