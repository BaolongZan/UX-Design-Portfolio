function showListItems() {
    var projects = document.querySelectorAll('.ProjectsList');
    var windowHeight = window.innerHeight;

    projects.forEach(function(project, index) {
        var projectTop = project.getBoundingClientRect().top;
        var projectBottom = project.getBoundingClientRect().bottom;

        if (projectTop < windowHeight && projectBottom > 0) {
            setTimeout(function() {
                project.classList.add('visible');
            }, index * 50); // increase delay time
        } else {
            // the element not in the windows
            project.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', showListItems);



const tooltip = document.getElementById('tooltip');
const contents = document.getElementsByClassName('Nocontent');

Array.from(contents).forEach(content => {
    content.addEventListener('mouseover', function(e) {
        const text = e.target.textContent;

        content.addEventListener('mousemove', moveTooltip);

        tooltip.textContent = "No Link";
        tooltip.style.display = 'block';
    });

    content.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
        content.removeEventListener('mousemove', moveTooltip);
    });
});

function moveTooltip(e) {
    const { clientX, clientY } = e;
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    tooltip.style.top = `${clientY - tooltipHeight - 10}px`;
    tooltip.style.left = `${clientX - tooltipWidth / 2}px`;
}


// Show button when user scrolls down 100px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("GoTopImg").style.display = "block";
    } else {
        document.getElementById("GoTopImg").style.display = "none";
    }
}

// Go to the corresponding location when the user button is clicked

function scrollToPro() {
    var element = document.getElementById("TargetPro");
    var rect = element.getBoundingClientRect(); // Gets the position of an element relative to the viewport
    var offsetTop = rect.top + window.pageYOffset - 100; // Calculate the position 100px above the target position

    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}

function scrollToExper() {
    var element = document.getElementById("TargetExper");
    var rect = element.getBoundingClientRect(); // Gets the position of an element relative to the viewport
    var offsetTop = rect.top + window.pageYOffset - 100; // Calculate the position 100px above the target position

    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}

function scrollToCon() {
    var element = document.getElementById("TargetCon");
    var rect = element.getBoundingClientRect(); // Gets the position of an element relative to the viewport
    var offsetTop = rect.top + window.pageYOffset - 100; // Calculate the position 100px above the target position

    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}

// Go back to top of page when the user click the button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}