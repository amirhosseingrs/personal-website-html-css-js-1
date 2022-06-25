const navMenu = document.getElementById("nav-menu"),
      navOpen = document.getElementById("nav-open"),
      navClose= document.getElementById("nav-close"),
      navLinks= document.querySelectorAll(".nav__link")

if (navOpen){
    navOpen.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}
if (navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

navLinks.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove("show-menu")
}))


// Skills
const SkillsArrow = document.querySelectorAll('.skills__arrow'),
      SkillsList = document.querySelectorAll('.skills__list')

function ToggleList(list,index){ 
    list.classList.remove("show-list")
    SkillsArrow.forEach(arrow => arrow.classList.replace("uil-angle-up", "uil-angle-down"))
}

SkillsArrow.forEach((arrow,index) => arrow.addEventListener("click", () => {
    SkillsList.forEach((list,index) => ToggleList(list,index))
    if (arrow.classList.contains("uil-angle-down")){
        SkillsList[index].classList.add("show-list")
        arrow.classList.replace("uil-angle-down","uil-angle-up")
    }else {
        SkillsList[index].classList.remove("show-list")
        arrow.classList.replace("uil-angle-up","uil-angle-down")
    }
})) 


// Qualifications
const EduBtn = document.getElementById("edubtn"),
      WorkBtn = document.getElementById("workbtn"),
      EduContent = document.getElementById("education"),
      WorkContent = document.getElementById("work")

EduBtn.addEventListener("click", () => {
    EduContent.classList.add("qualification__active")
    WorkContent.classList.remove("qualification__active")
    EduBtn.classList.add("qualification__button-active")
    WorkBtn.classList.remove("qualification__button-active")
})
WorkBtn.addEventListener("click", () => {
    EduContent.classList.remove("qualification__active")
    WorkContent.classList.add("qualification__active")
    EduBtn.classList.remove("qualification__button-active")
    WorkBtn.classList.add("qualification__button-active")
})


// Services Section
const Modals = document.querySelectorAll(".services__modal"),
      OpenModals = document.querySelectorAll(".services__button"),
      CloseModals = document.querySelectorAll(".services__modal-close")

OpenModals.forEach((opener, index) => opener.addEventListener("click", () => {
    Modals[index].classList.add("services__modal-active")
}))
CloseModals.forEach((closer, index) => closer.addEventListener("click", () => {
    Modals[index].classList.remove("services__modal-active")
}))
Modals.forEach((modal) => modal.addEventListener("click", () => {
    modal.classList.remove("services__modal-active")
}))

// Portfolio - Swiper
let PortfolioSwiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable : true,
    },
    mousewheel: true,
    keyboard: true,
  });

// Testimonials - Swiper
let TestimonialsSwiper = new Swiper(".testimonials__container", {
    grabCursor: true,
    spaceBetween:  48,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable : true,
      dynamicBullet : true,
    },
    mousewheel: true,
    keyboard: true,
  });



// Scroll Up Show and Hide
const scrollBtn = document.getElementById("scroll-up")
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.right = "1rem"
    }else {
        scrollBtn.style.right = "-5rem"
    }
})

// Dark Theme
const themeButton = document.getElementById("theme-button")
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
})