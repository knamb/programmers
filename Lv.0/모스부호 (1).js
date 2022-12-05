function solution(letter) {
  var answer = '';    
  morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
}
  const parsedLetter = letter.split(' ');
  for(const el of parsedLetter){
      answer += morse[el];
  }
  return answer;
}