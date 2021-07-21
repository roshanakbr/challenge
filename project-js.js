function myFunction() {
 
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var btnid;
 openDialog = (btnid)=> {
  document.getElementById(btnid).click();
}
 



const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}

ModalFunc = () =>{
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  
    modal.style.display = "block";
  
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

const registrationBtn = () => {
  console.log("yes");
  let a =document.querySelector('input[name="firstname"]').value;
 let b =document.querySelector('input[name="phonenumber"]').value;
 let c =document.getElementById("email").value;

 

let e= document.getElementById("fileid").files.length;

if(e === 0 || a == '' || b =='' || c ==''){
  ModalFunc();
  document.getElementById("modal-text").innerHTML = "لطفا قسمت های ستاره دار را تکمیل نمایید";
 
}

 else if(e!==0){
   console.log(e);
  let d =document.getElementById("fileid").files[0].size;
  let sizefinal = Math.round((d / 1024));

  if(sizefinal>1024){
  
   
      ModalFunc();
      document.getElementById("modal-text").innerHTML = "لطفا قسمت های ستاره دار را تکمیل نمایید";
      
    
  }
  else{
    ModalFunc();
    document.getElementById("modal-text").innerHTML = "اطلاعات با موفقیت ارسال شد";
  }
 
 }

 else{
  ModalFunc();
  document.getElementById("modal-text").innerHTML = "اطلاعات با موفقیت ارسال شد";
  }
  
}





GetFileSize = (fileid,filename,buttonid,fp)=> {
  console.log("yes");
  var fi = document.getElementById(fileid);
  var filen = document.getElementById(filename);
  var bi = document.getElementById(buttonid); // GET THE FILE INPUT.
  var ti=  document.getElementById(fp)
  // var fileSize = fi.files[0].size;
  // console.log(fileSize);
   var fileSize = fi.files[0].size;
  
   var size = Math.round((fileSize / 1024));
   
   if(size > 1024){
    console.log(size);
     filen.setAttribute("style"," border:1px solid red");
     bi.setAttribute("style"," border:1px solid red");
     ti.innerHTML = "فایل بزرگتر از حد مجاز است";
     ti.setAttribute("style","color:red");
   }
   if(size <= 1024){
   
     filen.setAttribute("style","border:1px solid #ccc");
     bi.setAttribute("style","border:1px solid #ccc");
     ti.innerHTML = "حداکثر حجم مجاز فایل  1 مگابایت باشد";
     ti.setAttribute("style","color:black");
   }
  
  
  
}


// const changeBtn = ()=>{
//   console.log("change");
//   let a =document.querySelector('input[name="firstname"]').value;
//   let b =document.querySelector('input[name="phonenumber"]').value;
//   let c =document.getElementById("email").value;
// console.log(a);
//  let e= document.getElementById("fileid").files.length;
//  if(a == '' || b =='' || c ==''){
//     document.getElementById("btnsubmit").setAttribute("style","background-color:#ccc")
//     document.getElementById("btnsubmit").disabled=true;
    
    
//  }
//  if(e!==0){
//    console.log(e);
//   let d =document.getElementById("fileid").files[0].size;
//   let sizefinal = Math.round((d / 1024));

//   if(sizefinal<=1024){
//     if(a !== '' && b !=='' && c !==''){
   
//       document.getElementById("btnsubmit").setAttribute("style","background-color:#1FC5B9;color:white");
     
//       document.getElementById("btnsubmit").disabled=false;
      
//      }
//   }
//   else{
//     document.getElementById("btnsubmit").setAttribute("style","background-color:#ccc")
//     document.getElementById("btnsubmit").disabled=true;
   
//   }
//  }
  
 
 
 
// }
// var acc = document.getElementsByClassName("accordion");
// var j;

// for (j = 0; j < acc.length; j++) {
//   acc[j].addEventListener("click", function() {
//     this.classList.toggle("activeaccordion");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }

