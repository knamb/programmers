function solution(spell, dic) { 
  var answer = 2;
  
  for(const sp of spell){
      for(const index in dic){
          if(!dic[index].includes(sp)){
              dic[index] ='';
          }
      }
  }for(const word of dic){
      if(word!=='')answer = 1;
  }
  
  
  
  return answer;
}