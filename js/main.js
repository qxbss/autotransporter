const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-item');

function toggleMenu() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('menu-closing'); // Добавляем класс закрытия
        setTimeout(() => {
            menu.classList.remove('menu-closing');
            document.body.classList.remove('menu-open');
        }, 300); // Задержка для завершения анимации
    } else {
        menu.classList.add('open');
        document.body.classList.add('menu-open');
    }
}

function closeMenu() {
    menu.classList.remove('open');
    menu.classList.add('menu-closing'); // Добавляем класс закрытия
    setTimeout(() => {
        menu.classList.remove('menu-closing');
        document.body.classList.remove('menu-open');
    }, 300); // Учитываем длительность анимации
}

// Открытие/закрытие по клику на гамбургер
hamburgerMenu.addEventListener('click', toggleMenu);

// Закрытие меню при клике на ссылку
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});


const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
let currentIndex = 0;

function getSliderItems() {
  return document.querySelectorAll('.slider-item');
}

function showSlide(index) {
  const sliderItems = getSliderItems();
  sliderItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

document.querySelectorAll('.slider-prev').forEach(button => {
  button.addEventListener('click', () => {
    const sliderItems = getSliderItems(); // Обновляем список слайдов
    currentIndex = (currentIndex === 0) ? sliderItems.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });
});

document.querySelectorAll('.slider-next').forEach(button => {
  button.addEventListener('click', () => {
    const sliderItems = getSliderItems(); // Обновляем список слайдов
    currentIndex = (currentIndex === sliderItems.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });
});

// Initialize the first slide
showSlide(currentIndex);

document.querySelectorAll('.slider-image').forEach(imageContainer => {
  const img = imageContainer.querySelector('img');

  // Добавляем плавный переход для изменения масштаба
  img.style.transition = 'transform 0.3s ease-out, transform-origin 0.3s ease-out';

  imageContainer.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = imageContainer.getBoundingClientRect();
    const offsetX = e.clientX - left; // Координата мыши внутри контейнера
    const offsetY = e.clientY - top;

    const scale = 1.7; // Коэффициент увеличения

    // Вычисляем проценты позиции мыши
    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;

    // Применяем трансформацию: увеличиваем и фокусируемся по X/Y
    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    img.style.transform = `scale(${scale})`;
  });

  imageContainer.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)'; // Возвращаем исходный масштаб
    img.style.transformOrigin = 'center'; // Центрируем
  });
});










  
  
  
  
  
