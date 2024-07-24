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


// const blogData = [
//     {
//       title: 'First Blog Post',
//       date: 'January 1, 2022',
//       content: 'this is content of the first blog page.'
//     },
//     {
//       title: 'Second Blog Post',
//       date: 'February 1, 2022',
//       content: 'This is the content of the second blog post.'
//     },
//     {
//       title: 'Third Blog Post',
//       date: 'March 1, 2022',
//       content: 'This is the content of the third blog post.'
//     }
//   ];
// //Create your function here with the name addBlog which takes a blog object as parameter
// function addBlog(blog){
//     const blogPost = document.createElement("div");
//     const blogHeader = document.createElement("div");
//     const blogTitle = document.createElement("h2");
//     const blogDate = document.createElement("p");
//     const blogContent = document.createElement("p");

//     blogPost.className = 'blog-post';
//     blogHeader.className = 'blog-header';
//     blogTitle.className = 'blog-title';
//     blogDate.className = 'blog-date';
//     blogContent.className = 'blog-content';

//     blogTitle.textContent = blog.title;
//     blogDate.textContent = blog.date;
//     blogContent.textContent = blog.content;

//     blogHeader.appendChild(blogTitle);
//     blogHeader.appendChild(blogDate);
//     blogPost.appendChild(blogHeader);
//     blogPost.appendChild(blogContent);

//     const blogList = document.querySelector(".blog-list");
//     blogList.appendChild(blogPost);
// }
// //Call each object present in blogData with addBlog.

// blogData.forEach((blog) => addBlog(blog));
// //If page does not update the changes automatically please refresh

document.querySelector("h1").remove();