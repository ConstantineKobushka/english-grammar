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
      .forEach((item) => item.firstElementChild.firstElementChild.classList.add('lesson-navigation--link-active'));
    curentblock.querySelectorAll('.lesson-list').forEach((item) => item.firstElementChild.classList.remove('hidden'));
  })
);

const lessonNavigationLists = document.querySelectorAll('.lesson-navigation--list');

lessonNavigationLists.forEach((lessonNavigationList) =>
  lessonNavigationList.addEventListener('click', function (event) {
    const lessonNavigationLinks = document.querySelectorAll('.lesson-navigation--link');
    lessonNavigationLinks.forEach((lessonNavigationLink) =>
      lessonNavigationLink.classList.remove('lesson-navigation--link-active')
    );

    const curentAttrribute = event.target.getAttribute('href');
    const curentLessoneNavigationItems = document.querySelectorAll(`[href='${curentAttrribute}']`);
    curentLessoneNavigationItems.forEach((curentLessoneNavigationItem) =>
      curentLessoneNavigationItem.classList.add('lesson-navigation--link-active')
    );

    const lessoneContentItems = document.querySelectorAll('.lesson-content--item');
    lessoneContentItems.forEach((lessoneContentItem) => lessoneContentItem.classList.add('hidden'));
    const id = event.target.getAttribute('href');
    const curentblock = document.querySelector(`${id}`);
    curentblock.classList.remove('hidden');
  })
);
