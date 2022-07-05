function calculate(obj) {
    var xstart = Number(obj.xstart.value);
    var xend = Number(obj.xend.value);
    var shag = Number(obj.shag.value);
    if (xstart <= 0 | xend <= 0 | shag <= 0) {
        alert("Все числа должны быть положительные");
    } else {
        if (xstart > xend) {
            alert("Начальное значение должно быть меньше конечного");
        } else {
            if (shag > xend - xstart) {
                alert("Шаг не должен превышать разницы между начальным и конечным значениями!");
            } else {
                var mas = [];
                for (var i = xstart; i < xend; i += shag) {
                    mas.push((Math.pow(2, i)) / ((2 * i - 3) * (Math.pow((2 * i - 2), 3))));
                }
                obj.res.value = "";
                for (var i = 0; i < mas.length; i++) {
                    obj.res.value += "y = " + (String(mas[i].toFixed(2))) + "\n";
                }
            }
        }
    }
}