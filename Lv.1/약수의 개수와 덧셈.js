function solution(left, right) {
  var answer = 0;
  //약수개수를 구하는 함수를 만들고
  //반복문 내에서 call 하여 + - + - 
  //1. 약수값까지 카운팅한다 2. 제곱근 보다 1적은 수까지 구하고 두배 & 제곱근이 정수면 +1 
  function getP(n){
       const sqrt = Math.sqrt(n);
       let count = 0;
       for(let i=1; i<sqrt;i++){
          if(n%i===0)count++;
       } 
      count *= 2;
       if(sqrt===parseInt(sqrt))count++
      return count;
  }
  for(let i=left; i<=right; i++){
      console.log(getP(i))
      if(getP(i)%2==0)answer += i;
      else answer-= i;
  }
  
  return answer;
}