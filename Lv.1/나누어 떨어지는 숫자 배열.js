function solution(arr, divisor) {
  var answer = [];
  // arr 원소 반복문 돌면서 arr[i]%divisor ===0 인것 answer.push()
  // 오름차순으로 정렬
  // answer.length === 0 이면 answer.push(-1) 해서 리턴
  // 정수 i, j 에대해 두 수가 같지 않으면 arr[i]!==arr[j] 즉, 배열원소가 중복이 없다는 의미
  
  for(const el of arr){
      if(el%divisor===0)answer.push(el);
  }
  answer.sort((a,b)=>a-b);
  if(answer.length ===0) answer.push(-1);
  
  return answer;
}