function solution(n) {
  //1. 그냥 구한다(일반적)
  //2. 제곱근이 정수면(제곱근이 정수면 약수)더하고
  //3. 제곱근 까지면 반복문을 돌려서 시간복잡도를 줄인다.
  //if(n===0)return 0; 더해도 0
  //if(n===1)return 1; 어차피 1은 반복문 실행하지 않아

  var answer = 0;
  const m = Math.sqrt(n);
  if (m === parseInt(m)) answer += m;

  for (let i = 1; i < m; i++) {
    if (n % i == 0) answer += n / i + i;
  }

  return answer;
}
