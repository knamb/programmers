function solution(num, total) {
  var answer = [];
  //x로 둔다면  x+x+1+x+2 (x의 개수는 num의개수, 상수는 num 보다 하나적은 수 까지의 자연수 총합)
  // (total - (num보다 하나적은 수 까지의총합))/num의개수
  let sum =0;
  for(let i=1; i<num; i++){
      sum+=i;
  }
  const x = (total - sum)/num;
  // 위에서 구한수를 num 만큼 돌리는데 0 1 2 늘려가며 더해주면서 배열에 push
  for(let i=0; i<num;i++){
     answer.push(x+i); // x, x+1, x+2, x+3 ..... 연속된 정수들 ...
  }

  return answer;
}