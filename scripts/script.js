
$('#navBar').load('nav-bar.html');
$('#footer').load('footer.html');




////Making the image modals
//------------------------------------------------------------------------


var imgCount = document.getElementsByClassName("img-fluid").length;

imgCount = imgCount + 1;
// console.log(imgCount);


// Get the modal
// var modal = document.getElementById('myModal');
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');

for (var x = 1; x < imgCount; x++) {
    var img = document.getElementById("myImg" + x);
    // console.log(img);
  


// var modalImg = document.getElementById("img01");
var modalImg = document.getElementById("img01");

// var captionText = document.getElementById("caption");
var captionText = document.getElementById("caption");


    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
       
    }

}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}





