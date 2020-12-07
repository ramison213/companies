

// Откр/Закр бокового меню

(function() {
  const $burgerBtn = document.getElementById('burgerBtn');
  const $sideBar = document.querySelector('.sidebar');
  const $content = document.querySelector('.content');
  const $header = document.querySelector('.header');

  $burgerBtn.addEventListener('click', () => {
    $sideBar.classList.toggle('sidebar--expand');
    $content.classList.toggle('content--narrow');
    $header.classList.toggle('header--narrow');
  });
}());

// Переключение иконки Fullscreen

(function() {
  const $fullScreenBtn = document.getElementById('fullScreenBtn');

  $fullScreenBtn.addEventListener('click', () => {
    $fullScreenBtn.classList.toggle('full-screen');
    document.querySelector('.initial-screen-icon').classList.toggle('d-none');
    document.querySelector('.full-screen-icon').classList.toggle('d-none');
  });
}());

// Переключении иконки языка

(function() {
  const $flagItems = document.querySelectorAll('.flag-item');
  const $activeLang = document.querySelector('.active-lang');
  let activeLang = '';

  $flagItems.forEach(flagItem => {
    flagItem.addEventListener('click', () => {
      $flagItems.forEach(el => el.classList.remove('active'));

      flagItem.classList.add('active');
      activeLang = flagItem.dataset.lang;
      $activeLang.setAttribute('src', `img/lang/${activeLang}.svg`);
    })
  })
}());

// Откр / Закр расширенный поиск

(function() {
  const $searchOpenBtn = document.querySelector('.search-open-btn');
  const $extendedSearchBlock = document.querySelector('.extended-search');

  $searchOpenBtn.addEventListener('click', () => {
    $extendedSearchBlock.classList.toggle('d-none');
  })
}());

// Переключение иконки сортировки в таблице

(function() {
  const $sortHeaders = document.querySelectorAll('.sorted-column');

  $sortHeaders.forEach($sortHeader => {
    $sortHeader.addEventListener('click', () => {
      $sortHeader.querySelector('.sort-btn').classList.toggle('sorted');
    })
  })
}());

$('#daterange').daterangepicker({
  startDate: moment(),
  endDate: moment(),
  locale: {
    format: 'DD.MM.YYYY',
    cancelLabel: 'Отмена',
    applyLabel: "Применить",
    firstDay: 1,
    drops: "auto",
    daysOfWeek: [
      "вс",
      "пн",
      "вт",
      "ср",
      "чт",
      "пт",
      "сб"
    ],
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрел",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ],
  }
})