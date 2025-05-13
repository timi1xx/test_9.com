const ua = navigator.userAgent;

let clicked = null;
let clicked_button = null

if (/mobile/i.test(ua)) {
    console.log("Пользователь зашел с телефона 📱");
} else if (/tablet/i.test(ua)) {
    console.log("Пользователь зашел с планшета 📲");
} else {
    console.log("Пользователь зашел с компьютера 🖥️");
}
$(document).ready(function() {
    $("#home-image").click(function() {
        $('html, body').animate({
            scrollTop: $(".menu").offset().top
        }, 1000);
    });
    $('#products-image').click(function () {
        $('html, body').animate({
            scrollTop: $(".section-wrapper").offset().top
        }, 1000);
    })
    $('#categories-image').click(function () {
        $('html, body').animate({
            scrollTop: $(".buttons").offset().top
        }, 2000);
    })
});
// main code!!!
$(document).ready(function () {
    // меню
    if (/mobile/i.test(ua)) {
        $('#menu-image').css({
            'position:': 'fixed',
            'width': '70px',
            'height': '70px',
            'top': '10px',
            'left': '785px',
        });
    }
    // Обработчик клика выносим за пределы scroll
    $('#arrow-image').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500); // плавный скролл вверх
        $(this).fadeOut(); // скрываем стрелку после нажатия
    });

    // Отдельно обрабатываем скролл
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 100) {
            $('#arrow-image').fadeIn();
        } else {
            $('#arrow-image').fadeOut();
        }
    });

    // home
    $('.home').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }

        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '860px',
                'top': '-17px',
                'width': '205px',
                'height':'115px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        $('#home-image').css({
            'position': 'fixed',
            'left': '775px',
            'top': '7px',
            'width': '75px',
            'height': '75px',
            'z-index': '10'
        }).attr('src', 'IMAGES/home_1.png');

        clicked = 'home';
    });

    // products
    $('.products').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }

        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '860px',
                'top': '-17px',
                'width': '205px',
                'height':'115px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        $('#products-image').css({
            'position': 'fixed',
            'left': '855px',
            'top': '20px',
            'width': '45px',
            'height': '45px',
            'z-index': '10'
        }).attr('src', 'IMAGES/cup_2.png');

        clicked = 'products';
    });

    // categories
    $('.categories').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        // сброс всего, если активно
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }

        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        $('#categories-image').css({
            'position': 'fixed',
            'left': '910px',
            'top': '10px',
            'width': '90px',
            'height': '70px',
            'z-index': '1'
        }).attr('src', 'IMAGES/categories_2.png');

        clicked = 'categories';
    });
    
    // why_us
    $('.why_us').click(function (e) {
        e.stopPropagation()
        e.preventDefault()

        // сброс всего, есл активно
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }
        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '860px',
                'top': '-17px',
                'width': '205px',
                'height':'115px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }
        $('#why-us_image').css({
            'position': 'fixed',
            'left': '1000px',
            'top': '25px',
           'width': '45px',
            'height': '35px',
        }).attr('src', 'IMAGES/why-us_2.png')
        clicked = 'why_us';
    });
    
    // reviews
    $('.reviews').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        // сброс всего, если активно
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }
        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '860px',
                'top': '-17px',
                'width': '205px',
                'height':'115px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }
        $('#reviews-image').css({
            'position': 'fixed',
            'left': '1060px',
            'top': '20px',
            'width': '110px',
            'height': '50px',
        }).attr('src', 'IMAGES/reviews_2.png');

        clicked = 'reviews';
    });

    // contact
    $('.contact').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        // сброс всего, если активно
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '795px',
                'top': '20px',
                'width': '40px',
                'height': '40px',
                'z-index': '10'
            }).attr('src', 'IMAGES/home_2.png');
        }
        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }
        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '860px',
                'top': '-17px',
                'width': '205px',
                'height':'115px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '25px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        $('#contact-image').css({
            'position': 'fixed',
            'left': '1140px',
            'top': '13px',
            'width': '120px',
            'height': '55px',
        }).attr('src', 'IMAGES/contact_2.png');

        clicked = 'contact';
    });

    // Сброс по клику все
    $(window).click(function () {
        if (clicked === 'home') {
            $('#home-image').css({
                'position': 'fixed',
                'left': '790px',
                'top': '19px',
                'width': '40px',
                'height': '40px',
                'z-index': '1'
            }).attr('src', 'IMAGES/home_2.png');
        }

        if (clicked === 'products') {
            $('#products-image').css({
                'position': 'fixed',
                'left': '820px',
                'top': '0px',
                'width': '120px',
                'height': '100px',
                'z-index': '1'
            }).attr('src', 'IMAGES/cup_1.png');
        }

        if (clicked === 'categories') {
            $('#categories-image').css({
                'position': 'fixed',
                'left': '860px',
                'top': '-17px',
                'width': '205px',
                'height':'115px',
                'z-index': '1'
            }).attr('src', 'IMAGES/categories_1.png');
        }
        if (clicked === 'why_us') {
            $('#why-us_image').css({
                'position': 'fixed',
                'left': '1000px',
                'top': '23px',
                'width': '50px',
                'height': '40px',
            }).attr('src', 'IMAGES/why-us_1.png');
        }
        if (clicked === 'reviews') {
            $('#reviews-image').css({
                'position': 'fixed',
                'left': '1090px',
                'top': '30px',
                'width': '50px',
                'height': '30px', 
            }).attr('src', 'IMAGES/reviews_1.png');
        }
        if (clicked === 'contact') {
            $('#contact-image').css({
                'position': 'fixed',
                'left': '1140px',
                'top': '10px',
                'width': '130px',
                'height': '65px',
            }).attr('src', 'IMAGES/contact_1.png');
        }

        clicked = null;
    });
    // COFFEE ANIMATION!!!
    $(document).ready(function(){
        let coffeeImages = [
            'IMAGES/arabica.png',
            'IMAGES/robusta.png',
            'IMAGES/liberica.png',
            'IMAGES/excelsa.png'
        ];
    
        let container = $('.coffee-animation');
        let index = 0;
    
        function animateNextPack() {
            if (index >= coffeeImages.length) index = 0;
    
            let $img = $('<img>')
                .attr('src', coffeeImages[index])
                .addClass('coffee-pack')
                .css({ left: '100%' }) // начальная позиция — справа за экраном
                .appendTo(container);
    
            $img.animate({ left: '35%' }, 1000, 'swing', function() {
                setTimeout(function() {
                    $img.animate({ left: '-40%' }, 1000, 'swing', function() {
                        $img.remove(); // удаляем картинку после выхода
                        index++;
                        setTimeout(animateNextPack, 500); // пауза перед следующей
                    });
                }, 1000); // пауза в центре
            });
        }
    
        animateNextPack(); // запуск
    });
});
// categories-section
$(document).ready(function () {
    $('.product-1-button').click(function() {
        $('.categorie-image').attr('src', 'IMAGES/white.png');
        $('.categorie-name').text('White Coffee');
        $('.categorie-text').text('White coffee is made from lightly roasted or unroasted beans, giving it a much lighter color and a milder, smoother taste compared to traditional coffee. It retains more antioxidants due to the minimal roasting process, making it a healthier option for some. The flavor is less bitter and often described as nutty or earthy. Because of its low acidity, white coffee is ideal for those with sensitive stomachs. Its unique profile has made it increasingly popular among coffee enthusiasts seeking something different.');
    });
    $('.product-2-button').click(function () {
        $('.categorie-image').attr('src', 'IMAGES/black.png');
        $('.categorie-name').text('Black Coffee');
        $('.categorie-text').text('Black coffee is a popular beverage loved by many for its bold and robust flavor. Unlike other coffee drinks, it is made by brewing coffee beans without adding milk or sugar, allowing the natural taste to shine through. Some people prefer black coffee for its rich, intense taste and energizing effect, as it contains a higher concentration of caffeine. Whether enjoyed in the morning or as an afternoon pick-me-up, black coffee is a simple yet satisfying choice for coffee lovers. Its versatility also makes it an ideal base for various coffee drinks, such as iced coffee or espresso.');
    });
    $('.product-3-button').click(function() {
        $('.categorie-image').attr('src', 'IMAGES/ground.png');
        $('.categorie-name').text('Ground Coffee');
        $('.categorie-text').text('Ground coffee is made by grinding roasted coffee beans into fine particles, making it ready for brewing in methods like drip, French press, or espresso. It offers a rich aroma and flavor that captures the essence of freshly roasted beans. Many people prefer ground coffee for its convenience and quick preparation. It can vary in grind size, which affects the strength and taste of the final cup. Ground coffee remains one of the most popular forms of coffee used in homes and cafes around the world.');       
    });
    // if(/mobile/i.test(ua)) {
    //     $('.product-1-button').click(function() {
    //         $(this).css({
    //             'background-color': '#876145'
    //         })
    //     });
    //     $('.product-2-button').click(function() {
    //         $(this).css({
    //             'background-color': '#876145'
    //         })
    //     });
    //     $('.product-3-button').click(function() {
    //         $(this).css({
    //             'background-color': '#876145'
    //         })
    //     });
    // };
    if (/mobile/i.test(ua)) {
        // Сохраняем кнопки в переменную
        const buttons = $('.product-1-button, .product-2-button, .product-3-button');
    
        // При клике на любую кнопку
        buttons.click(function(e) {
            e.stopPropagation(); // предотвращает всплытие, чтобы не сработал общий обработчик
            buttons.css('background-color', '#f5f5f5'); // сбрасываем цвет у всех
            $(this).css('background-color', '#876145'); // меняем цвет только нажатой
        });
    
        // При клике в любое место на странице, кроме кнопок
        $(document).click(function() {
            buttons.css('background-color', '#f5f5f5');
        });
    }
});
// $('.product-1-button').css({
//     'background-color': '#f5f5f5'
// });





