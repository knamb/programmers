function solution(a, b) {   
  var answer = 0;
  //일단 정수는 유한소수
  if(b===1)return 1;
  //기약분수로 나타내고
  let len = Math.max(a,b);
  for(let i=2;i<=len;i++){
      if(a%i===0 && b%i===0){
          a /= i;
          b /= i;
      } 
  }
  //정수면 리턴
  if(b===1)return 1;
  //분모를 소인수 분해하여 2,5만 존재하면 1 아니면 2 
  
  while(1){
      if(b%2===0){
          b /= 2;
      }else if(b%5===0){
          b /= 5;
      }else if(b===1){
          return 1;
      }else
          return 2;
  }
  return answer;
}