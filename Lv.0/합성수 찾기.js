function solution(n) {  
  var answer = 0;
  for(let i=1 ;i<=n; i++){    
      for(let j=2 ; j<n; j++){
         if(i%j==0 && i>j){
             answer++; 
             break;
         }
      }
  }
  
  return answer;
}