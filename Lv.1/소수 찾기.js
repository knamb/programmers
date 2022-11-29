function solution(n) { 
  //n : 10^6
  //sprt를 이용하면 10^3
  //1)소수임을 판단
  //2)소수의 개수를 판단?
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