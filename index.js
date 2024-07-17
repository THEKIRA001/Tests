// // console.log('workss');

// // const arr = [1,2,3,4,5];

// // console.log(arr);
// // console.log(...arr); 



// // const mySet = new Set([1,2,3]);

// // console.log(mySet);

// // const mySet2 = new Set();
// // mySet2.add(20);
// // mySet2.add(20);
// // mySet2.add(10);

// // console.log(...mySet2);

// // const temp = [...Array.from(mySet)];

// // console.log(...temp);


// // a=10;
// // console.log(a);

// // console.log(b);
// // b=10;

// // console.log(c);
// // var c=10;

// // console.log(d);
// // let d = 10; 

// // var sum = (num1,num2) => {
// //   return num1+num2*num2;
// // };
// // console.log(sum(2,6));

// // console.log(((num1,num2)=>num1*num2)(5,6));

// // function greet(wish){
// //   return function(temp){
// //     console.log(`${temp},${wish()}`);
// //   }
// // }

// // function sayHi(){
// //   return "Hii!";
// // }

// // greet(sayHi)("Yooii");

// // console.log('hello');
// // console.error('this maybe an error');
// // console.warn('its a warningg');
// // console.clear();
// // console.time('abc');

// // function doMath(input,fn){
// //   const op = [];
// //   for(let num of input){
// //     op.push(fn(num));
// //     console.count(num);
// //   }
// //   return op;
// // }

// // function square(num){
// //   return num*num;
// // }

// // function double(num){
// //   return num+num;
// // }

// // const inputs = [1,2,3,4,5];

// // const arr = doMath(inputs,square);
// // console.log(...doMath(inputs,double));

// // console.timeEnd('abc');

// // console.table(arr )

// // // Custom Console log example
// // const spacing = '10px';
// // const styles = 
// //       `padding: ${spacing}; background-color: white; color: green; font-style: 
// //        italic; border: 1px solid black; font-size: 2em;`;
// // console.log('%cGeeks for Geeks', styles);

// // console.log(num);

// // num = 2;


// let anonymous = function(num1,num2){
//     return num1*num2;
// }

// let arrow = (num1,num2) => num1**num2;
// // let arrow = x => x*x;

// let makeNigga = (name,color,height) => ({Name:name,Skin:color,Height:height});

// console.log(anonymous(2,3));
// console.log(arrow(2,3));
// console.log(makeNigga("Blacky","DarkBlack",7));

// document.write("Hello World!!");
// // alert('Hello World');

// let colorval = 1;

// let Color;

// switch (true){
//     case colorval === 1:
//         Color = 'Blue';
//         break;
//     case colorval === 2:
//         Color = 'Red';
//         break;
// }

// console.log(Color);

// const array = [1,2,3,4,5];
// for(const i of array){
//     console.log(i);
// }

// blockOfCode: {
//     console.log('This part will be executed');
//     break blockOfCode;
//     console.log('this part will not be executed');
// }
// console.log('out of the block');

// myLabel: function myLabeledFunction() {
//     console.log("This is a labeled function.");
// }

// // Calling the labeled function
// myLabeledFunction();

// const arr = new Array(5);
// console.log(arr);

// let text = '{"model":[' +
// '{"carName":"Baleno","brandName":"Maruti" },' +
// '{"carName":"Aura","brandName":"Hyndai" },' +
// '{"carName":"Nexon","brandName":"Tata" }]}';

// const cars = JSON.parse(text);
// // console.log("The car name is: " + cars.model[2].carName + 
// // " of brand: " + cars.model[2].brandName);
// console.log(cars.model[1].brandName);

// function sayHi(){
//     return "Hii!";
// }

// (function (){
//     console.log('Hii to the user');
// })();

// const user = (function(){
//     const userData = {
//         userName:'John',
//         userAge:20
//     }

//     function getName(){
//         console.log(userData.userName);
//     }

//     function updateAge(age){
//         console.log(userData.userAge + age);
//         console.log(userData.userAge);
//     }

//     return {getName, updateAge};
// })();

// console.log(user);
// user.getName();
// user.updateAge(5);

// function cart(){
//     let items = 0;
//     return{
//         addItem: function(){
//             items++;
//         },
//         getItem: function(){
//             return items;
//         }
//     };
// }

// const closure = cart();
// closure.addItem();
// closure.addItem();
// console.log(closure.getItem());

// console.log(a);
// let a = 10;


