

jQuery('.features-slide').slick({
    dots:false,
    prevArrow: false,
    nextArrow: false,
    infinite: false,     
    });
// jQuery('.features_container').css("animation","textslideSection 2s ease-in");

var index =0;

function reload(a){
    jQuery('.features_container').css("background-color",a);
}

// jQuery('.features-slide').on('afterChange',function(event, slick, currentSlide, nextSlide){
//     var colors = ['#ff0000', '#00ff00', '#0000ff'];
//     var random_color = colors[Math.floor(Math.random() * colors.length)];
//     reload(random_color);
// });
