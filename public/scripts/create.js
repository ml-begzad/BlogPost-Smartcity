 //import { existingBlog } from "../scripts/explore.js";
const today=dayjs()

let upleadfile = document.querySelector(".upload-file");
upleadfile.addEventListener("change", () => {
  
  // const fileUrl = URL.createObjectURL(upleadfile.files[0]);
  const file=upleadfile.files[0];
  document.querySelector(".img-name").innerHTML = upleadfile.files[0].name;
  if(file){

    const reader = new FileReader();
  
    reader.onloadend = function(){
      const fileUrl=reader.result
      let image = document.querySelector(".js-uploadedImg");
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
  let date = document.querySelector(".js-date")
  date.value=today.format('YYYY-MM-DD');
  let img = document.querySelector(".js-uploadedImg").src;
  if (!title || !content || !author || !date || !img) {
    alert("You cannot leave any input empty");
}else{
  const blogId='ID-' + Date.now();

  let existingBlog=[];
  existingBlog.push({
        id:blogId,
        title:title,
        content:content,
        author:author,
        date:date.value,
        image:img
      });
    localStorage.setItem('newBlog',JSON.stringify(existingBlog));
    // alert("Blog successfully has been added!");
    // title.value=""
    // content.value=""
    // author.value=""
    // date.value=""
    // img.src=""
    //window.location.href = 'http://localhost/explore.html';
  }
}
