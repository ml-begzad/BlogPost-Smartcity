export const existingBlog = [
  {
    id: "ID1",
    title: "Life changing technology",
    author: "Sara Jamal",
    date: "2/2/2025 13:09",
    image:
      "./images/tech.jpg",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius saepe quas dolor? Provident aliquam sapiente delectus voluptatem, in voluptas repellendus voluptate magnam rerum quis facere ratione error aut earum reprehenderit fugit asperiores alias animi deleniti excepturi repudiandae. Debitis, labore suscipit laboriosam fugit earum veritatis officia consequatur natus quam doloribus maiores omnis hic neque nemo ullam magni. Fugiat, suscipit debitis totam laudantium nam quos, iusto libero esse cum animi fuga ducimus dicta repudiandae! Hic ex aspernatur quae numquam, corrupti laboriosam nostrum aliquam iure fugiat, expedita accusamus? Explicabo, ad amet voluptates veritatis distinctio, temporibus itaque quam odio vel fugiat, impedit officiis?",
  },
  {
    id: "ID2",
    title: "Australia Trip",
    author: "Ahmad Ahmadi",
    date: "14/3/2024 02:00",
    image:
      "https://www.adventuredragon.com/wp-content/uploads/2017/11/Sydney-Harbour-Bay-sunset-ships.jpg.webp",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius saepe quas dolor? Provident aliquam sapiente delectus voluptatem, in voluptas repellendus voluptate magnam rerum quis facere ratione error aut earum reprehenderit fugit asperiores alias animi deleniti excepturi repudiandae. Debitis, labore suscipit laboriosam fugit earum veritatis officia consequatur natus quam doloribus maiores omnis hic neque nemo ullam magni. Fugiat, suscipit debitis totam laudantium nam quos, iusto libero esse cum animi fuga ducimus dicta repudiandae! Hic ex aspernatur quae numquam, corrupti laboriosam nostrum aliquam iure fugiat, expedita accusamus? Explicabo, ad amet voluptates veritatis distinctio, temporibus itaque quam odio vel fugiat, impedit officiis?",
  },
  {
    id: "ID3",
    title: "Facebook Hack",
    author: "Sara Jamal",
    date: "2/2/2025 13:09",
    image:
      "./images/facebook.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eius saepe quas dolor? Provident aliquam sapiente delectus voluptatem, in voluptas repellendus voluptate magnam rerum quis facere ratione error aut earum reprehenderit fugit asperiores alias animi deleniti excepturi repudiandae. Debitis, labore suscipit laboriosam fugit earum veritatis officia consequatur natus quam doloribus maiores omnis hic neque nemo ullam magni. Fugiat, suscipit debitis totam laudantium nam quos, iusto libero esse cum animi fuga ducimus dicta repudiandae! Hic ex aspernatur quae numquam, corrupti laboriosam nostrum aliquam iure fugiat, expedita accusamus? Explicabo, ad amet voluptates veritatis distinctio, temporibus itaque quam odio vel fugiat, impedit officiis?",
  },
];

 let storedBlogs=JSON.parse(localStorage.getItem('newBlog'))|| existingBlog
createHTML()



function createHTML(){
  let blogsHtml = "";
  
  const previewlength = 100;
  storedBlogs.forEach((blog) => {
    const lessContent =
    blog.content.length > previewlength
    ? blog.content.substring(0, previewlength)
    : blog.content;
    
    blogsHtml += `<div class="generalContainer js-general-container flex flex-col gap-0 justify-center mx-auto border border-gray-300 p-5 rounded-lg lg:w-[80%]">    
    <div class="details flex flex-row justify-between p-1">
    <div class=" js-author text-[9px] text-center lg:text-[15px]">
                        Author: ${blog.author}
                        </div>
                        <div class="text-[9px] lg:text-[15px] text-center">${blog.date}</div>
                        </div>
                        
                        <div class="blog-img justify-center items-center">
                        <img src="${blog.image}" alt="" class="w-[600px] h-auto rounded-md object-cover">
                        </div>
                        
                        <div class="about text-left  flex flex-col justify-between p-1">
                        <div class="title js-title font-serif px-2 text-ellipsis font-bold text-sm lg:text-[20px]">
                        ${blog.title}
                    </div>
                    <div class="content leading-5 lg:text-[18px] overflow-ellipsis">
                    ${lessContent}
                    <a href="./details.html" class="js-readMore underline text-yellow-600" data-blog-id=${blog.id} underline text-yellow-500">read more...</a>
                    </div>
                    </div>
                    </div>`;
                  });
let container=document.querySelector(".js-container");
container.innerHTML = blogsHtml;

// function updateBlog(newBlog){
// localStorage.setItem('newBlog',JSON.stringify(newBlog))
// blogs=newBlog 
// }
}


// Search Section .....................
let singleblogDiv = document.querySelectorAll(".js-general-container");
const searchInput = document.querySelector(".search-inpt");
searchInput.addEventListener("input", search);

function search() {
  const value = searchInput.value.trim().toLowerCase();
  singleblogDiv.forEach((blog) => {
    const blogTitle = blog.querySelector(".js-title").textContent.toLowerCase();
    const matchingSearchItem = blogTitle.includes(value);
    if (!matchingSearchItem) {
      blog.classList.add("hideBlog");
    } else {
      blog.classList.remove("hideBlog");
    }
  });
}

// Readmore seciton .............................
let ReadMore = document.querySelectorAll(".js-readMore").forEach((blog) => {
  blog.addEventListener("click", () => {
    const blogId = blog.dataset.blogId;
    console.log(blogId, "dfd")
    localStorage.setItem("clickedBlogId", blogId);
    window.location.href = "./details.html";
  });
});