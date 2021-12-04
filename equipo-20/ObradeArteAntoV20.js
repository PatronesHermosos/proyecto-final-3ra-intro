

var crear = function(x,y){


    var color = 'rgb(59, 116, 235)';

    var div = document.createElement('div');
    div.id = 'nube';
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x +'px';    
    div.style.top = y + 'px';    
    div.style.width = '60px';    
    div.style.height = '60px';    
    div.style.borderRadius = '50%';
    div.style.background= color; 
    document.getElementsByTagName('body')[0].appendChild(div);

    var div1 = document.createElement('div1');
    div1.id = 'nube1';
    div1.style.zIndex = '1';
    div1.style.position = 'absolute';    
    div1.style.left = x + 130+ 'px';    
    div1.style.top = y + 'px';    
    div1.style.width = '60px';    
    div1.style.height = '60px';    
    div1.style.borderRadius = '50%';
    div1.style.background= color; 
    document.getElementsByTagName('body')[0].appendChild(div1);

    var div2 = document.createElement('div2');
    div2.id = 'nube2';
    div2.style.zIndex = '1';
    div2.style.position = 'absolute';    
    div2.style.left = x + 65+'px';    
    div2.style.top = y - 25 +'px';    
    div2.style.width = '60px';    
    div2.style.height = '60px';    
    div2.style.borderRadius = '50%';
    div2.style.background= color; 
    document.getElementsByTagName('body')[0].appendChild(div2);

    var div3 = document.createElement('div3');
    div3.id = 'nube3';
    div3.style.zIndex = '1';
    div3.style.position = 'absolute';    
    div3.style.left = x + 65 +  'px';    
    div3.style.top = y + 25+ 'px';    
    div3.style.width = '60px';    
    div3.style.height = '60px';    
    div3.style.borderRadius = '50%';
    div3.style.background= color; 
    document.getElementsByTagName('body')[0].appendChild(div3);

    var div4 = document.createElement('div4');
    div4.id = 'nube4';
    div4.style.zIndex = '1';
    div4.style.position = 'absolute';    
    div4.style.left = x + 25 + 'px';    
    div4.style.top = y - 20+ 'px';    
    div4.style.width = '60px';    
    div4.style.height = '60px';    
    div4.style.borderRadius = '50%';
    div4.style.background= color; 
    document.getElementsByTagName('body')[0].appendChild(div4);

    var div5 = document.createElement('div5');
    div5.id = 'nube5';
    div5.style.zIndex = '1';
    div5.style.position = 'absolute';    
    div5.style.left = x + 100 + 'px';    
    div5.style.top = y - 20+ 'px';    
    div5.style.width = '60px';    
    div5.style.height = '60px';    
    div5.style.borderRadius = '50%';
    div5.style.background= color; 
    document.getElementsByTagName('body')[0].appendChild(div5);

    var div6 = document.createElement('div6');
    div6.id = 'nube6';
    div6.style.zIndex = '1';
    div6.style.position = 'absolute';    
    div6.style.left = x + 100 +  'px';    
    div6.style.top = y + 20+ 'px';    
    div6.style.width = '60px';    
    div6.style.height = '60px';    
    div6.style.borderRadius = '50%';
    div6.style.background= color; 
    document.getElementsByTagName('body')[0].appendChild(div6);

    var div7 = document.createElement('div7');
    div7.id = 'nube7';
    div7.style.zIndex = '1';
    div7.style.position = 'absolute';    
    div7.style.left = x + 25 +  'px';    
    div7.style.top = y + 20+ 'px';    
    div7.style.width = '60px';    
    div7.style.height = '60px';    
    div7.style.borderRadius = '50%';
    div7.style.background= color; 
    document.getElementsByTagName('body')[0].appendChild(div7);

   
 
    return div, div1, div2, div3, div4, div5, div6, div7


}    

crear(25,40);
crear(200,100);
crear(390,50);







