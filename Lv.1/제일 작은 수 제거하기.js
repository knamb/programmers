function solution(arr) {
  var answer = [];
  //(Math.min, indexOf, splice)
  if(arr.length===1)return[-1] //쓸데없는 연산없게 바로 예외처리 
  const index = arr.indexOf(Math.min(...arr))
  arr.splice(index,1);
  
  if(arr.length ===0){
      answer.push(-1);
  }else{
      for(const el of arr){
          answer.push(el)
      }
  }
  
  return answer;
}