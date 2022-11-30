function solution(score) {  // 재밌는 문제
  var answer = [];
  var result = [];
  //평균 배열 만들기
  for(const avg of score){
      answer.push((avg[0]+avg[1])/2)
  }
  for(let i=0; i<answer.length ; i++){
      let rate = 1; // 일단 일등이라고 가정하는거지
      for(let j=0 ;j<answer.length; j++){
          if(i!==j && answer[i]<answer[j]){
              rate++;
          }
      }
      result.push(rate);
  }
  return result;
} //동일한 점수에 대해서는 등수에 덧셈을 하지 않음으로써 같은 등수를 유지하고,
  //자신보다 높은 점수를 가진 친구에 대해서 모두 등수를 더하여 gap을 생성한다 ex)2등이 두명이므로 다음은 바로 3등이아닌 4등으로 넘어가는.