var manzana= function(x,y){

    var colormanzana = 'rgb(230, 26, 11)';

    var divm1 = document.createElement('divm1');
    divm1.id = 'manzana';
    divm1.style.zIndex = '7';
    divm1.style.position = 'absolute';    
    divm1.style.left = x + 'px';    
    divm1.style.top = y + 'px';    
    divm1.style.width = '20px';    
    divm1.style.height = '20px';    
    divm1.style.borderRadius = '50%';
    divm1.style.background= colormanzana; 
    document.getElementsByTagName('body')[0].appendChild(divm1);

    var divm2 = document.createElement('divm2');
    divm2.id = 'manzana';
    divm2.style.zIndex = '7';
    divm2.style.position = 'absolute';    
    divm2.style.left = x + 10 + 'px';    
    divm2.style.top = y + 'px';    
    divm2.style.width = '20px';    
    divm2.style.height = '20px';    
    divm2.style.borderRadius = '50%';
    divm2.style.background= colormanzana; 
    document.getElementsByTagName('body')[0].appendChild(divm2);

    var divm3 = document.createElement('divm3');
    divm3.id = 'manzana';
    divm3.style.zIndex = '7';
    divm3.style.position = 'absolute';    
    divm3.style.left = x + 5 + 'px';    
    divm3.style.top = y + 5+ 'px';    
    divm3.style.width = '20px';    
    divm3.style.height = '20px';    
    divm3.style.borderRadius = '50%';
    divm3.style.background= colormanzana; 
    document.getElementsByTagName('body')[0].appendChild(divm3);



return divm1, divm2, divm3
}

manzana(550, 350);
manzana(620, 260);
manzana(680, 320);
manzana(600, 450);
manzana(690, 420);



var r1= 8;
var g1= 21;
var b1= 118;


setInterval(function(){

    var r = 237;
    var g = 210;
    var b = 7;
    var colorsun = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    var divs7 = document.createElement('divs7');
    divs7.id = 'rayosol';
    divs7.style.zIndex = '1';
    divs7.style.position = 'absolute';    
    divs7.style.left = 737 + 'px';    
    divs7.style.top = -3 + 'px';    
    divs7.style.width = '7px';    
    divs7.style.height = '30px';   
    divs7.style.borderRadius = '0%';
    divs7.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs7);

    
    var divs5 = document.createElement('divs5');
    divs5.id = 'rayosol';
    divs5.style.zIndex = '1';
    divs5.style.position = 'absolute';    
    divs5.style.left = 685 + 'px';    
    divs5.style.top = 16 + 'px';    
    divs5.style.width = '7px';    
    divs5.style.height = '30px';  
    divs5.style.rotate= '320deg';  
    divs5.style.borderRadius = '0%';
    divs5.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs5);

    var divs5s = document.createElement('divs5s');
    divs5s.id = 'rayosol';
    divs5s.style.zIndex = '1';
    divs5s.style.position = 'absolute';    
    divs5s.style.left = 796 + 'px';    
    divs5s.style.top = 14 + 'px';    
    divs5s.style.width = '7px';    
    divs5s.style.height = '30px';  
    divs5s.style.rotate= '40deg';  
    divs5s.style.borderRadius = '0%';
    divs5s.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs5s);


    var divs1 = document.createElement('divs1');
    divs1.id = 'rayosol';
    divs1.style.zIndex = '1';
    divs1.style.position = 'absolute';    
    divs1.style.left = 660 + 'px';    
    divs1.style.top = 50 + 'px';    
    divs1.style.width = '7px';    
    divs1.style.height = '30px';  
    divs1.style.rotate= '290deg';  
    divs1.style.borderRadius = '0%';
    divs1.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs1);

    var divs1s = document.createElement('divs1s');
    divs1s.id = 'rayosol';
    divs1s.style.zIndex = '1';
    divs1s.style.position = 'absolute';    
    divs1s.style.left = 825 + 'px';    
    divs1s.style.top = 50 + 'px';    
    divs1s.style.width = '7px';    
    divs1s.style.height = '30px';  
    divs1s.style.rotate= '70deg';  
    divs1s.style.borderRadius = '0%';
    divs1s.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs1s);

    
    

    var divs2 = document.createElement('divs2');
    divs2.id = 'rayosol';
    divs2.style.zIndex = '1';
    divs2.style.position = 'absolute';    
    divs2.style.left = 653 + 'px';    
    divs2.style.top = 90 + 'px';    
    divs2.style.width = '7px';    
    divs2.style.height = '30px';  
    divs2.style.rotate= '270deg';  
    divs2.style.borderRadius = '0%';
    divs2.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs2);

    var divs2s = document.createElement('divs2s');
    divs2s.id = 'rayosol';
    divs2s.style.zIndex = '1';
    divs2s.style.position = 'absolute';    
    divs2s.style.left = 832 + 'px';    
    divs2s.style.top = 90 + 'px';    
    divs2s.style.width = '7px';    
    divs2s.style.height = '30px';  
    divs2s.style.rotate= '90deg';  
    divs2s.style.borderRadius = '0%';
    divs2s.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs2s);


    var divs3 = document.createElement('divs3');
    divs3.id = 'rayosol';
    divs3.style.zIndex = '1';
    divs3.style.position = 'absolute';    
    divs3.style.left = 665 + 'px';    
    divs3.style.top = 130 + 'px';    
    divs3.style.width = '7px';    
    divs3.style.height = '30px';  
    divs3.style.rotate= '240deg';  
    divs3.style.borderRadius = '0%';
    divs3.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs3);

    var divs3s = document.createElement('divs3s');
    divs3s.id = 'rayosol';
    divs3s.style.zIndex = '1';
    divs3s.style.position = 'absolute';    
    divs3s.style.left = 820 + 'px';    
    divs3s.style.top = 130 + 'px';    
    divs3s.style.width = '7px';    
    divs3s.style.height = '30px';  
    divs3s.style.rotate= '120deg';  
    divs3s.style.borderRadius = '0%';
    divs3s.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs3s);


    var divs4 = document.createElement('divs4');
    divs4.id = 'rayosol';
    divs4.style.zIndex = '1';
    divs4.style.position = 'absolute';    
    divs4.style.left = 695 + 'px';    
    divs4.style.top = 161 + 'px';    
    divs4.style.width = '7px';    
    divs4.style.height = '30px';  
    divs4.style.rotate= '210deg';  
    divs4.style.borderRadius = '0%';
    divs4.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs4);

    var divs4s = document.createElement('divs4s');
    divs4s.id = 'rayosol';
    divs4s.style.zIndex = '1';
    divs4s.style.position = 'absolute';    
    divs4s.style.left = 783 + 'px';    
    divs4s.style.top = 163 + 'px';    
    divs4s.style.width = '7px';    
    divs4s.style.height = '30px';  
    divs4s.style.rotate= '150deg';  
    divs4s.style.borderRadius = '0%';
    divs4s.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs4s);


    var divs6 = document.createElement('divs6');
    divs6.id = 'rayosol';
    divs6.style.zIndex = '1';
    divs6.style.position = 'absolute';    
    divs6.style.left = 737 + 'px';    
    divs6.style.top = 174 + 'px';    
    divs6.style.width = '7px';    
    divs6.style.height = '30px';  
    divs6.style.rotate= '180deg';  
    divs6.style.borderRadius = '0%';
    divs6.style.background= colorsun; 
    document.getElementsByTagName('body')[0].appendChild(divs6);


    


    r1= -1*r1;
    g1= -1*g1;
    b1= -1*b1;

    r= r+ r1;
    g= g+ g1;
    b= b+ b1;

    colorsun = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    divs1.style.background= colorsun; 
    divs1s.style.background= colorsun; 
    divs2.style.background= colorsun; 
    divs2s.style.background= colorsun; 
    divs3.style.background= colorsun;  
    divs3s.style.background= colorsun; 
    divs4.style.background= colorsun;  
    divs4s.style.background= colorsun; 
    divs5.style.background= colorsun;
    divs5s.style.background= colorsun;      
    divs6.style.background= colorsun; 
    divs7.style.background= colorsun; 

    return divs1, divs2, divs3, divs4, divs5, divs6, divs7, divs1s, divs2s

}, 800)


