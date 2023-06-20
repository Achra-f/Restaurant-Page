function pageLoad() {
    // Create and append elements to the DOM
    const content = document.getElementById('content');
  
    const header = document.createElement('header');
    header.textContent = 'Header';
  
    const contentImage = document.createElement('img');
    contentImage.src = 'image.jpg';
    contentImage.alt = 'Content Image';
  
    const footer = document.createElement('footer');
    footer.textContent = 'Footer';
  
    // Append elements to the content container
    content.appendChild(header);
    content.appendChild(contentImage);
    content.appendChild(footer);
  }
  
  export { pageLoad };