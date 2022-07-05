function Z1 (obj) {
    var metr = document.z1.x.value;
    var res1 = metr * 3.28084;
    var res2 = metr * 22.4972;
    obj.fut.value = res1;
    obj.verskki.value = res2;
}


function Z2 (obj) {
    var r = document.z2.r.value;
    var res1 = 3.14*r*2;
    var res2 = 3.14 * Math.pow(r,2);
    obj.Dln.value = res1;
    obj.s.value = res2;
}

function Z3 (obj) {
    var n = document.z3.num.value;
    if(String(n).length==2){
        var fn= parseInt(n/10);
        var sn=n%10;
        res = fn + sn;
        obj.sum.value = res;
    }else{
        obj.sum.value="Вы ввели не двузначное число";
    }
    
}

function Z4 (obj) {
    var ax1=Number(document.z4.x1.value);
    var ax2=Number(document.z4.x2.value);
    var ay1=Number(document.z4.y1.value);
    var ay2=Number(document.z4.y2.value);
    var res=Math.sqrt(Math.pow((ax2-ax1),2)+Math.pow((ay2-ay1),2));
    obj.result.value=res.toFixed(2);
}