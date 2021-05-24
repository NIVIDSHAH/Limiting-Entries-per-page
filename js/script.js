//Creat an array from all the li
var listArray = Array.from(document.querySelectorAll("li"));
console.log(listArray.length);


//Count number of pages needed
var pages;
var entriesPerPage = 10;
numPages = Math.ceil(listArray.length / entriesPerPage);    //Limiting 10 entries per page
console.log(numPages);

//Create anchor tags to link pages
var pageButton = document.querySelector(".pagination li");
var i;
for (i = 0; i < numPages; i++){
    pageButton.innerHTML += "<a href='#' class='anchor'>" + (i + 1) + "</a>";   //Used i+1 as we cannot start from zero
}


//Click event listener for anchor tags
var anchors = document.querySelectorAll('.anchor');
for (var i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', handler, false);
}


//Displaying entries per page
var divsToHide = document.getElementsByClassName("contact-item cf");
for(var i = entriesPerPage; i < divsToHide.length; i++){
    divsToHide[i].style.display = "none";
}


//Function to display only specific page entries per page
function handler() {
    hideFunction();
    // alert(this.innerHTML * 10); keeping this here as it helped me a lot to manage page numbers :)
    var namesDisplay = (this.innerHTML * entriesPerPage) - entriesPerPage;
    for(var k = 0; k < entriesPerPage; k++){
        divsToHide[namesDisplay+k].style.display = "block";
    }
}


//Function to hide all the divs
function hideFunction() {
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none";
    }
}

