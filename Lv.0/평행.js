function solution(dots) {
  var answer = 0;
  const inclination = [];
  //기울기 문제
  //어차피 겹치는 경우에도 1리턴이므로 모든 케이스에 대해서 기울기를 구하고
  //기울기 값이 중복되는 경우가 존재한다면 1리턴
  //이중포문으로 1,2  1,3  1,4  2,3  2,4  3,4
  for(let i=0; i<dots.length; i++){
      for(let j=i+1; j<dots.length;j++){
          let inc = (dots[i][1]-dots[j][1])/(dots[i][0]-dots[j][0]) // y/x : 기울기
          inclination.push(inc);    
      }
  }

  for(let i=0; i<inclination.length; i++){
      for(let j=0; j<inclination.length;j++){
          if(i!==j && inclination[i]===inclination[j])return 1;
      }
  }
 
  answer=0;
  return answer;
}