function getFriendlyNumbers(start, end) {
    var result = [];
    if (typeof start !== 'number' || typeof end !== 'number') {
        return false;
    }
    if ( start > end ) {
        return false;
    }
    if ( start < 0 || end < 0) {
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
        return result;
}

module.exports = {
    firstName: 'Aleksey',
    secondName: 'Merezhko',
    task: getFriendlyNumbers
}
