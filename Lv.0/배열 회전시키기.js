function solution(numbers, direction) {
  var answer = [];
  if(direction ==='right'){   
      numbers.splice(0,0,numbers.pop())
  }else if(direction === 'left'){
      numbers.push(Number(numbers.splice(0,1)));
  }
  answer = numbers;
  return answer;
}