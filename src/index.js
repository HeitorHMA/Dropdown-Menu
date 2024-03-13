const dropdownButton = document.querySelector("#dropdown-button");
dropdownButton.addEventListener("click",function(){
    const dropdownContent=document.querySelector("#test")
    if(dropdownContent.classList.contains("undisplayed")){
    dropdownContent.classList.remove("undisplayed")
    dropdownContent.classList.add("dropdown-content")
    }
    else if(dropdownContent.classList.contains("dropdown-content")){
        dropdownContent.classList.remove("dropdown-content")
        dropdownContent.classList.add("undisplayed")
    }
})