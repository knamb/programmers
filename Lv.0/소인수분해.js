function solution(n) { 
  var answer = [];
  const prime = [];
  const set = new Set();
  function getPrime(input){
      let count =0;
      let result = false;
      for(let i=1;i<=input;i++){
         if(input%i===0)count++;
      }
      if(count===2)result=true;
      return result;
  }
  for(let i=2; i<=n ;i++){ //나눌 수
     if(getPrime(i)){
         prime.push(i)
     } 
  }
  let index = 0;
  while(n!==1){
      if(n%prime[index]===0){ //나눠떨어지는지
          set.add(prime[index]);
          n/=prime[index];
      }else{
          index++;
      }
  } 
  answer.push(...set);
  return answer;
}
