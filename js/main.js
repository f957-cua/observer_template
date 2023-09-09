function scrollEvents() {   
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.nav__link');
    const menu = document.querySelector('.nav__list');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => {
                    const linkHref = link.getAttribute("href").replace('#', '');
                    if (linkHref === entry.target.id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                })
            }
        })
    }, {
        threshold: 0.8,
    });
    
    sections.forEach((section) => { observer.observe(section) });

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav__link')) {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').replace('#', '');

            window.scrollTo({
                top: document.getElementById(sectionId).offsetTop,
                behavior: "smooth",
            })
        }
    })
}

scrollEvents()

// Animate progress bar

function animateProgressBar() {
    const progress = document.querySelector('.progress__bar');
    // Scroll value from top
    const scrollValue = document.documentElement.scrollTop;
    // Height whole element
    const documentHeight = document.documentElement.scrollHeight;
    // Client viewport height
    const viewPortHeight = document.documentElement.clientHeight;
    // Difference between height of documents and height of client viewport
    const height = documentHeight - viewPortHeight;
    // Scrolling percentage
    const scrollPercent = (scrollValue / height) * 100;
    console.log("scrollPercent", scrollPercent)

    // Attach scrolling style to progress bar
    progress.style.width = scrollPercent + "%";
}

window.addEventListener('scroll', animateProgressBar);