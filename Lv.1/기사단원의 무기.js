function solution(number, limit, power) {
  var answer = 0;
  let count = 0;

  for (let i = 1; i <= number; i++) {
    // 1, 2, 3, 4, 5, 6, 7,
    for (let j = 1; j <= parseInt(Math.sqrt(i)); j++) {
      // 1부터 제곱근 까지 약수를 구한다
      if (i % j === 0 && j !== Math.sqrt(i)) count += 2;
    }
    if (parseInt(Math.sqrt(i)) === Math.sqrt(i)) count++; // 약수에 대한 정산완료
    if (count > limit) count = power;
    answer += count;
    count = 0;
  }
  console.log(answer);
  return answer;
}