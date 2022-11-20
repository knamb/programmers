function solution(arr) {
  var answer = 0;
  let sum = 0;

  for (const el of arr) {
    sum += el;
  }
  answer = sum / arr.length;

  return answer;
}
