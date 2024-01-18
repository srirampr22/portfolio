window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0px";
    //document.getElementById("navbar").classList.remove('dark');
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// JavaScript function to toggle project description visibility
function toggleProjectDescription(id) {
  var description = document.getElementById("project-description-" + id);

  if (description.style.maxHeight) {
    description.style.maxHeight = null; // Hide the description
  } else {
    description.style.maxHeight = "500px"; // Show the description
  }
}
