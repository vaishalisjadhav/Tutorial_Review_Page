// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get all syllabus list items
    const syllabusItems = document.querySelectorAll('#syllabus li');
  
    // Add click event listener to each syllabus item
    syllabusItems.forEach(item => {
      item.addEventListener('click', function() {
        // Get the URL from the data-link attribute
        const link = item.getAttribute('data-link');
        // Redirect to the URL
        window.location.href = link;
      });
    });
  });
  