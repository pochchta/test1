//Функции отправки форм
function SendOrderH(){
            var data_1 = $(".SONameH").val();
            var data_2 = $(".SOPhoneH").val();
            var status = 0;
            
            $(".SONameH").css('background-color', '#ffffff');        
            $(".SOPhoneH").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $(".SONameH").css('background-color', '#ffcfcf');
                }
                if (data_2 == ""){
                    $(".SOPhoneH").css('background-color', '#ffcfcf');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/Send_OrderH.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                $(".SONameH").val('');
                $(".SOPhoneH").val('');
                window.location="upsell.html";
            }
		}

function SendOrderF(){
            var data_1 = $(".SONameF").val();
            var data_2 = $(".SOPhoneF").val();
            var status = 0;
            
            $(".SONameF").css('background-color', '#ffffff');        
            $(".SOPhoneF").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $(".SONameF").css('background-color', '#ffcfcf');
                }
                if (data_2 == ""){
                    $(".SOPhoneF").css('background-color', '#ffcfcf');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/Send_OrderF.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                $(".SONameF").val('');
                $(".SOPhoneF").val('');
                window.location="upsell.html";
            }
		}

function SendOrderFmob(){
            var data_1 = $(".SONameFmob").val();
            var data_2 = $(".SOPhoneFmob").val();
            var status = 0;
            
            $(".SONameFmob").css('background-color', '#ffffff');        
            $(".SOPhoneFmob").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $(".SONameFmob").css('background-color', '#ffcfcf');
                }
                if (data_2 == ""){
                    $(".SOPhoneFmob").css('background-color', '#ffcfcf');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/Send_OrderF.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                $(".SONameFmob").val('');
                $(".SOPhoneFmob").val('');
                window.location="upsell.html";
            }
		}

function SendOrderUP(){
            var data_2 = $(".SOPhoneUP").val();
            var status = 0;
                    
            $(".SOPhoneUP").css('background-color', '#ffffff');
    
            if(data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if (data_2 == ""){
                    $(".SOPhoneUP").css('background-color', '#ffcfcf');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/Send_OrderUP.php",
                    data: "&data_2="+data_2	
                });
                
                $(".SOPhoneUP").val('');
                window.location="thankyou.html";
            }
		}

function SendOrderV(){
            var data_1 = $(".SONameV").val();
            var data_2 = $(".SOPhoneV").val();
            var status = 0;
            
            $(".SONameV").css('background-color', '#ffffff');        
            $(".SOPhoneV").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $(".SONameV").css('background-color', '#ffcfcf');
                }
                if (data_2 == ""){
                    $(".SOPhoneV").css('background-color', '#ffcfcf');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/Send_OrderV.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                $(".SONameV").val('');
                $(".SOPhoneV").val('');
                window.location="upsell.html";
            }
		}

function SendOrderR(){
            var data_1 = $(".SONameR").val();
            var data_2 = $(".SOPhoneR").val();
            var status = 0;
            
            $(".SONameR").css('background-color', '#ffffff');        
            $(".SOPhoneR").css('background-color', '#ffffff');
            
            if(data_1 == "" || data_2 == ""){
                status = 1;
            }
            
            if(status == 1){
                if(data_1 == ""){
                    $(".SONameR").css('background-color', '#ffcfcf');
                }
                if (data_2 == ""){
                    $(".SOPhoneR").css('background-color', '#ffcfcf');
                }
            }
            else{
                $.ajax({
                    type: "POST",
                    url: "php/Send_OrderR.php",
                    data: "&data_1="+data_1+"&data_2="+data_2	
                });
                
                $(".SONameR").val('');
                $(".SOPhoneR").val('');
                window.location="upsell.html";
            }
		}