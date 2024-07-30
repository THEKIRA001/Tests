// console.log(document.getElementsByTagName("h1")[0].innerText);
// const firstHead = document.querySelectorAll("h1");
// console.log(firstHead[0]);
// console.log(document.getElementById("second").textContent);
// console.log(document.getElementsByClassName("first")[0].textContent);
// console.log(document.getElementsByTagName("p")[0].textContent);
// const para = document.getElementsByTagName("p")[0];
// firstHead.style.color = 'Green';
// para.style.backgroundColor = 'Red'
// para.setAttribute("id","something");
// document.getElementById("second").setAttribute("class","something");
// const firstHead = document.querySelector("h1");
// firstHead.innerHTML = "<b><i>I CAN USE TAGS HERE</i></b>";
// const secondHead = document.getElementById("second");
// secondHead.textContent = "Only Text Content, No Tags";

// const btn = document.createElement("button");
// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");
// btn.textContent = 'CLICKK MEE';
// btn2.textContent = 'efeewfefefew';
// btn3.textContent = 'YUHABAHA';
// btn.className = 'SOmethING';


// const div1 = document.querySelector("div");
// div1.append(btn, btn2,"Lets you append String");
// div1.appendChild(btn3);




// document.querySelector("h1").remove();

// const btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//   document.querySelector("p").remove();
// })

// const p = document.querySelector("p");
// p.addEventListener("click", function () {
//   paraClick("Hello");
// });

// function paraClick(name){
//   console.log(name,"Para Clicked");
// }

// //complete the addBlog function to add moveup, movedown and delete button. 
// function addBlog(blog) {
//   const blogList = document.querySelector('.blog-list');
  
    
//   const newBox = document.createElement('div');
//   newBox.classList.add('blog-box');

//   const newBlogPost = document.createElement('div');
//   newBlogPost.classList.add('blog-post');
//     newBox.appendChild(newBlogPost);
    

//   const newBlogHeader = document.createElement('div');
//   newBlogHeader.classList.add('blog-header');
//   newBlogPost.appendChild(newBlogHeader);

//   const newBlogTitle = document.createElement('h2');
//   newBlogTitle.classList.add('blog-title');
//   newBlogTitle.textContent = blog.title;
//   newBlogHeader.appendChild(newBlogTitle);

//   const newBlogDate = document.createElement('p');
//   newBlogDate.classList.add('blog-date');
//   newBlogDate.textContent = blog.date;
//   newBlogHeader.appendChild(newBlogDate);

//   const newBlogContent = document.createElement('p');
//   newBlogContent.classList.add('blog-content');
//   newBlogContent.textContent = blog.content;
//   newBlogPost.appendChild(newBlogContent);

// // create a new div with className blog-buttons and append it to newBox
// const newBlogButtons = document.createElement('div');
// newBlogButtons.classList.add('blog-buttons');
// newBox.appendChild(newBlogButtons);

// //Create moveup button with class blog-button and move-up
// const moveUp = document.createElement('button');
// moveUp.textContent = 'Move Up';
// moveUp.classList.add('blog-button','move-up');
// newBlogButtons.appendChild(moveUp);
// //Add event listerner to moveup button
// moveUp.addEventListener('click', function () {
//   const previousSibling = newBox.previousElementSibling;
//       if (previousSibling) {
//         blogList.insertBefore(newBox, previousSibling);
//       }
// })

// //Create movedown button with class blog-button and move-down
// const moveDown = document.createElement('button');
// moveDown.textContent = 'Move Down';
// moveDown.classList.add('blog-button','move-down');
// newBlogButtons.appendChild(moveDown);
// //Add event listerner to movedown button
// moveDown.addEventListener('click', function () {
//   const nextSibling = newBox.nextElementSibling;
//       if (nextSibling) {
//         blogList.insertBefore(nextSibling, newBox);
//       }
// })

// //Create delete button with class blog-button and delete
// const deleteBtn = document.createElement('button');
// deleteBtn.textContent = 'Delete';
// deleteBtn.classList.add('blog-button','delete');
// newBlogButtons.appendChild(deleteBtn);
// //Add event listerner to delete button
// deleteBtn.addEventListener('click', function(){
//   blogList.removeChild(newBox);
// });


//   blogList.appendChild(newBox);

// // Add event listeners to the buttons
// }

