function solution(participant, completion) { //풀긴했는데 다른방법은 없나
  var answer = '';
  const obj = {};
  for(let i=0; i<completion.length;i++){
      if(obj[completion[i]]===undefined)obj[completion[i]] = 1;
      else obj[completion[i]]++; 
  }
  
  for(let i=0; i<participant.length;i++){
          if(obj[participant[i]]===undefined || obj[participant[i]]===0) {
              return participant[i]
          }
          else if(obj[participant[i]]!==undefined){
              obj[participant[i]]--;
          }
      }
  
  return answer;
}