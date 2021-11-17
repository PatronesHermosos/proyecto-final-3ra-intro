
var crear = function(x,y){
      
    var color = 'rgb(20, 57, 222)';

    var div = document.createElement('div');
    div.id = 'nube';
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
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
    div2.style.left = x + 65+ 'px';    
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
    div3.style.left = x + 65 + 'px';    
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
    div6.style.left = x + 100 + 'px';    
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
    div7.style.left = x + 25 + 'px';    
    div7.style.top = y + 20+ 'px';    
    div7.style.width = '60px';    
    div7.style.height = '60px';    
    div7.style.borderRadius = '50%';
    div7.style.background= color; 
    document.getElementsByTagName('body')[0].appendChild(div7);


 
    return div, div1, div2, div3, div4, div5, div6, div7
}    

crear(25,40);
crear(150,130);
crear(330,50);


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




