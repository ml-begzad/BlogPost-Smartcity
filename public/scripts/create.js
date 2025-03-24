import { existingBlog } from "../scripts/explore.js";

let upleadfile = document.querySelector(".upload-file");
upleadfile.addEventListener("change", () => {
  
  // const fileUrl = URL.createObjectURL(upleadfile.files[0]);
  const file=upleadfile.files[0];
  document.querySelector(".img-name").innerHTML = upleadfile.files[0].name;
  if(file){

    const reader = new FileReader();
  
    reader.onloadend = function(){
      const fileUrl=reader.result
      let image = document.querySelector(".uploadedImg");
      image.src = fileUrl;
      image.classList.add("displayImg");
    };
    reader.readAsDataURL(file)
  }
});

document.querySelector(".save-btn").addEventListener("click",createBlog);

export function createBlog() {
  let title = document.querySelector(".js-title").value;
  let content = document.querySelector(".js-content").value;
  let author = document.querySelector(".js-author").value;
  let date = document.querySelector(".js-date").value;
  let img = document.querySelector(".js-uploadedImg").src;
  if (!title || !content || !author || !date || !img) {
    alert("You cannot leave any input empty");
}else{
  const blogId='ID-' + Date.now();
    existingBlog.push({
        id:blogId,
        title:title,
        content:content,
        author:author,
        date:date,
        image:img
      });
    localStorage.setItem('newBlog',JSON.stringify(existingBlog));
    // alert("Blog successfully has been added!");
    // title.value=""
    // content.value=""
    // author.value=""
    // date.value=""
    // img.src=""
    window.location.href = 'http://localhost/explore.html';
  }
}
