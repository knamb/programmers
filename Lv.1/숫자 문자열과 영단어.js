function solution(s) {
  const obj = {zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9',};
  var answer = '';
  const list = Object.keys(obj);

  for (let i = 0; i < 10; i++) {
    while (s.includes(list[i])) {
      //list[i] 는 키 값
      const sIndex = s.indexOf(list[i]);
      const len = list[i].length;
      s = s.substr(0, sIndex) + obj[list[i]] + s.substr(sIndex + len);
    }
  }
  answer += s;

  return parseInt(answer);
}