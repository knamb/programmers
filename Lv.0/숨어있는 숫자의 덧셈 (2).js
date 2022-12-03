function solution(my_string) {  
  var answer = ''; 
  var result = 0;
  
  for(const index in my_string){
      const ascii = my_string.charCodeAt(index);
      if(!(ascii>=48 && ascii<=57)){
      answer+='s'       
      }else
      answer+=my_string[index];
  }
  const arr = answer.split('s');
  
  for(const el of arr){
  if(!isNaN(parseInt(el)))result+=parseInt(el)   
  }
  
  return result;
}
      
