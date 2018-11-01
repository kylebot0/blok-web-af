var search = document.querySelector(".search-form button");
var star = document.querySelector("div i");
var toggleBoolean = false;



search.addEventListener("click", function() {
  location.href = "index_search.html";
});

star.addEventListener("click", function() {
if (toggleBoolean === false){
star.classList.add("favorite");
toggleBoolean = !toggleBoolean;
} else {
star.classList.remove("favorite");
toggleBoolean = !toggleBoolean;
};
});