// console.log((function(a){
//     console.log("a is",a);
//     return function(b){
//         console.log("b is",b);
//         return function(c){
//             console.log("c is",c);
//             return a+b+c;
//         }
//     }
// })(10)(20)(30));

// const array = [1, 3, 5, 7, 9];

// // const sqauredArray = array.map(function(currentElement){
// //     return currentElement*currentElement;
// // });

// let arr;

// const sqauredArray = array.map((num,index,arrays) => {
//     console.log(index);
//     arr=arrays;
//     return num*num;
// });

// console.log(sqauredArray);
// console.log(arr);

// let fruits = ['banana','apple','watermelon'];


// let maparray = fruits.map((item,ind) => {
//     return {[ind] : item.length};
// })

// console.log(maparray);

// const employees = [
//     { id: 1, name: "Alice", department: "sales", salary: 40000 },
//     { id: 2, name: "Bob", department: "engineering", salary: 50000 },
//     { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
//     { id: 4, name: "David", department: "sales", salary: 35000 },
//     { id: 5, name: "Emily", department: "engineering", salary: 55000 }
//   ];

//   function increaseSalaries(employees){
//     //Implement your function here to modify the salaray.
//       const newEmployees = employees.map((banda) => {
//         let hike = 5;
//         let dep = banda.department;
//         switch(true){
//             case dep == "sales":
//                 hike = 10;
//                 break;
//             case dep == "engineering":
//                 hike = 15;
//                 break;
//         }
//         banda.salary += banda.salary * (hike/100);
//         banda.salary.toFixed(1);
//         return banda;
//       })
//       return newEmployees;
//     }

// console.log(increaseSalaries(employees));

// const array = [1,2,3,4,5];

// const sum = array.reduce((total, num, index) => {
//     console.log(total, index);
//     return total+num;
// });

// console.log(sum);

// const contacts = [
//     { name: "Alice", company: "ABC Inc." },
//     { name: "Bob", company: "XYZ Corp." },
//     { name: "Charlie", company: "ABC Inc." }
//   ];
//   function mapContactsToCompanies(contacts) {
//     const companyMap = contacts.reduce((acc, contact) => {
//         const { name, company } = contact;

//         if (acc[company]) {
//             acc[company].push(name);
//         } else {
//             acc[company] = [name];
//         }

//         return acc;
//     }, {});

//     return companyMap;
//   }

//   console.log(mapContactsToCompanies(contacts));

// const array = [4, 5, -2, -3, 0, 9];

// const negatives = array.filter((num) => {
//     return num > 0 && num < 6;
// } );

// console.log(negatives);

// const array = [15, 5, 85, 95, 99, 69, 14, 26, 37, 95];

// const find1 = array.find((num, index) => {num == 20});

// console.log(find1);

//Complete the totalorderValue function
// Do not alter the starter code
// const orders = [
//     {
//       orderNumber: 1,
//       items: [
//         { name: "Cappuccino", price: 3.5 },
//         { name: "Chocolate Croissant", price: 2.5 }
//       ]
//     },
//     {
//       orderNumber: 2,
//       items: [
//         { name: "Latte", price: 4.0 },
//         { name: "Blueberry Muffin", price: 2.75 }
//       ],
//       discountCode: "COFFEELOVER"
//     }
//   ];
//   function totalOrderValue(orders, applyDiscount){
//Implement your function here
//The function should return the total price after applying the discount.
// }
//define your callback function here to calculate the discount.

// function applyDiscount(discountCode, totalOrderValue){
//   let discount = 0;

//   switch(discountCode){
//       case discountCode === "COFFEELOVER":
//           discount = 10;
//           break;
//       case discountCode === "TEALOVER":
//           discount = 20;
//           break;
//       default:
//           discount = 0;
//           break;
//   }

//   return totalOrderValue -= (totalOrderValue * discount)/100;
// }

// Complete the function calculateAverage
// const weather = [
//   { city: "New York", temperature: 50, pressure: 1015 },
//   { city: "Los Angeles", temperature: 70, pressure: 1010 },
//   { city: "Chicago", temperature: 40, pressure: 1012 },
//   { city: "Houston", temperature: 75, pressure: 1020 },
//   { city: "Miami", temperature: 80, pressure: 1017 }
// ];
// const pressureThreshold = 1015;
// function calculateAverage(pressureThreshold){
//   const filterArray = weather.filter((item) => {return item.pressure >= pressureThreshold;}).map((item) => {return item.temperature});

