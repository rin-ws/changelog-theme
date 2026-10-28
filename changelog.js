// JavaScript for RINwiki Changelog Blog

document.addEventListener('DOMContentLoaded', function() {
    console.log('RINwiki Changelog Blog loaded successfully');
    
    // Initialize random advertisement
    initializeAdvertisement();
    
    // Burger menu functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
            burgerMenu.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                burgerMenu.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

// Function to initialize random advertisement
function initializeAdvertisement() {
    // Define advertising partners
    const adPartners = [
        {
            name: 'PrimeVideo',
            image: 'https://cdn.rinws.com/1.0.0/images/94837.gif',
            link: 'https://www.amazon.de/gp/video/offers/ref=atv_pv_new_offer?ie=UTF8&*Version*=1&*entries*=0&tag=visua03-21&linkCode=ur1'
        },
        {
            name: 'PrimeVideo Aniverse',
            image: 'https://cdn.rinws.com/1.0.0/images/hunterxhunter.jpg',
            link: 'https://www.amazon.de/gp/video/offers/?tag=visua03-21&linkCode=ur1&benefitId=aniversede'
        },
        {
            name: 'all-inkl.com',
            image: 'https://cdn.rinws.com/1.0.0/images/4839203049582.gif',
            link: 'https://all-inkl.com/PA50AE9C3984D00'
        }
    ];
    
    // Select a random ad partner
    const randomIndex = Math.floor(Math.random() * adPartners.length);
    const selectedAd = adPartners[randomIndex];
    
    // Update the ad elements
    const adLink = document.getElementById('ad-link');
    const adImage = document.getElementById('ad-image');
    const adContainer = document.querySelector('.ad-container');
    
    if (adLink && adImage && adContainer) {
        adLink.href = selectedAd.link;
        adImage.src = selectedAd.image;
        adImage.alt = 'Werbung: ' + selectedAd.name;
        adContainer.style.display = 'block';
        console.log('Selected ad partner:', selectedAd.name);
    } else {
        console.error('Ad elements not found on page');
    }
}