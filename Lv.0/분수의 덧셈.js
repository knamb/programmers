function solution(denum1, num1, denum2, num2) {
  var answer = [];
  let gcd = 1;
  //분모를 통일시킨다 > 공배수를 찾고 그 공배수를 분모로 사용하며 
  denum = (denum1*num2) + (denum2*num1);
  num = num1 * num2;
  //최대 공약수를 찾아서 나누고 각각을 담아서 리턴
  const len = denum >= num ? denum : num;
  for(let i=1; i<= len;i++){
      if(denum%i==0 && num%i==0){
          gcd = i;
      }
  }
  answer.push(denum/gcd);
  answer.push(num/gcd);
  
  return answer;
}