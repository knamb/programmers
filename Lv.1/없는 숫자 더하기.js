function solution(numbers) {
  var answer = 0;
  //없는 숫자 = 다있을때(총 덧셈) - 현재있는것 총합
  const max = 45;
  for(let i=0; i<numbers.length; i++){
      answer+=numbers[i];
  }
  answer = max -answer;
  return answer;
}