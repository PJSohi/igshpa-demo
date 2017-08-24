var $document = $(document),
    $element = $('.navbar'),
    navbarDefault = 'navbar-default';
    navbarTransparent = 'navbar-transparent';

    fadeinDown = 'fadeInDown';

$document.scroll(function(){
    if ($document.scrollTop() >= 100){
        $element.addClass(navbarDefault);
        $element.removeClass(navbarTransparent);
        
        $element.addClass(fadeinDown);
    } else {
        $element.addClass(navbarTransparent);
        $element.removeClass(navbarDefault);
        
        $element.removeClass(fadeinDown);
    }
});