const navigationLists = document.querySelectorAll('.navigation-list');

navigationLists.forEach((navigationList) =>
  navigationList.addEventListener('click', function (event) {
    const navigationLinks = document.querySelectorAll('.navigation-link');
    navigationLinks.forEach((navigationLink) => navigationLink.classList.remove('navigation-link--active'));

    const curentAttrribute = event.target.getAttribute('href');
    const curentNavigationLinks = document.querySelectorAll(`[href='${curentAttrribute}']`);
    curentNavigationLinks.forEach((curentNavigationLink) =>
      curentNavigationLink.classList.add('navigation-link--active')
    );

    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach((lessonItem) => lessonItem.classList.add('hidden'));
    const id = event.target.getAttribute('href');
    const curentblock = document.querySelector(`${id}`);
    curentblock.classList.remove('hidden');

    curentblock
      .querySelectorAll('.lesson-navigation--list')
      .forEach((item) => item.firstElementChild.firstElementChild.classList.add('navigation-link--active'));
    curentblock.querySelectorAll('.lesson-list').forEach((item) => item.firstElementChild.classList.remove('hidden'));
  })
);

const lessonNavigationLists = document.querySelectorAll('.lesson-navigation--list');

lessonNavigationLists.forEach((lessonNavigationList) =>
  lessonNavigationList.addEventListener('click', function (event) {
    const lessonNavigationLinks = document.querySelectorAll('.lesson-navigation--link');
    lessonNavigationLinks.forEach((lessonNavigationLink) =>
      lessonNavigationLink.classList.remove('navigation-link--active')
    );

    const curentAttrribute = event.target.getAttribute('href');
    const curentLessoneNavigationItems = document.querySelectorAll(`[href='${curentAttrribute}']`);
    curentLessoneNavigationItems.forEach((curentLessoneNavigationItem) =>
      curentLessoneNavigationItem.classList.add('navigation-link--active')
    );

    const lessoneContentItems = document.querySelectorAll('.lesson-content--item');
    lessoneContentItems.forEach((lessoneContentItem) => lessoneContentItem.classList.add('hidden'));
    const id = event.target.getAttribute('href');
    const curentblock = document.querySelector(`${id}`);
    curentblock.classList.remove('hidden');
  })
);

//! Puzzle

const slider = document.querySelector('.slider');
const sliderItems = Array.from(slider.children);
const btnNex = document.querySelector('.btn-next');
const btnAgain = document.querySelector('.btn-again');

function init() {
  sliderItems.forEach(function (slide, index) {
    // Скрываем кнопку 'почати знову'
    btnAgain.classList.add('hidden');
    // Удаляем класс hidden c первого єлемента
    sliderItems[0].classList.remove('hidden');
    // Добавляем кнопку btnNext
    btnNex.classList.remove('hidden');
    // Скрываем все слайды кроме первого
    if (index !== 0) slide.classList.add('hidden');
    // Добавляем атрибут data-index со значением index
    slide.dataset.index = index;
    // Добавляем атрибут data-active для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '');
  });
}

init();

let nextSlideIndex;

function showNextSlide() {
  // Скрываем текущий слайд
  const currentSlide = slider.querySelector('[data-active]');
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');
  // let nextSlideIndex;
  nextSlideIndex = currentSlideIndex + 1;
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove('hidden');
  nextSlide.setAttribute('data-active', '');
}

btnNex.addEventListener('click', function () {
  if (nextSlideIndex === sliderItems.length - 2) {
    showNextSlide();
    btnNex.classList.add('hidden');
    btnAgain.classList.remove('hidden');
    return;
  }
  showNextSlide();
});

btnAgain.addEventListener('click', function () {
  init();
});
