$(document).ready(function(){
    
//모바일 메뉴바//
    $('.menubar_btn>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });
        $('.menubar_btn').hide();
        $('.close_btn').show();
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 100 + '%'
                   },function(){
$('.sidebar_menu').hide(); 
}); 
        $('.close_btn').hide();
        $('.menubar_btn').show();
    });
//광고끄기//
    $('#x').on('click', function(){
        $('#ad').hide();
        $('#fixed').height(102);
    });

//640에서 광고끄기// 
if (window.matchMedia('(max-width: 640px)').matches)
{
    $('#x').on('click', function(){
        $('#ad').hide();
        $('#fixed').height(80);
    });  
};
    

//따라다니는 필터 만들고싶다//
//누르면 사라지고, 상품이 width100되도록//
    $('.sub_filter_icon_po').on('click', function(){
        $('.left').hide();
        $('.sub_filter_icon_txt').hide();
        $('.sub_filter_icon_po').hide();
        $('.sub_filter_icon_poo').show();
        $('.right').width('100%');
    });
    $('.sub_filter_icon_poo').on('click', function(){
        $('.left').show();
        $('.sub_filter_icon_txt').show();
        $('.sub_filter_icon_po').show();
        $('.sub_filter_icon_poo').hide();
        $('.right').width('85%');
    });
        


    
    
    
    
    
    
});


