function solution2(str, n) {
  let res = ''
  for (let i = 0; i < n; i++) {
    res += str
  }
  console.log(res)
}

solution2('string', 5)

function solution3(str) {
  console.log(str === str.toUpperCase()) // 대문자인가 ?
  console.log(str === str.toLowerCase()) // 소문자인가 ?
  console.log(str.toLowerCase() !== str.toUpperCase()) // 혼합인가?

  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      res += str[i].toUpperCase();
      console.log(str[i])
    } else {
      console.log(str[i])
      res += str[i].toLowerCase();
    }
  }
  console.log(res)
}

solution3('aBcDeFg')

function solution5(str) {
  console.log(str)
}

solution5("!@#$%^&*(\\'\"<>?:;")