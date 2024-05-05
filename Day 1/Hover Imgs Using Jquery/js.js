$(document).ready(function(){
    $("img").hover(function(){
        var img = $(this).clone();

        $(this).on('mousemove',function(e){
            
            $('body').append(img);
            
            if(e.pageX >  $('body').width()- 300){
                img.css({
                    position : 'absolute',
                    width : '300px',
                    height : '300px', 
                    top : e.pageY+10,
                    left : (e.pageX-300),
                })
            }
            else{
                img.css({
                    position : 'absolute',
                    width : '300px',
                    height : '300px', 
                    top : e.pageY+10,
                    left : e.pageX+10,
                })
            }
            //console.log("X:"+e.pageX+",Y:"+e.pageY+"");
            //console.log( $('body').width());
        })

        $(this).mouseleave(function(){
            img.remove();
        })
    })
})
