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

    const descriptionItems = document.querySelectorAll('.description-item');
    descriptionItems.forEach((descriptionItem) => descriptionItem.classList.add('hidden'));
    const id = event.target.getAttribute('href');
    const curentblock = document.querySelector(`${id}`);
    curentblock.classList.remove('hidden');

    curentblock
      .querySelectorAll('.list')
      .forEach((item) => item.firstElementChild.firstElementChild.classList.add('precourse-navigation--link-active'));
    curentblock
      .querySelectorAll('.description--list')
      .forEach((item) => item.firstElementChild.classList.remove('hidden'));
  })
);

const testNavigationLists = document.querySelectorAll('.list');

testNavigationLists.forEach((testNavigationList) =>
  testNavigationList.addEventListener('click', function (event) {
    const precourseNavigationLinks = document.querySelectorAll('.link');
    precourseNavigationLinks.forEach((precourseDescriptionItem) =>
      precourseDescriptionItem.classList.remove('precourse-navigation--link-active')
    );

    const curentAttrribute = event.target.getAttribute('href');
    const curentPrecourseNavigationItems = document.querySelectorAll(`[href='${curentAttrribute}']`);
    curentPrecourseNavigationItems.forEach((curentPrecourseNavigationItem) =>
      curentPrecourseNavigationItem.classList.add('precourse-navigation--link-active')
    );

    const precourseContentItems = document.querySelectorAll('.item');
    precourseContentItems.forEach((precourseContentItem) => precourseContentItem.classList.add('hidden'));
    const id = event.target.getAttribute('href');
    const curentblock = document.querySelector(`${id}`);
    curentblock.classList.remove('hidden');
  })
);
