function solution(lines) {
  var answer = 0;
  const ab =[];
  const ac =[];
  const bc =[];
  let count = 0;
  function getCrossed(arr1, arr2, arr3){
      for(let i=arr1[0]; i<=arr1[1];i++){ 
          for(let j=arr2[0]; j<=arr2[1];j++){
              if(i===j)arr3.push(i);    
          }
      }
  }
  getCrossed(lines[0],lines[1],ab);
  getCrossed(lines[0],lines[2],ac);
  getCrossed(lines[1],lines[2],bc);
  
  let arr = [];
      arr.push(ab);
      arr.push(bc);
      arr.push(ac);
  
  arr.sort((a,b)=>a[0]-b[0]);

  arr = arr.filter((arr)=>arr.length>=2)

  if(arr.length===0){
      return 0;
  }
  else if(arr.length===1){
      return Math.max(...arr[0])-Math.min(...arr[0])
  }
  else if(arr.length===2){
      return Math.max(...arr[0])-Math.min(...arr[0])+Math.max(...arr[1])-Math.min(...arr[1])
  }
  else{
      arr = arr.flat()
      return Math.max(...arr)-Math.min(...arr);
  }    
  return answer;
}
