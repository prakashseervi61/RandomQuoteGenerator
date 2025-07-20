const stars = document.querySelectorAll('.star');
const ratingText = document.querySelector('p span');
let selectedRating = 0;
// Handle mouseover (hover effect)
stars.forEach((star, index) => {

  star.addEventListener('mouseover', () => {
    updateStars(index + 1);
  });

  // Handle click (permanent selection)
  star.addEventListener('click', () => {
    selectedRating = index + 1;
    ratingText.textContent = `${selectedRating}/5`;
  });

  // Handle mouseout (return to selected rating)
  star.addEventListener('mouseout', () => {
    updateStars(selectedRating);
  });
  
});

function updateStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.color = 'gold';
    } else {
      star.style.color = '#ccc';
    }
  });
}
