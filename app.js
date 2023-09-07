// Get references to the tabs and their corresponding content
const discoverTab = document.getElementById('discover-tab');
const investTab = document.getElementById('invest-tab');
const prosperTab = document.getElementById('prosper-tab');
const discoverContent = document.getElementById('discover-content');
const investContent = document.getElementById('invest-content');
const prosperContent = document.getElementById('prosper-content');

// Function to hide all content
function hideAllContent() {
  discoverContent.style.display = 'none';
  investContent.style.display = 'none';
  prosperContent.style.display = 'none';
}

// Function to remove active class from all tabs
function removeActiveClassFromTabs() {
  discoverTab.classList.remove('active-tab');
  investTab.classList.remove('active-tab');
  prosperTab.classList.remove('active-tab');
}

// Add click event listeners to the tabs
discoverTab.addEventListener('click', () => {
  // Remove active class from all tabs
  removeActiveClassFromTabs();

  // Hide all content
  hideAllContent();

  // Show the Discover content
  discoverContent.style.display = 'grid';
  discoverTab.classList.add('active-tab'); // Add active class to the clicked tab
});

investTab.addEventListener('click', () => {
  // Remove active class from all tabs
  removeActiveClassFromTabs();

  // Hide all content
  hideAllContent();

  // Show the Invest content
  investContent.style.display = 'grid';
  investTab.classList.add('active-tab'); // Add active class to the clicked tab
});

prosperTab.addEventListener('click', () => {
  // Remove active class from all tabs
  removeActiveClassFromTabs();

  // Hide all content
  hideAllContent();

  // Show the Prosper content
  prosperContent.style.display = 'grid';
  prosperTab.classList.add('active-tab'); // Add active class to the clicked tab
});


const swiper = new Swiper('.swiper', {
  loop: false,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 3.5,
      spaceBetween: 20,
      direction: 'vertical',
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 40,
      direction: 'vertical',
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
      direction: 'horizontal',
    },
  },
});