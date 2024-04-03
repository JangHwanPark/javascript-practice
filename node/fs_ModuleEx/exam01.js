// fs Module = 파일 입출력 처리
// 파일 입출력(읽기, 쓰기, 수정, 삭제)은 동기적 작업과 비동기적 작업이 이루어지는듯?

// 1.fs 모듈을 불러오는 두 가지 방법 (require, import)
// 1.1. CommonJS Modules
const fs = require('fs');

// 1.2. ES Modules - 모듈의 특정 부분만 불러올 수 있음
// import fs from 'fs';


// 테스트 파일 경로
const TEST_FILE01_TXT = '../../data/file/file01.txt';
const TEST_FILE02_TXT = '../../data/file/file02.txt';
const TEST_RENAME01_TXT = '../../data/file/rename_01.txt';

// 2. 동기적, 비동기적 순서로 파일 내용 읽는법 (readFile, readFileSync)
// 비동기 : fs.readFile('경로', 'utf-8', callback);
// 동기 : fs.readFileSync('경로', '인코딩');
// TMI - 비동기는 시간이 오래걸리니 보통 동기적 작업이 먼저 수행되나봄
const readFileFunction = () => {
    fs.readFile(TEST_FILE01_TXT, 'utf-8', (err, data) => {
        console.log('비동기로 동작함 - readFile data: ', data, "1");
    })

    let isNotUtf8 = fs.readFileSync(TEST_FILE01_TXT);
    console.log('동기로 동작함 - readFileSync isNotUtf8: ', isNotUtf8, "2");

    fs.readFile(TEST_FILE02_TXT, 'utf-8', (err, data) => {
        console.log('비동기로 동작함 - readFile data: ', data, "3");
    })

    let isTrueUtf8 = fs.readFileSync(TEST_FILE01_TXT, 'utf-8');
    console.log('동기로 동작함 - readFileSync isTrueUtf8: ', isTrueUtf8, "4");
}


// 3. 파일 쓰기
// 비동기 : fs.writeFile('경로', data, [option], callback)
// 동기 : fs.writeFileSync('경로', data, [option])
fs.writeFile(TEST_FILE02_TXT, "수정할 데이터", (err) => {
    console.log('writeFile 호출됨 ----- 1')
    fs.readFile(TEST_FILE02_TXT, 'utf-8', (err, data) => {
        console.log('writeFile 실행됨 ----- 1.1')
        console.log('수정된 파일 내용: ', data, '----- 1.3');
    })
    console.log('writeFile 종료전 ----- 1.4')
})
console.log('writeFile 종료됨 ----- 1.5')

// 동기 실행 후 비동기 실행되면서 파일 내 데이터 깨지는듯?
query = "동기적 파일 쓰기 테스트 ----- 파일이 수정되었음."
fs.writeFileSync(TEST_FILE02_TXT, query);
let fileData = fs.readFileSync(TEST_FILE02_TXT, 'utf-8');
console.log('동기적으로 파일 쓰기 --- 2');
console.log('수정된 내용: ', fileData, '--- 2.1');


// 4. 파일 이름 변경
// 비동기 : fs.rename('기존 경로', '새 경로', callback);
// 동기 : fs.renameSync('기존 경로', '새 경로')


// 5. 파일 삭제
// 비동기 : fs.unlink('경로', callback);
// 동기 : fs.unlinkSync('경로');