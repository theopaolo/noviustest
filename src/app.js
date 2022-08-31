import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Glide, { Controls, Autoplay } from "@glidejs/glide/dist/glide.modular.esm";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import Alpine from 'alpinejs';
import './style.css'

window.Alpine = Alpine
Alpine.start(); // Start Alpine

const glide = new Glide('.glide', {
  autoplay: "3000",
}).mount({ Controls, Autoplay });

flatpickr(".calendar", {
  position: "[above][left]",
  static: true,
  appendTo: window.document.querySelector('.calendar')
});

let bullets = document.querySelectorAll('.bullet');

// Add event listener to each bullet
bullets.forEach(bullet => {
  bullet.addEventListener('click', function() {
    glide.go(bullet.dataset.dir);
    // Remove all active classes
    bullets.forEach(bullet => {
      bullet.classList.remove('active');
    });
    // Add active class to clicked bullet
    bullet.classList.add('active');
  });
});