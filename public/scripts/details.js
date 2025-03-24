import { existingBlog } from "../scripts/explore.js";

window.addEventListener("DOMContentLoaded", () => {
  const blogID = localStorage.getItem("clickedBlogId");
  if (blogID) {
    const clickedBolgID = existingBlog.find((blog) => blog.id=== blogID);
    console.log(clickedBolgID, "here is the log ", blogID)
    if (clickedBolgID) {
      document.querySelector(".js-author").innerHTML = clickedBolgID.author;
      document.querySelector(".js-date").innerHTML = clickedBolgID.date;
      let imgg = document.querySelector(".js-blog-img img");
      imgg.src = clickedBolgID.image;
      document.querySelector(".js-title").innerHTML = clickedBolgID.title;
      document.querySelector(".js-content").innerHTML = clickedBolgID.content;

      // document.querySelector(".moreText").classList.add("readmore");
    }
  }
  // localStorage.removeItem("clickedBlogId");
});
