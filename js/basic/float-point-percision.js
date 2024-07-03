let floatJs = 0.3 + 0.1;
console.log(floatJs); // 0.4에 매우 가까운 값 출력
console.log(floatJs == 0.4); // true
console.log(floatJs === 0.4); // false
console.log(0.3 + 0.1 === 0.4); // false

// 오차를 확인하는 더 정확한 방법
console.log(0.3 + 0.1); // 0.4에 매우 가까운 값 출력
console.log(Math.abs((0.3 + 0.1) - 0.4) < Number.EPSILON); // true