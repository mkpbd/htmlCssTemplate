let editable = document.querySelectorAll('.editable');

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

editable.forEach(function(elem){

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

// p.forEach(function(elem){

//   elem.addEventListener('click', function(ev){
//       ev.preventDefault();
//       // console.log(elem.innerHTML);
//       // elem.setAttribute('contenteditable', 'true');
//       console.log(ev.target.setAttribute('contenteditable',true));
//       // let anchor = ev.tagret.document.querySelector('a');
//       // anchor.setAttribute('contenteditable', 'true');
//       // anchor.addEventListener('input', function(e){

        
//      // });
//   });
// })



//  show button on mouse click 


const editButton = document.querySelector('.mkp__card');



editable.forEach(element => {
  // console.log('foreach is running');
  let isEventTrue = false;
   element.addEventListener('mouseenter', ev =>{

    editButton.style.top = (ev.layerY+10)+'px';
    editButton.style.display = 'block';
    // 
    //element.after(`10283`)
   //  element.innerText = 'hello kamal';

   
   // console.log(ev);
   })
});

// p.forEach(element => {
//   // console.log('foreach is running');
//   let isEventTrue = false;
//    element.addEventListener('mouseenter', ev =>{

//     editButton.style.top = (ev.layerY+10)+'px';
//     editButton.style.left = (ev.layerX)+'px';
//     editButton.style.display = 'block';
//     // 
//     //element.after(`10283`)
//    //  element.innerText = 'hello kamal';

   
//    // console.log(ev);
//    })
// });

// edtibale Button 

const editiableButtonForelementEdit = document.getElementById('edit-section');

editiableButtonForelementEdit.addEventListener('click', function(){
  editable.forEach(function(elem){

  
    // elem.target.setAttribute('contenteditable',true);
    elem.style.border= '2px solid red';
    elem.style.padding = '5px 10px';
    elem.style.margin = '10px 10px';
   
           
        
   
   })
})

