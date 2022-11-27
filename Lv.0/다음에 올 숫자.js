function solution(common) { // 그냥 단순구현문제
  var answer = 0;
  
  //등비인지 확인하고 아니면 등차임
  if(common[1]/common[0] === common[2]/common[1]){
      return common[common.length-1] * common[1]/common[0];
  }
  else {
      return common[common.length-1] + common[1]-common[0];
  }
  
  return answer;
}