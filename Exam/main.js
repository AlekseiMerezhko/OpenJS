function getFriendlyNumbers(start, end) {
    var result = [];
    if (typeof start !== 'number' || typeof end !== 'number') {
        console.log(false)
        return false;
    }
    if ( start > end ) {
        console.log(false)
        return false;
    }
    if ( start < 0 || end < 0) {
        console.log(false)
        return false;
    }
function numSum(n){
    var s = 0;
    for (var i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            s += i
            if (i * i != n) {
                s += n / i;
            };
        }
    }
    return s - n;
}

for (var i = start; i <= end; i++) {     
    var s = numSum(i);
    if (i < s && s <= end && numSum(s) == i) {
       result.push([i,s]);
    }
}
        console.log(result)
}


getFriendlyNumbers(1, 1);
getFriendlyNumbers(0, 0);
getFriendlyNumbers(1, 5000);
getFriendlyNumbers(284, 500);
getFriendlyNumbers(-1, 500);
getFriendlyNumbers(1, -500);
getFriendlyNumbers(-1, -500);
getFriendlyNumbers('1', '500');
getFriendlyNumbers('1', 500);
getFriendlyNumbers(1, '500');
getFriendlyNumbers(1111, 500);
