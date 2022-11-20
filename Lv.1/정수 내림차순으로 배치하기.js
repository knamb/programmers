function solution(n) {
  var answer = '';
  //배열로 변환
  //배열정렬 
  //문자열로 변환
  //숫자로 변환
  const arr = Array.from(n.toString());
  arr.sort((a,b)=>b-a);      
  for(const el of arr){
      answer+=el;
  }
  return Number(answer);
}