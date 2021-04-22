$(document).ready(function() {
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 1;
    const container = $('.feedbacks__container');
    const track = $('.feedbacks__track');
    // const items = document.querySelectorAll('.feedbacks__item');
    const items = $('.feedbacks__item');
    const itemWidth = items.width() * 0.6; 
    btnPrev = $('.prev');
    btnNext = $('.next');
    const movePosition = itemWidth * slidesToScroll;
    let itemNumber = 1;
    const itemsCount = items.length;
    const menu = document.querySelector('.header__menu');
    const hamburger = document.querySelector('.hamburger');
    const menuItems = document.querySelectorAll('.header__menu_item');
    console.log(menuItems[0]);
    console.log('1');
    
    // item.each(function(index, item) {
    //     &(item)
    // })
    items.each(function(index,item) {
        $(item).addClass('feedbacks__item_small')
    });
    items[1].classList.remove('feedbacks__item_small');
    console.log(movePosition);
    btnNext.click(function() {
        items[itemNumber].classList.add('feedbacks__item_small');
        items[itemNumber].animate({zoom: 1.2});
        itemNumber += 1;
        items[itemNumber].classList.remove('feedbacks__item_small');
        
        
        position -= movePosition;
        setPosition();
        checkBtns();
    });
    btnPrev.click(function() {
        items[itemNumber].classList.add('feedbacks__item_small');
        itemNumber -= 1;
        items[itemNumber].classList.remove('feedbacks__item_small');

        position += movePosition;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };
    
    
    const checkBtns = () => {
        console.log(itemsCount);
        console.log(position);
        btnPrev.prop('disabled', position === itemWidth);
        btnNext.prop('disabled', position === -(((itemsCount-slidesToShow + 1) * itemWidth))); 
    }

    // scroll

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    })
    $(function(){
        $("a[href^='#']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });

    hamburger.addEventListener('click', function(){
        menu.classList.toggle('header__menu_active');
        hamburger.classList.toggle('hamburger_active');
    });
    menuItems.forEach(function(item) {
        console.log('1');
        item.addEventListener('click', function() {
            console.log('1');
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});