function solution(order) {
  var answer = 0;
  const orderArr = Array.from(String(order)); 
  for(const num of orderArr){
      if(parseInt(num)%3===0 && num!=='0'){
          answer++;
      }
  }
  return answer;
}