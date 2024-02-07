// (function (Drupal) {
//
//   Drupal.behaviors.prokrutka = {
//     attach: function (context, settings) {
      document.addEventListener('DOMContentLoaded', function () {
        // Вибираємо всі посилання з якорями
        var anchorLinks = document.querySelectorAll('a[href^="#"]');

        // Додаємо обробник подій для кожного посилання
        anchorLinks.forEach(function (link) {
          link.addEventListener('click', function (e) {
            // Зупиняємо стандартну обробку події (перехід за посиланням)
            e.preventDefault();

            // Отримуємо ідентифікатор якоря з атрибуту href
            var targetId = link.getAttribute('href').substring(1);

            // Знаходимо елемент якоря
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
              // Отримуємо відстань до верхньої частини елемента
              var targetOffset = targetElement.offsetTop - 200;

              // Плавно прокручуємо до елемента
              window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
              });
            }
          });
        });
      })
    // }
//   }
// })(Drupal)

// Drupal.behaviors.addClass = {
//   attach: function (context, settings) {
    document.addEventListener('DOMContentLoaded', function() {
      let elements = document.querySelector('.field--name-field-button-left-');
      let elements2 = document.querySelector('.field--name-field-button-right-');
      let elements3 = document.querySelector('.field--name-field-button-left-2');
      let elements4 = document.querySelector('.field--name-field-button-right-2');
      if(elements && elements2 && elements3 && elements4) {
        elements.classList.add('swiper-button-prev');
        elements2.classList.add('swiper-button-next');
        elements3.classList.add('swiper-prev');
        elements4.classList.add('swiper-next');
      }
    })
//   }
// }

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if(hamburger){
  hamburger.addEventListener("click", function() {
    document.body.classList.toggle('lock');
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  })
}
const menuLinks = document.querySelectorAll('.menu a');

// Додати обробник подій для кожної силки
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Закрити меню тут, наприклад, видалення класу 'active'
    document.body.classList.remove('lock');
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});


//Swiper
Drupal.behaviors.sitesSwiper = {
  attach: function (context, settings) {
console.log('Trying to use Swiper:', Swiper);
    let swiper = new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  }
}

//Swiper
Drupal.behaviors.sitesSwiper2 = {
  attach: function (context, settings) {
    let swiper2 = new Swiper('.mySwiper2', {
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
    })
  }
}


//Hamburger
// Drupal.behaviors.hamburger = {
//   attach: function (context, settings) {
//
//   }
// }

// Drupal.behaviors.deleteSpace= {
//   attach: function (context, settings) {
//     let teaserDescr = document.querySelector('.mySwiper2');
//
//     if (teaserDescr) {
//       var textContent = teaserDescr.innerHTML;
//       var cleanedText = textContent.replace(/&nbsp;/g, '');
//       teaserDescr.innerHTML = cleanedText;
//     }
//   }
// }


