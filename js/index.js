(function($,window,document){
    $.fn.checkbox = function() {
        $(this).on('click',function(){
            $(this).toggleClass('checked');
        });
    };
    $.fn.popup = function(color) {
        $(this).on('mouseover',function(color){
            var content = $(this).attr('data-content');
            if(!content){
              return false
            }
          
            if($(this).find('.hsui.popup').length != 0){
              $(this).find('.hsui.popup').show();
              return
            }
//          生成颜色样式
            var color_obj = {};
              if(color == 'black'){
                color_obj = {
                  color: 'white',
                  backgroundColor: 'rgba(0,0,0,.87)'
              }
            }
            var height = $(this).height();
            var popup = $("<div class='hsui popup black'>"+ content +"</div>")
                          .css({
                            top: '-2.5rem',
                            left: '-0.2rem',
                            display: 'block'
                          })
                          .css(color_obj);
            $(this).append(popup).css({position:'relative'});
        });
        
//      鼠标移开后的效果
        $(this).on('mouseout',function(color){
//        获取绑定元素的弹出框元素
          $(this).find('.hsui.popup').hide();
        }); 
    }
})(jQuery,window,document);

$('.hsui.checkbox.toggle').checkbox();
$('.popup-container button').popup('black');