var c = [8, 1, 1, 7, 4, 0];
var d = [5, 8, 5, 4, 8];

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

testArray(c, d);