//   return filterArray.reduce(function(avg,temp,index,arr){
//     avg+=temp;
//     if(index === arr.length-1){
//       return avg/arr.length;
//     }
//     else{
//       return avg;
//     }
//   },0).toFixed(1);
// }
// console.log(calculateAverage(pressureThreshold))
// //Output : 68.3

// function main() {

//   const userProfile = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     address: {
//       city: "New York",
//       street: "123 Main St",
//       zipCode: "10001"
//     }
//   };
//   const userProfile2 = {
//     name: "Marry Jane",
//     email: "marry.jane@example.com",
//     address: {
//       city: "L.A",
//       street: "154, washington road",
//       block: '0101',
//       zipCode: "10011"
//     }
//   };

//   function getUserDetail(profile, keys) {
//     // Implement your function here
//     let value = profile;
//     for (let key of keys) {
//       if (value && typeof value === "object" && key in value) {
//         value = value[key];
//       }
//       else {
//         return "Not Available";
//       }
//     }

//     return value !== profile ? value : "Not Available";
//   }


//   console.log(getUserDetail(userProfile, ["address", "city"]));
//   // Usage: should return "New York"
//   //do not modify the return statement
//   return getUserDetail;
// }


// const movie = {
//   title: "The Avengers",
//   year: 2012,
//   genre: "Action, Sci-fi, Thriller",
//   cast: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth"],
//   getDetails: function () {
//     console.log(`Title: ${movie.title}\nYear: ${movie.year}\nGenre: ${movie.genre}\nCast: ${movie.cast}`);
//     console.log(`Title: ${this.title}\nYear: ${this.year}\nGenre: ${this.genre}\nCast: ${this.cast}`);
//   },
//   getMovieDetails(detail) {
//     console.log(movie[detail]);
//   },
// };

// console.log(movie.__proto__);


// movie.getDetails();
// const detail = 'year';
// movie.getMovieDetails(detail);


// function movie(title, year){
//   const movieObj = {
//     title: title,
//     year: year,
//     getDetails(){
//       console.log(`
//                   Title: ${this.title}
//                   Year: ${this.year}
//                 `);
//     },
//   }
//   return movieObj;
// }

// const movie1 = movie("Avengers",2012);
// console.log(movie1);

// const movie2 = movie("Wolverine",2013);
// movie2.getDetails();

// Constructor Function
// function Movie(title, year){
//   this.Title = title;
//   this.year = year;
//   this.getDetails = function() {
//     console.log(`
//       Title: ${this.title}
//       Year: ${this.year}
//     `);
//   }
// }

// let Movie = function(title,year){
//   this.title = title;
//   this.year = year;
// }

// console.log(Movie.prototype);
// Movie.prototype.getDetails = function(){
//   console.log(`
//     Title: ${this.title}
//     Year: ${this.year}
//   `);
// }

// const movie3 = new Movie("Deapool",2016);
// console.log(movie3);
// movie3.getDetails();

//Prototype
// function Movie(title){
//   this.title = title;
// }

// const movie1 = new Movie("Wolverine");

// movie1.year = 2013;
// console.log(movie1);
// console.log(movie1.__proto__);

// const movie2 = new Movie("Deadpool");
// console.log(movie2.prototype);
// console.log(movie2.__proto__.__proto__);

// const arr = [1,2,3,4,5];

// console.log(arr.__proto__);
// console.log(Object.getPrototypeOf(Array));

// const car = {
//   getDetails(name){
//     console.log(`car name is ${name}`);
//   }
// }

// const bike = {
//   getNoDetails(name){
//     console.log(`bike name is${name}`);
//   }
// }

// const car1 = Object.create(car);
// Object.assign(car,bike);
// console.log(car1.__proto__);

// const car = {
//   name:'car',
//   color: 'black',
//   getDetails(brand, seats){
//     console.log(`This is a ${this.color} ${this.name} of ${brand} company, It has ${seats} seats`);
//   },
// }

// const bus = {
//   name:'bus',
//   color:'red'
// }

// car.getDetails('Audi',2);

// car.getDetails.call(bus,"Tata",56);
// car.getDetails.apply(bus,['Best',40]);

// const veh1 = car.getDetails.bind(bus);
// veh1("NMMT",60);

// const obj = {
//   a:2,
//   b:'a',
//   c:69,
//   d:'abd'
// }

