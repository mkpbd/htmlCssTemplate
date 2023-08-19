let p = document.querySelectorAll('p');

let uploadImage = document.getElementById('image-upload');

let imageChange = document.getElementById('image-change');

let ulli = document.querySelectorAll('ul li');

// Get the modal
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

uploadImage.addEventListener('click', function(event){
    modal.style.display = 'block'
    console.log(uploadImage)

});

const imageArray = [];
imageChange.addEventListener('change', function(event){
  console.log(imageChange.files);

  if(imageChange.files[0].name != null || imageChange.files[0].name != undefined){
  //  uploadImage.setAttribute('src', imageChange.files[0].name)
  imageArray.push(imageChange.files[0]);


  }

  console.log('image pushed', imageArray);

});

span.addEventListener("click", function(event){

  modal.style.display ='none';
 
});
// let anchor = document.querySelector('a');

// p.addEventListener('click', function(){
//     console.log(p.innerHTML);
// })

p.forEach(function(elem){

    elem.addEventListener('click', function(ev){
        ev.preventDefault();
        // console.log(elem.innerHTML);
        // elem.setAttribute('contenteditable', 'true');
        console.log(ev.target.setAttribute('contenteditable',true));
        // let anchor = ev.tagret.document.querySelector('a');
        // anchor.setAttribute('contenteditable', 'true');
        // anchor.addEventListener('input', function(e){

          
       // });
    });
})

ulli.forEach(function(elem){

  elem.addEventListener('click', function(ev){
      ev.preventDefault();
      // console.log(elem.innerHTML);
      // elem.setAttribute('contenteditable', 'true');
      console.log(ev.target.setAttribute('contenteditable',true));
      // let anchor = ev.tagret.document.querySelector('a');
      // anchor.setAttribute('contenteditable', 'true');
      // anchor.addEventListener('input', function(e){

        
     // });
  });
})