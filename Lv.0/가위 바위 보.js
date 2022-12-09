function solution(rsp) {
  var answer = '';
  for (const el of rsp) {
    if (el === '2') {
      answer += 0;
    } else if (el === '0') {
      answer += 5;
    } else if (el === '5') {
      answer += 2;
    }
  }
  return answer;
}
