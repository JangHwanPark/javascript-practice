import {sum} from "../sum.js";

it ("Jest 테스트를 위한 sum 함수 테스트", () => {
    expect(sum(1, 3)).toBe(4);
});

it ("테스트 케이스 문자열", () => {
    const string = "Hello Jest";
    expect(string).toBe(string);
});