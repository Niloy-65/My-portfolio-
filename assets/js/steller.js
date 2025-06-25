/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {
		console.log("Button clicked");


    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});




document.getElementById("show-more-btn").addEventListener("click", function() {
	var additionalItems = document.getElementById("additional-portfolio-items");
	if (additionalItems.style.display === "none" || additionalItems.style.display === "") {
		additionalItems.style.display = "flex";
		this.textContent = "Show Less";
	} else {
		additionalItems.style.display = "none";
		this.textContent = "Show More";
	}
});

// Function to open the popup
function openPopup(element) {
    var popup = document.getElementById("imagePopup");
    var img = element.closest('.img-wrapper').querySelector('.portfolio-img').src;
    var popupImg = document.getElementById("popup-img");
    popup.style.display = "block";
    popupImg.src = img;
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("imagePopup");
    popup.style.display = "none";

	
}
document.getElementById('menuToggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});


//----------------certification section------------//

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));
});
