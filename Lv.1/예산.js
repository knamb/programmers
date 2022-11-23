function solution(d, budget) { // 정렬을 하고, 최적의 부서부터 충족시켜서 예산안에서의 최대 지원부서를 구해낸다
  var answer = 0;
  let sum = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
      if (sum + d[i] <= budget) {
          sum += d[i];
          answer++;
      } else break;
  }
return answer;
}