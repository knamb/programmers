function solution(n) { 
  //1. 제곱한 수보가 비교값 보다 커지면 return -1 || 제곱수가 존재하면 그수를 return (시간복잡도 매우높음)
  //2. 이진탐색 느낌으로 절반을 나눠 좌측구간(마지막 수), 우측구간(맨앞 수) 를 제곱하여 비교 값의 범위에 속하는지 확인하여 범위 줄이기  
  //3. Math.sqrt 함수를 사용해 정수인지 판별
  var answer = 0;
  
  let start = 1;
  let end = n;
  let middle;
  
  while(!(start>end)){ //나누기 때문에 1~n범위를 벗어날 순 없다
  middle = Math.floor((start+end)/2);
      console.log(middle)
  if(Math.pow(middle,2) == n) return Math.pow(middle+1,2);
  else if(Math.pow(middle,2)>n)end = middle-1;    
  else start = middle+1; 
      
  } 
  answer = -1
  return answer;
}