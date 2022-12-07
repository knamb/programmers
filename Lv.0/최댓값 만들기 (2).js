function solution(numbers) {
  var answer = 0;
  numMulArr = [];
  for(const num1 in numbers){ 
      for(const num2 in numbers){
          if(num1 != num2){
              numMulArr.push(numbers[num1] * numbers[num2]);
          }
      }
  }
  numMulArr.sort((a,b)=>b-a);
  answer = numMulArr[0];
  return answer;
}