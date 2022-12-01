function solution(dots) {  
  var answer = 0;
  let x1 = dots[0][0];
  let y1 = dots[0][1];
  let x2;
  let y2;
  for(let i=1;i<dots.length;i++){ // 14minutes 
      if(x1!== dots[i][0] && y1!== dots[i][1]){
          x2 = dots[i][0];
          y2 = dots[i][1];
      }
  }
  if(x2 >= x1) x1 = Math.abs(x2-x1);
  else x1 = Math.abs(x1-x2);
  if(y2 >= y1) y1 = Math.abs(y2-y1);
  else y1 = Math.abs(y1-y2);
  
  answer = x1 * y1;
  return answer;
}