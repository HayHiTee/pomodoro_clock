 function session(){
                    
                    x = parseInt($("#a").text());
                    $(".ses").css("display","block");
                    $(".brk").css("display","none");
                    $(".ses h3").text($("#a").text());
                    sesdp = parseInt($(".ses h3").text())
                    sesdown();
                    
                    //alert("hi");
                    $(".watch").css("-webkit-transition","background-position " + x +"s");
                    $(".watch").css("-moz-transition","background-position " + x + "s");
                    $(".watch").css("transition","background-position " + x + "s");
                    $(".watch").css("background-position","0% 100%");
                    x = parseInt(x) * 1000
                    function sesdown(){
                        if(sesdp==0){
                            return null;
                        }
                        //alert("time");
                        $(".ses h3").text(sesdp);
                        sesdp -=1;
                        setTimeout(sesdown,1000);
                    
                    }
                    setTimeout(brek, x);
                    
                    
                    
                }

                function brek(){
                  
                    y = parseInt($("#b").text());
                    
                    $(".brk").css("display","block");
                    $(".ses").css("display","none");
                   // alert("hello");
                   $(".brk h3").text($("#b").text());
                   brkdp = parseInt($(".brk h3").text())
                    brkdown();
                    
                    $(".watch").css("-webkit-transition","background-position " + y +"s");
                    $(".watch").css("-moz-transition","background-position " + y + "s");
                    $(".watch").css("transition","background-position " + y + "s");
                    $(".watch").css("background-position","100% 0%");
                    y = parseInt(y) * 1000
                    function brkdown(){
                        if(brkdp==0){
                            return null;
                        }
                        //alert("time");
                        
                        $(".brk h3").text(brkdp);
                        brkdp -=1;
                        setTimeout(brkdown,1000);
                    }
                    setTimeout(session,y);
                }