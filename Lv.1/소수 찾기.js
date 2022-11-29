function solution(n) { 
  //추천하지 않는 풀이방법. 다른 방법으로 풀어보기
  //n : 10^6
  //sprt를 이용하면 10^3
  //1)소수임을 판단
  //2)소수의 개수를 판단?
  /**
   * 참고 *************
   * 1. 범위에서 소수를 찾을때는 "에라토스테네스의 체" 방법을 이용하면 좋다
   * 2. 특정 수 소수판별 시 제곱근을 이용하여 판별하면 빠르다
   * 3. 2를 제외한 모든 소수는 홀수임을 이용 
   */
  var answer = 0;
  let count = 1;
  const arr =[];
  
  if(n===2) return 1;
  
  function prime(num){ 
      //1과 자기자신을 제외한 약수가 발견되면 소수x
      //2보다 큰수만 적용되는 함수
      const sqrt = Math.sqrt(num);
      if(sqrt === parseInt(sqrt))return false;
      for(let i=2; i<sqrt; i++){  
          if(num%i===0)return false;
      }
      return true;
  }
  

  for(let i=3; i<=n; i++){
      if(prime(i)===true)count++;
  }
  
  answer += count;
  return answer;
}