$(document).ready(function(){
    
/*$("#singin_changer_holder").on("click", function(){
        $("#login_form").css("display","block");
        $(this).addClass("active_form");
        $("#singup_changer_holder").removeClass("active_form");
        $("#signup_form").css("display","none");  
    })
    
    $("#singup_changer_holder").on("click", function(){
        $("#login_form").css("display","none");
        $(this).addClass("active_form");
        $("#singin_changer_holder").removeClass("active_form");
        $("#signup_form").css("display","block");  
    })*/
    
    $("#circle").on("click", function(){
        
        $(this).css("display","none");
        $("#display_inputs").addClass("grow");
        $("#adding_events").addClass("smooth_slide");
        setTimeout(function(){
               
            $("#display_inputs").css('z-index', -1);
            $("#adding_events").fadeIn().show();
            $(".add_event_container").fadeIn().show();
            
        },500);
        setTimeout(function(){
                $("#close").css("display","block");
        },100);
        
    })
    
    $("#close").click(function(){
        $("close").fadeOut()
    });
    
    $("#close").on("click", function(){
        $("#adding_events").css("display","none");
        $("#circle").css("display","block");
        $(this).css("display","none");
    })
    
    $("#submit_event").on("click", function(){
    var valid=false;
        if($("#event-name").val()==""){
            valid=false;
        }else{
            valid=true;
        }
       if(valid){  
            $(".double_fill").css("display","block");
            setTimeout(function(){
                $("#display_inputs").css("display","none");
                $("#adding_events").css("display","none");
            },2900);
       }else{
           $("#event-name").addClass(".alert");
       }
        
    })
    
})