// // const {a,c} = obj;
// // console.log(a+c);

// //Binding Pattern
// const {a : a1} = obj;
// console.log(a1);

// //Assignment Pattern
// let b;
// ({b:b} = obj);
// console.log(b);

// const fruits = ["Banana","Apple","Mango","Kiwi"];

// //Binding Pattern
// // const [,a,m] = fruits;
// // console.log(a,m);

// const[a,m,...f] = fruits;
// console.log(f);

// function main() {
//   // Create your constructor function with the name Shipment
//   function Shipment(id, location, destination, status, resources) {
//     this.id = id;
//     this.location = location;
//     this.destination = destination;
//     this.status = status;
//     this.resources = resources;
//   }

//   // Add the updateStatusAndResources using the object prototype
//   Shipment.prototype.updateStatusAndResources = function(status, resources) {
//     this.status = status;
//     this.resources = resources;
//   };

//   // Add the assignResource methods through Object prototype
//   Shipment.prototype.assignResources = function(...newResources) {
//     this.resources.push(...newResources);
//   };

//   // Create the object literal with the name TrackingSystem
//   const TrackingSystem = {
//     shipments: [],

//     updateStatus(id, status) {
//       const shipment = this.shipments.find(shipment => shipment.id === id);
//       if (shipment) {
//         shipment.status = status;
//       }
//     },

//     viewShipment(id) {
//       const shipment = this.shipments.find(shipment => shipment.id === id);
//       if (shipment) {
//         const { id, status, resources, location, destination } = shipment;
//         console.log(`Shipment ID: ${id}`);
//         console.log(`Status: ${status}`);
//         console.log(`Resources: ${resources.join(', ')}`);
//         console.log(`Location: ${location}`);
//         console.log(`Destination: ${destination}`);
//       }
//     }
//   };

//   return { Shipment, TrackingSystem };
// }

// // Usage example
// const { Shipment, TrackingSystem } = main();

// const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route", ["Driver", "Truck"]);
// shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
// shipment1.assignResources("Worker", "Pallets");

// const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", ["Forklift"]);
// shipment2.updateStatusAndResources("In transit", ["Driver"]);

// TrackingSystem.shipments.push(shipment1, shipment2);

// TrackingSystem.updateStatus("12345", "Delivered");
// TrackingSystem.viewShipment("12345");

// // Expected Output:
// // Shipment ID: 12345
// // Status: Delivered
// // Resources: Fork   

function Vehicle(name, color, wheels){
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}
Vehicle.prototype.getDetails = function(){
  console.log(`The ${this.name} is ${this.color} in color.
    It has ${this.wheels} wheels.`);
}
const car = new Vehicle('Car','Red',4);
console.log(car.__proto__);
car.getDetails();

// //Classes in Js ... Class Expression
// const Veh = class{

// }

//Classes in Js ... Class Declaration
class VehicleCl{
  //properties
  name;
  color;
  wheels;

  //constructor, only 1 per class

  // constructor(){
  //   this.name = 'Optimus Prime';
  //   this.color = "Red/Blue";
  //   this.wheels = 8;
  // }
  constructor(name,color,wheels){
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }

  //methods
  getDetails(){
    console.log(`The ${this.name} is ${this.color} in color.
      It has ${this.wheels} wheels.`);
  }
}

const vehicle1 = new VehicleCl('Truck','Blue',12);
vehicle1.getDetails();
console.log(vehicle1.__proto__);


//Create the class with ES6 standard with mentioned properties and methods.
//Do not alter the starter Code
// function main(){
//   //Implement your class here
//   class Person{
//       name;
//       age;
//       gender;
      
//       constructor(name,age,gender){
//           this.name=name;
//           this.age=age;
//           this.gender=gender;
//       }
      
//       speak(){
//           console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//       }
//   }

//   class Student{
//     person;
//     major;
//     gpa;
    
//     constructor(person, major, gpa){
//       this.person = person;
//       this.major = major;
//       this.gpa = gpa;
//     }

//     study(){
//       console.log(`I am Studying ${this.major} and my GPA is ${this.gpa}`);
//     }

//     speak(){
//       console.log(`Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`);
//     }
//   }

//   const kira = new Person("Kira",22,"Male");
//   kira.speak();

//   const kiraStud = new Student(kira,"IT",8.97);
//   kiraStud.study();
//   kiraStud.speak();
  
//   return {Person,Student};
// }