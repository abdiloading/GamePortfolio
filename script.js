
// Get modal elements
var modal = document.getElementById("gameModal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

// Make all game card images clickable
document.querySelectorAll('.game-card img').forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;        // Show clicked image
    captionText.innerHTML = this.alt; // Show alt as caption
  });
});

// Close modal on X
span.onclick = function() {
  modal.style.display = "none";
};

// Close modal when clicking outside image
modal.onclick = function(e) {
  if(e.target === modal) {
    modal.style.display = "none";
  }
};

