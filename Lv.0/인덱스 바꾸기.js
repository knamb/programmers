function solution(my_string, num1, num2) {
  var answer = '';
  my_string = Array.from(my_string);  
  let temp = my_string[num1];
  my_string[num1] = my_string[num2];
  my_string[num2] = temp;
  for(const word of my_string){
      answer += word;
  }
  
  return answer;
}