var suelo = function(x,y){

var color = 'rgb(203, 219, 94)';

var divl = document.createElement('divl');
divl.id = 'suelo';
divl.style.zIndex = '20';
divl.style.position = 'absolute';    
divl.style.left = x +'px';    
divl.style.top = y + 'px'; 
divl.style.rotate= '30deg';  
divl.style.width = '3px';    
divl.style.height = '20px';    
divl.style.borderRadius = '0%';
divl.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divl);

var divl4 = document.createElement('divl4');
divl4.id = 'suelo';
divl4.style.zIndex = '20';
divl4.style.position = 'absolute';    
divl4.style.left = x +'px';    
divl4.style.top = y + 'px'; 
divl4.style.rotate= '180deg';  
divl4.style.width = '3px';    
divl4.style.height = '10px';    
divl4.style.borderRadius = '0%';
divl4.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divl4);


var divl1 = document.createElement('divl1');
divl1.id = 'suelo';
divl1.style.zIndex = '20';
divl1.style.position = 'absolute';    
divl1.style.left = x + 4 +'px';    
divl1.style.top = y + 15 + 'px'; 
divl1.style.rotate= '-30deg';  
divl1.style.width = '3px';    
divl1.style.height = '35px';    
divl1.style.borderRadius = '0%';
divl1.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divl1);

var divl5 = document.createElement('divl5');
divl5.id = 'suelo';
divl5.style.zIndex = '20';
divl5.style.position = 'absolute';    
divl5.style.left = x + 9 +'px';    
divl5.style.top = y + 25 + 'px'; 
divl5.style.rotate= '35deg';  
divl5.style.width = '3px';    
divl5.style.height = '12px';    
divl5.style.borderRadius = '0%';
divl5.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divl5);


