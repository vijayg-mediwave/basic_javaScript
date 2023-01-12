
// const sayHello = (salutation, username) => {
//   let hUserNmae = "user";
//   let hSaltation = "hello"
//   if(username){
//     hUserNmae =username
//   }if(salutation){
//     hSaltation = salutation;
//   }
//   console.log(hSaltation + " " + hUserNmae);
// };

// function sayHello(username,salutation, time) {
//   let hUserName = "user";
//   let hSaltation = "Hello";
//   let hTime = "9:00";
//   if (username) {
//     hUserName = username;
//   }
//   if (salutation) {
//     hSaltation = salutation;
//   }
//   if (time) {
//     hTime = time;
//   }
//   console.log(hSaltation + " " + hUserName + ". Time is " + hTime);
// }
// sayHello("vijay","goodMorning","9");

// function sayHello(obj) {
//   //console.log("obj = ", obj);
//   let hUserName = "user";
//   let hSaltation = "Hello";
//   let hTime = "9:00";
//   if (obj.username) {
//     hUserName = obj.username;
//   }
//   if (obj.salutation) {
//     hSaltation = obj.salutation;
//   }
//   if (obj.time) {
//     hTime = obj.time;
//   }
//   const line = `${hSaltation} ${hUserName}. Time is ${hTime}`;
//   // console.log(hSaltation + " " + hUserName + ". Time is " + hTime);
//   console.log(line);
// }

// sayHello({
//   time: "8:00",
//   day: "Monday",
//   username: "vijay",
//   salutation: "Good morning",
// })

///////////////

function sayHello({ username, salutation, time, day }) {
    let hUserName = "user";
    let hSaltation = "Hello";
    let hTime = "9:00";
    let hDay = "Someday";
    if (username) {
      hUserName = username;
    }
    if (salutation) {
      hSaltation = salutation;
    }
    if (time) {
      hTime = time;
    }
  
    if (day) {
      hDay = day;
    }
  
    const line = `${hSaltation} ${hUserName}. Day is ${hDay} Time is ${hTime}`;
    // console.log(hSaltation + " " + hUserName + ". Time is " + hTime);
    console.log(line);
  }
  
  sayHello({
    time: "10:00",
    username: "vijay",
    salutation: "Good evening",
  });