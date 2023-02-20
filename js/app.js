
function getDateTime() {
  document.getElementById('demo').innerHTML = Date();
};

var mybutton = document.getElementById("myBtn");
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > (window.innerHeight / 2) || document.documentElement.scrollTop > (window.innerHeight / 2)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function changeListItem (index) {
  let listDefault = [1, 2, 3]
  
  for (let i = 1; i <= listDefault.length; i++) {
    let elem = document.getElementById(`btnChange-${index}`)
    if (index === i) {
      elem.classList.add("active")
    } else {
      let el = document.getElementById(`btnChange-${i}`)
      let isActive = el.classList.contains("active")
      if(isActive) el.classList.remove("active")
    }
  }
}