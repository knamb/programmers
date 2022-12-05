function solution(num_list, n) {    
  var answer = [];
  for(let i=0; i<num_list.length; i=i+n){ 
      temp = [];
      for(let j=i;j<i+n;j++){
          temp.push(num_list[j]);
      }
      answer.push(temp);
  }
  
  return answer;
}