var divl2 = document.createElement('divl2');
divl2.id = 'suelo';
divl2.style.zIndex = '20';
divl2.style.position = 'absolute';    
divl2.style.left = x + 5 +'px';    
divl2.style.top = y + 43 + 'px'; 
divl2.style.rotate= '40deg';  
divl2.style.width = '3px';    
divl2.style.height = '27px';    
divl2.style.borderRadius = '0%';
divl2.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divl2);


var divl6 = document.createElement('divl6');
divl6.id = 'suelo';
divl6.style.zIndex = '20';
divl6.style.position = 'absolute';    
divl6.style.left = x + 3 +'px';    
divl6.style.top = y + 43 + 'px'; 
divl6.style.rotate= '150deg';  
divl6.style.width = '3px';    
divl6.style.height = '15px';    
divl6.style.borderRadius = '0%';
divl6.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divl6);

return divl, divl1, divl2, divl4, divl5


}    

suelo(750, 710);
suelo(780, 770);
suelo(810, 710);
suelo(840, 770);

var suelo1= function(x,y){

    suelo(x,y);
    suelo(x+30, y+60);
    suelo(x+60, y);
    suelo(x+90, y+60);
}

suelo1(900, 710);
suelo1(1050,710);
suelo1(1335, 710);

var cesped = function(x,y){

    var color = 'rgb(48, 219, 71)';

var divc = document.createElement('divc');
divc.id = 'suelo';
divc.style.zIndex = '20';
divc.style.position = 'absolute';    
divc.style.left = x +'px';    
divc.style.top = y + 'px';   
divc.style.width = '3px';    
divc.style.height = '10px';    
divc.style.borderRadius = '0%';
divc.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divc);

var divc1 = document.createElement('divc1');
divc1.id = 'suelo';
divc1.style.zIndex = '20';
divc1.style.position = 'absolute';    
divc1.style.left = x +5+ 'px';    
divc1.style.top = y + 'px';   
divc1.style.width = '3px';  
divc1.style.rotate= '45deg'  
divc1.style.height = '10px';    
divc1.style.borderRadius = '0%';
divc1.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divc1);


var divc2 = document.createElement('divc2');
divc2.id = 'suelo';
divc2.style.zIndex = '20';
divc2.style.position = 'absolute';    
divc2.style.left = x-5 +'px';    
divc2.style.top = y + 'px';   
divc2.style.width = '3px';  
divc2.style.rotate= '315deg'  
divc2.style.height = '10px';    
divc2.style.borderRadius = '0%';
divc2.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divc2);

return divc, divc1, divc2

}



function cesped1(x,y){

    while(x<730){

        cesped(x,y);
        x= x+30;

    }

}

cesped1 (250, 710);
cesped1 (260, 730 );
cesped1 (270, 750 );
cesped1 (280, 770 );
cesped1 (290, 790 );
cesped1 (285, 810 );
cesped1 (280, 830 );


function cesped2(x,y){

    while(x<120){

        cesped(x,y);
        x= x+30;

    }

}


cesped2 (10, 710);
cesped2 (10, 730 );
cesped2 (12, 750 );
cesped2 (15, 770 );
cesped2 (18, 790 );
cesped2 (24, 810 );
cesped2 (29, 830 );

var ramas = function(x,y,deg, height){

    var color = 'rgb(41, 41, 40)';

var divc = document.createElement('divc');
divc.id = 'suelo';
divc.style.zIndex = '20';
divc.style.position = 'absolute';    
divc.style.left = x +'px';    
divc.style.top = y + 'px';   
divc.style.width = '5px';  
divc.style.rotate= deg+'deg';  
divc.style.height = height+'px';    
divc.style.borderRadius = '0%';
divc.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divc);

var divc1 = document.createElement('divc1');
divc1.id = 'suelo';
divc1.style.zIndex = '20';
divc1.style.position = 'absolute';    
divc1.style.left = x + 'px';    
divc1.style.top = y +15+ 'px';   
divc1.style.width = '6px';  
divc1.style.rotate= deg+'deg';  
divc1.style.height = height+'px';       
divc1.style.borderRadius = '0%';
divc1.style.background= color; 
document.getElementsByTagName('body')[0].appendChild(divc1);


return divc, divc1

}

ramas(790,280, 45, 30);
ramas(810, 310, -55, 45);
ramas(775,400, -20, 25);
ramas(865, 250,45,50);
ramas(830, 250,-45,50);
ramas(765, 230,-45,50);
ramas(870, 360,80,55);
ramas(850, 360,-30,20);
ramas(755, 360,-30,20);

