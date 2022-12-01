function solution(A, B) {   //재밌는 문제
  var answer = 0;
  //배열이 같은지 비교하는 함수
  const arr1 = Array.from(A);
  const arr2 = Array.from(B);
  function cp(arr1, arr2){
      for(let i=0;i<arr1.length;i++){
         if(arr1[i]!==arr2[i])return false; 
      }
      return true;
  }
  //pop과 splice를 한 세트로해
  for(let i=0; i<arr1.length ;i++){
      if(cp(arr1,arr2)){
          console.log(arr1,arr2);
          return answer;
      }
      else {
          arr1.splice(0,0,arr1.pop());
          answer++;
      }
  }   
  answer = -1;
  return answer;
}