function solution(s){
  var answer = true;
  const count =[0,0];
  for(const el of s){
      if(el ==='p'|| el==='P')count[0]++;
      else if(el ==='y'|| el==='Y')count[1]++;
  }
  answer = count[0]===count[1] ? true : false;
  return answer;
}