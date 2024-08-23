// for search box 
const Search = document.querySelector(".search-box input");
const images = document.querySelectorAll(".image-box");
const noResults = document.querySelector(".no-results");


Search.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    let searchValue = Search.value;
    let value = searchValue.toLowerCase();
    let found = false; 

    images.forEach(image => {
      if (image.dataset.name && value === image.dataset.name.toLowerCase()) {
        image.style.display = "block";
        found = true; 

      } else {
        image.style.display = "none";
      }
    });
    if (!found) {
        noResults.style.display = "block";
      } else {
        noResults.style.display = "none";
      }
  
  }
});

Search.addEventListener("keyup", () => {
  if (Search.value !== "") return;
  images.forEach(image => {
    image.style.display = "block";
  });
  noResults.style.display = "none";

});

// filter js---------------------------------
$(document).ready(function (){
    $(".filter-item").click(function (){
        const value =$(this).attr("data-filter");
        if (value == "all" ){
            $(".image-box").show("1000");

        }
        else{
            $(".image-box").not("." + value ).hide("1000")  ;
            $(".image-box").filter("." + value ).show ("1000")  ;
        }
    });
    //  add active to btn
    $(".filter-item").click(function (){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });

});
// -----------------------------------
// Get the file input and upload button
const imageUpload = document.getElementById('image-upload');
const uploadButton = document.getElementById('upload-button');

// Added  an event listener to the upload button
uploadButton.addEventListener('click', () => {
  // Get the selected file
  const file = imageUpload.files[0];

  // Check if a file is selected
  if (file) {
    // Create a new image box
    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';
    imageBox.innerHTML = `
      <a href="${URL.createObjectURL(file)}" data-lightbox="pictures" data-title="${file.name}">
        <img src="${URL.createObjectURL(file)}" alt="${file.name}">
      </a>
    `;

    // Add the image box to the images container
    document.querySelector('.images').appendChild(imageBox);

    // Clear the file input field when image is uploaded
    imageUpload.value = null;
  }
});

