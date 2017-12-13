function cleanNumber(number) { //removes junk user might add

  let n = number; //n is given the value of number to bypass scoping

  if(n.charAt(0) == "+") { //removes plus at the beginning of some number
    n = n.replace("+", "");
  }

  while(n.indexOf("-") != -1) { //indexOf returns -1 when it cant find target value
    n = n.replace("-", ""); //replaces "-" with empty char
  }

  while(n.indexOf(" ") != -1) { //indexOf returns -1 when it cant find target value
    n = n.replace(" ", ""); //replaces " " with empty char
  }

  return n; //output cleaned up number
}

function checkNumber(number) { //validation based on ITU-T E.164

  if((number.length > 15) || (number.length <= 3)) { //rejects invalid & specialized numbers
    return false;
  }

  else { //farthest extent of validation possible
    return true;
  }
}
