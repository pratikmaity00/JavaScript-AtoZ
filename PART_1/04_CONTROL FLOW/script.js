// if else else-if
const loggedIn = true;
if (loggedIn) {
  console.log("Okay !");
} else {
  console.log("Logged In First");
}

if (10 > 20) {
  console.log("True");
} else if (10 > 12) {
  console.log("True");
} else {
  console.log("False");
}

// switch case
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Yellow");
    break;
  case "apple":
    console.log("Red");
    break;
  default:
    console.log("Unknown");
}
// early return pattern

function checkAge(age) {
  if (age < 18) return "Denied";
  return "Allowed";
}


// Practice 
//1.
function getGrade(score) {
    if(score >= 90 && score <= 100) {
        return "A+";
    }
    else if(score >= 80 && score <= 89 ) {
        return "A";
    }
    else if(score >= 70 && score <= 79 ) {
        return "B";
    }
    else if(score >= 60 && score <= 69 ) {
        return "c";
    }
    else if(score >= 33 && score <= 59 ) {
        return "D";
    }
    else if(score >= 0 && score <= 32 ) {
        return "Fail";
    } else {
        return "Invalid marks";
    }
}
console.log(getGrade(75));

// another way to solve
function grade(mark) {
    if(mark >= 90 && mark <= 100)  return "A+";
    
    if(mark >= 80 && mark <= 89 ) return "A";
    
    if(mark >= 70 && mark <= 79 ) return "B";
    
    if(mark >= 60 && mark <= 69 ) return "c";
    
    if(mark >= 33 && mark <= 59 ) return "D";
    
    if(mark >= 0 && mark <= 32 ) return "Fail";

    return "Invalid marks";
}

// rock & papper,scissors logic
/*function rps(user, computer){
    if(user === "rock" && computer === "scissor") return "user Win";
    if(user === "scissor" && computer === "rock") return "computer Win";
    if(user === "rock" && computer === "paper") return "computer Win";
    if(user === "paper" && computer === "rock") return "user Win";
    
}   */ // not do that

function rps(user, computer) {
    if(user === computer) return "Draw";

    if(user==="rock" && computer === "scissor") return "user win";
    if(user==="scissor" && computer === "paper") return "user win";
    if(user==="paper" && computer === "rock") return "user win";

    return "Computer win";
}
console.log(rps("rock","paper"));