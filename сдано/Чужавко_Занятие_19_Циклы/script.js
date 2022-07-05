function Z1(obj) {
    obj.res.value = "Фунты Кг Граммы\n"
    for (var i = 1; i <= 15; i += 0.5) {
        var funts = i;
        var kg = i * 0.454;
        var gr = i / 0.0022046;
        var str = String(funts.toFixed(2)) + " " + String(kg.toFixed(2)) + " " + String(gr.toFixed(2)) + "\n";
        obj.res.value += str;
    }
}

function Z2(obj) {
    var x = Number(obj.xtofind.value);
    var chf = 1;
    var chf1 = 0;
    var current = 0;
    if (x == 1) {
        obj.res.value = 1;
    }
    if (x == 0) {
        obj.res.value = 0;
    }
    do {
        current = chf + chf1;
        chf1 = chf;
        chf = current;
    } while (chf < x);
    obj.res.value = String(chf);
}

function Z3(obj) {
    obj.res.value = "";
    var a = Number(obj.astart.value);
    var b = Number(obj.bend.value);
    for (var i = a; i <= b; i++) {
        if (i % 7 == 0) {
            obj.res.value += String(i) + ",";
        }
    }
}

function Z4(obj) {
    obj.res.value = "";
    for (var i = 100; i <= 999; i++) {
        var digits = String(i).split('');
        var udsum = (Number(digits[0]) + Number(digits[1]) + Number(digits[2])) * 2;
        var pr = Number(digits[0]) * Number(digits[1]) * Number(digits[2]);
        if (udsum == pr) {
            obj.res.value += String(i) + ", ";
        }
    }
}

function Z5(obj) {
    obj.res.value = "";
    for (let i = 0; i < 16; i++) {
        let g = (16 - i) * 2;
        obj.res.value += "Кроликов - ";
        obj.res.value += String(i);
        obj.res.value += ", Гусей - ";
        obj.res.value += String(g);
        obj.res.value += ", лап - ";
        obj.res.value += String(i * 4 + g * 2);
        obj.res.value += "\n";
    }
}