// const blogData = [
// {
// title: 'First Blog Post',
// date: 'January 1, 2022',
// content: 'This is the content of the first blog post.'
// },
// {
// title: 'Second Blog Post',
// date: 'February 1, 2022',
// content: 'This is the content of the second blog post.'
// },
// {
// title: 'Third Blog Post',
// date: 'March 1, 2022',
// content: 'This is the content of the third blog post.'
// }
// ];

// blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array

// const heading = document.querySelector('h1');
// heading.addEventListener('mouseover',function(){
//   heading.style.color = 'red';
// })
// heading.addEventListener('mouseleave',function(){
//   heading.style.color = 'black';
// })

// var num = 0;

// document.addEventListener('keypress',(event) => {
//   num++;

//   event.stopPropagation();
//   console.log(num);
//   console.log(event.key);
// });

// Create your project here from scratch
// const moviesList = [
//   { movieName: "Flash", price: 7 },
//   { movieName: "Spiderman", price: 5 },
//   { movieName: "Batman", price: 4 },
// ];

// // References to DOM elements
// const selectMovie = document.getElementById("selectMovie");
// const movieName = document.getElementById("movieName");
// const moviePrice = document.getElementById("moviePrice");
// const totalPrice = document.getElementById("totalPrice");
// const selectedSeatsHolder = document.getElementById("selectedSeatsHolder");
// const numberOfSeat = document.getElementById("numberOfSeat");
// const proceedBtn = document.getElementById("proceedBtn");
// const cancelBtn = document.getElementById("cancelBtn");
// const seats = document.querySelectorAll("#seatCont .seat");

// // Initialize selected movie
// let currentMovie = moviesList[0];
// let selectedSeats = [];

// // Populate movie dropdown
// moviesList.forEach((movie, index) => {
//   const option = document.createElement("option");
//   option.value = index;
//   option.textContent = movie.movieName;
//   selectMovie.appendChild(option);
// });

// // Update UI based on selected movie
// function updateMovieDetails(movieIndex) {
//   currentMovie = moviesList[movieIndex];
//   movieName.textContent = currentMovie.movieName;
//   moviePrice.textContent = `$ ${currentMovie.price}`;
//   updateTotalPrice();
// }

// // Calculate and update the total price
// function updateTotalPrice() {
//   const total = selectedSeats.length * currentMovie.price;
//   totalPrice.textContent = `$ ${total}`;
//   numberOfSeat.textContent = selectedSeats.length;

//   if (selectedSeats.length === 0) {
//     selectedSeatsHolder.innerHTML = `<span class="noSelected">No Seat Selected</span>`;
//   } else {
//     selectedSeatsHolder.innerHTML = selectedSeats
//       .map((seat) => `<span class="selectedSeat">${seat}</span>`)
//       .join("");
//   }
// }

// // Event listener for seat selection
// seats.forEach((seat, index) => {
//   seat.addEventListener("click", () => {
//     // Prevent selection of occupied seats
//     if (seat.classList.contains("occupied")) return;

//     const seatNumber = index + 1;
//     const seatIndex = selectedSeats.indexOf(seatNumber);

//     if (seatIndex > -1) {
//       // Deselect the seat
//       selectedSeats.splice(seatIndex, 1);
//       seat.classList.remove("selected");
//     } else {
//       // Select the seat
//       selectedSeats.push(seatNumber);
//       seat.classList.add("selected");
//     }

//     updateTotalPrice();
//   });
// });

// // Event listener for movie selection
// selectMovie.addEventListener("change", (event) => {
//   updateMovieDetails(event.target.value);
// });

// // Event listener for continue button
// proceedBtn.addEventListener("click", () => {
//   if (selectedSeats.length === 0) {
//     alert("Oops no seat Selected");
//   } else {
//     alert("Yayy! Your Seats have been booked");

//     selectedSeats.forEach((seatNumber) => {
//       const seat = seats[seatNumber - 1];
//       seat.classList.remove("selected");
//       seat.classList.add("occupied");
//     });

//     // Reset selections and UI
//     selectedSeats = [];
//     updateTotalPrice();
//   }
// });

// // Event listener for cancel button
// cancelBtn.addEventListener("click", () => {
//   selectedSeats.forEach((seatNumber) => {
//     const seat = seats[seatNumber - 1];
//     seat.classList.remove("selected");
//   });

//   // Reset selections and UI
//   selectedSeats = [];
//   updateTotalPrice();
// });

// // Initialize the UI with default movie details
// updateMovieDetails(0);
