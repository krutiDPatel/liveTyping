// Single Line Comment

/* 
Block
Level Comment */

// Global scoped variable

let num1 = 20; 

// How to declare Const and print in console

const pi = 3.14;

console.log(pi);


// How to declare Const and print in console with interpolation 

const studentName = 'Lisa';

console.log(`my Name is ${studentName}`);


//Changing Text for the Paragraph with changeMyText()

function changeMyText() {
  let paraID = document.getElementById('myFirstTag');

  console.log(paraID);

  paraID.innerHTML = "My Text is changed <span>this is span</span>";

  paraID.style.color = "green";

  paraID.style.backgroundColor = "yellow";
} 




function printMsg() {

  console.log(num1);
  
  let nameVal = document.getElementById("nameTxt").value;

  // Local scoped variable

  if(nameVal.length > 10){
    alert("Name is too long");
    return;
  }

  document.getElementById("welcomeMsg").innerText = "Hello " + nameVal;

  console.log(nameVal);

}

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const cards = ['Ace of Spades', 'Jack of Clubs', 'Nine of Clubs', 'Nine of Diamonds', 'Three of Hearts'];




function changeBGColor() {
  let nameVal = document.getElementById("nameTxt").value;
  document.querySelector('body').style.backgroundColor = nameVal;

}

function seeWhatIType() {
  let nameVal = document.getElementById("nameTxt").value;
  console.log(nameVal);
}

function changeStyles(){

  const paraArray = document.getElementsByTagName('p');
  

  //const paraArray = document.getElementsByClassName('myPara');

  for (let i = 0; i < paraArray.length; i++) {
    console.log(paraArray.item(i));
    paraArray.item(i).style.backgroundColor = "green";
    paraArray.item(i).style.color = "pink";
    //paraArray.item(i).style.fontSize = "50px";
  }
}


function addClass(){

  let classNames = document.getElementsByClassName('paraStyles');


  for (let i = 0; i < classNames.length; i++) {
    classNames[i].classList.add("paraStylesNew");
  }

}


function removeClass(){

  let classNames = document.getElementsByClassName('paraStyles');


  for (let i = 0; i < classNames.length; i++) {
    classNames[i].classList.remove("paraStylesNew");
  }

}

const studentInfo = {
  nameVal: 'Kruti',
  enrolmentID: 123,
  subjects: [
    'HTML', 'CSS', 'JS'
  ],
  remarks: "Pass",
  hobbies: {
    reading: "any book",
    food: "Sandwiches"
  },
  'fuel type': "anything",
  'my.address': "NSW"
}

/*Add an Object Property Using Dot or Bracket Notation*/ 
const circle = {};

circle.radius = 5;

circle['diameter'] = 10;

circle.circumference = circle.diameter * Math.PI;
//=> 31.41592653589793

circle['area'] = Math.PI * circle.radius ** 2;
//=> 78.53981633974483

const addressOne = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: "10004"
};

for(const myName in addressOne){
  //console.log(addressOne[myName]);
}


/*Modify a Property Using Dot or Bracket Notation
We can update or overwrite existing properties simply by assigning a new value to an existing key:*/

const mondayMenu = {
  cheesePlate: {
    soft: 'Chèvre',
    semiSoft: 'Gruyère',
    hard: 'Manchego'
  },
  fries: 'Curly',
  salad: 'Cobb'
};

//console.log(mondayMenu);

mondayMenu.fries = 'Sweet potato';

//console.log(mondayMenu);

function updateObject() {

  const Menu = {
      kruti: "Sandwiches",
      paula: "Coffee",
      anneMarie: "Pan Cakes",
      vikki: "White wine",
      sawa: "Donuts",
      dayna: "Cake",
  }

  let nameVal1 = document.getElementById("personName").value;

  let foodVal1 = document.getElementById("foodChoice").value;
  
  Menu[nameVal1] = foodVal1;


  let tagLine = `Have a happy meal ${nameVal1}. Good choice of ${Menu[nameVal1]}`;

  document.getElementById("messagePara").innerText = tagLine;

  //Menu.kim = 'Fries';

  console.log(Menu);

}


function compareStrings(stringVal) {

  if(stringVal == 'kruti'){
    return console.log("Kruti is in lowercase");
  }

  if(stringVal == 'KRUTI'){
    return console.log("Kruti is in uppercase");
  }
}


function doArithmeticOp(param,val1,val2) {
  if(param == '+'){
    return console.log(val1 + val2);
  }
  if(param == '-') {
    return console.log(val1 - val2);
  }
  if(param == '/') {
    return console.log(val1 / val2);
  }
  if(param == '*') {
    return console.log(val1 * val2);
  }

}






const userInfo = {
  firstName: 'Avi',
  lastName: 'Flombaum',
  company: {
    name: 'Flatbook Labs',
    jobTitle: 'Developer Apprentice'
  },
  friends: [{
    firstName: 'Nancy',
    lastName: 'Burgess',
    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Developer Apprentice'
    }
  },
  {
    firstName: 'Corinna',
    lastName: 'Jackson',
    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Lead Developer'
    }
  }],
  projects: [{
    title: 'Flatbook',
    description: 'The premier Flatiron School-based social network in the world.'
  },
  {
    title: 'Scuber',
    description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
  }]
};


/*function deepIterator(target) {
  console.log("Now I am inside Function");
  if (typeof target === 'object') {
      console.log("We are in IF");
          for (const key in target) {
              console.log("we are in loop");
              deepIterator(target[key]);
          }
      } else {
          console.log("we are in else");
          console.log(target);
      }
}*/

function deepIterator(target) {
  if (Array.isArray(target)) {
    for (const element of target) {
      deepIterator(element);
    }
  } 
  else if (typeof target === 'object') {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } 
  else {
    console.log(target);
  }
}

//deepIterator(userInfo);

function readMore() {
  document.getElementById("demoPara").style.height = "auto";
  document.getElementById("demoPara").style.overflow = "visible";

}

function readLess() {
  document.getElementById("demoPara").style.height = "93px";
  document.getElementById("demoPara").style.overflow = "hidden";

}


