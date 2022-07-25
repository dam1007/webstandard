$(document).ready(function() {
    $('.btn').click(function(e){
        e.preventDefault();
//        $('#cont_nav').css('display','block');
//        $('#cont_nav').show();
//        $('#cont_nav').fadeIn();
//        $('#cont_nav').slideDown();
//        $('#cont_nav').toggle();
//        $('#cont_nav').fadeToggle();
          $('#cont_nav').slideToggle(200);
        
            $(this).toggleClass('on');
        
        
    });
    
    /* 탭메뉴 */
    var $tabMenu = $('.tab_menu');
    $tabMenu.find('ul ul').hide();
    $tabMenu.find('ul>li.active ul').show();
    
    function tabMenu(e){
        e.preventDefault();
        var $this = $(this);
        $this.parent('li').addClass('active').find('ul').show().parent('li').siblings('li').removeClass('active').find('>ul').hide();
    }
    
    $tabMenu.find('ul>li>a').click(tabMenu).focus(tabMenu);
    
    
    
    /* 슬라이더 */
    $('.ban').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
    });
    
    /* 레이어 팝업 */
    $('.layer').click(function(e){
        e.preventDefault();
        $('#layer').slideDown();
    });
    $('.close').click(function(e){
        e.preventDefault();
        $('#layer').slideUp();
    });
    
    
    /* 윈도우 팝업 */
    $('.window').click(function(e){
        e.preventDefault();
        //window.open('파일명','팝업이름','옵션설정');
        //옵션: left, top, width: height, status, toolbar, location, menubar, scrollbars, fullscreen
        window.open('popup.html', 'popup01', 'width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0');
    });
    
    
    /* 라이트박스 */
    lightGallery(document.getElementById('lightgallery'), {
        thumbnail: true,
        speed: 500,
    });

    

    /* 갤러리 */
    $('.gallery_img').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    
    /* 갤러리 버튼 */
    $('.play').click(function(){
        $('.gallery_img').slick('slickPlay');
    });
    $('.pause').click(function(){
        $('.gallery_img').slick('slickPause');
    });
    $('.prev').click(function(){
        $('.gallery_img').slick('slickPrev');
    });
    $('.next').click(function(){
        $('.gallery_img').slick('slickNext');
    });

    
    
    
    
    
    
    
    
    
    
    
   
});