function Z1(obj){
    var num = obj.x.value;
    if(7-Number(num)<0){
        //obj.result.value="Нельзя считать отрицательный корень";
        alert(`Нельзя считать отрицательный корень, вы переходите в раздел комплексные числа`);
    }
    else{
        obj.result.value=Math.sqrt(7-Number(num)).toFixed(2);
    }
}

function Z2(obj){
    var a=obj.a.value;
    var b=obj.b.value;
    var c=obj.c.value;
    if(Number(a)<=Number(b) & Number(a)<=Number(c)){
        obj.result.value="Самый дешёвый товар в первом магазине";
    }
    else{
        if(Number(b)<=Number(a) & Number(b)<=Number(c)){
            obj.result.value="Самый дешёвый товар во втором магазине";
        }
        else{
            obj.result.value="Самый дешёвый товар в третьем магазине";
        }
    }
}
    
function Z3(obj){
    var day=obj.day.value;
    var zn=Number(day)%7;
    switch(zn){
        case 0:{
            obj.result.value="Среда";
            break;
        }
        case 1:{
            obj.result.value="Четверг";
            break;
        }
        case 2:{
            obj.result.value="Пятница"; 
            break;
        }
        case 3:{
            obj.result.value="Суббота";
            break;
        }
        case 4:{
            obj.result.value="Воскресенье";
            break;
        }
        case 5:{
            obj.result.value="Понедельник";
            break;
        }
        case 6:{
            obj.result.value="Вторник";
            break;
        }
        default:{
            obj.result.value="Еррор";
        }
    }
}