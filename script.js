// Turn pages when clicking next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

// Contact me button
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

// Reverse index function (Fixed to cycle correctly)
let totalPages = pages.length;
let pageNumber = totalPages; // Start from the last page

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// Back to Profile button
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.remove('turn');
            setTimeout(() => {
                page.style.zIndex = 20 - index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });

    setTimeout(() => {
        document.querySelector('.profile-page').style.zIndex = 20;
    }, totalPages * 200 + 500);
};

// Opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

// Ensure pages have correct startup animation order
pages.forEach((page, index) => {
    setTimeout(() => {
        page.classList.remove('turn');
        page.style.zIndex = 20 - index;
    }, (index + 1) * 200 + 2100);
});
