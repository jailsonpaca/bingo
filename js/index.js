

function plus(){

    $('#bingotable tr:last').before(`<tr>
    <td id="square19" contenteditable="true"> &nbsp;</td>
    <td id="square20" contenteditable="true"> &nbsp;</td>
    <td id="square21" contenteditable="true"> &nbsp;</td>
    <td id="square22" contenteditable="true"> &nbsp;</td>
    <td id="square23" contenteditable="true"> &nbsp;</td>
</tr>`);
  
}

function clean(){

    $('#bingotable td').empty();



}

function insert(){ 

        var num=$('#input_num').val();
         if(num<=15){
             var i=0;
                $('.s0').each(function() {
                    if(this.innerHTML == "" && i!=-1){
                        this.innerHTML = num;
                        i=-1;
                    }
                                  
                 });
                plus();
                
        }
        if(num>15 && num <=30){
            var i=0;
               $('.s1').each(function() {
                   if(this.innerHTML == "" && i!=-1){
                       this.innerHTML = num;
                       i=-1;
                   }
                                 
                });
               plus();
               
       } 
       if(num>30 && num <=45){
        var i=0;
           $('.s2').each(function() {
               if(this.innerHTML == "" && i!=-1){
                   this.innerHTML = num;
                   i=-1;
               }
                             
            });
           plus();
           
        }
        if(num>45 && num <=60){
            var i=0;
               $('.s3').each(function() {
                   if(this.innerHTML == "" && i!=-1){
                       this.innerHTML = num;
                       i=-1;
                   }
                                 
                });
               plus();
               
        }if(num>60 && num <=75){
            var i=0;
               $('.s4').each(function() {
                   if(this.innerHTML == "" && i!=-1){
                       this.innerHTML = num;
                       i=-1;
                   }
                                 
                });
               plus();
               
       }          
        return;
 }