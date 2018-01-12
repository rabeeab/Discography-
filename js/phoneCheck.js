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

function checkNumber(number) { //validation based on ITU-T E.164 digit limits

  if(number.length > 15) { //rejects invalid numbers
    return false;
  }

  if(number.length <= 3) { //rejects service numbers
    return false;
  }

  if(isNaN(number)) { //rejects text and non number characters
    return false;
  }

  else {
    return true;
  }
}

let phone = document.getElementById("phone");

function ghostWrite() {
  phone.nextElementSibling.innerHTML = phoneStatus();
  console.log("cycle");
}

function phoneStatus() { //returns a string based wether or not the phone number is valid

  if(checkNumber(cleanNumber(phone.value)) == true) {
    console.log("1");
    return "Number appears to be Valid";
  }

  else {
    console.log("0");
    return "Number is invalid";
  }
}

var cylcle;
cycle = setInterval(ghostWrite, 1000);
