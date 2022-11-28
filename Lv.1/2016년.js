function solution(a, b) { //moduler 복습 해야해
  //29//2 
  //31//1,3,5,7,8,10,12
  //30//4,6,9,11
  var answer = 0;
  objDay={1:'FRI', 2:'SAT', 3:'SUN', 4:'MON', 5:'TUE', 6:'WED', 0:'THU',}
  objMonth = {'1':31,'2':29,'3':31,'4':30,'5':31,'6':30,'7':31,'8':31,'9':30,'10':31,'11':30,'12':31}
  
  
  for(let i=1; i<a;i++){
     answer += objMonth[i]; 
  }
  
  answer = objDay[(answer+b)%7];
  
  return answer;
}