function getInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var c = new Array();
var d = new Array();

c.length = getInt(1, 25);
d.length = getInt(1, 25);

for (var i = 0; i < c.length; i++) {
    c[i] = getInt(1, 100);
}

for (var i = 0; i < d.length; i++) {
    d[i] = getInt(1, 100);
}


function testArray(a, b) {
    var num1 = 0;
    var num2 = 0;
    for (var i = 0; i < a.length; i++) {
        num1 += a[i];
    }
    
    for (var i = 0; i < b.length; i++) {
        num2 += b[i];
    }
    return num1 + num2;
}

console.log(testArray(c, d));
