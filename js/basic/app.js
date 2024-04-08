function s1() {
    // 열
    for (let i = 0; i < 5; i++) {
        // 행
        for (let j = 0; j < 5; j++) {
            console.log('*');
        }
    }
}

// NaN : 표현할 수 없는 결과 도출시
for (let i = 5; i > 0; i--) {
    console.log('*'.repeat(i))
}