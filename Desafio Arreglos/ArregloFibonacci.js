function fibonacciArray(n) {
var fibArr = [0, 1];

for (let i = 2; i < n; i++) {
    
    var nextFib = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(nextFib);
    }

    return fibArr;
    }

var result = fibonacciArray(10);
console.log(result);