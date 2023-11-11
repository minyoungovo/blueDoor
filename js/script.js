//네비게이션 메뉴 마우스 오버 슬라이드 01
/*$(function(){
    $(".menu > li").mouseover(function(){
        $(this).find("ul").stop().slideDown();
    }).mouseout(function () {
        $(this).find("ul").stop().slideUp();
      });
});*/

//네비게이션 메뉴 마우스 오버 슬라이드 02
$(function(){
    $(".nav").mouseover(function(){
        $('.sub').stop().slideDown();
    }).mouseout(function () {
        $('.sub').stop().slideUp();
      });
});
// $("p").slideToggle();

/* display:none 때문에 안 보였음
var sub_m = document.querySelector('.sub'),
    main_m = document.querySelector('.menu');

main_m.addEventListener('mouseover', function(){
    sub_m.style.display = 'block'; 	
    sub_m.style.height = '500px';
});

main_m.addEventListener('mouseout', function(){
    sub_m.style.display = 'none'; 	
    sub_m.style.height = '50px';
});
*/

/* ------------------------------------
예제 코드 - 한 메뉴 씩 드롭 다운
const gnbLi = document.querySelectorAll('.main_menu');
const subMenu = document.querySelectorAll('.sub_menu');

for (let i = 0; i < gnbLi.length; i++) {
    gnbLi[i].addEventListener('mouseover', function () {
        subMenu[i].classList.add('active');
    });

    gnbLi[i].addEventListener('mouseleave', function () {
        subMenu[i].classList.remove('active');
    });
}
*/