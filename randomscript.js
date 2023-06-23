window.addEventListener('DOMContentLoaded', function() {
  var backgrounds = ['background5.jpg', 'background6.jpg']; // Add the file names of your background images
  var randomIndex = Math.floor(Math.random() * backgrounds.length);
  var randomImage = backgrounds[randomIndex];
  document.body.style.backgroundImage = 'url(' + randomImage + ')';
});
