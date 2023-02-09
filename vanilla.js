/* You can use https://rss2json.com/ to load the RSS feeds */
//To select button classes
const tabsBtns = document.querySelectorAll(".tabs-btns");
let btnWrapper = document.querySelector(".btn-group");

//adding event listner to the button to change the acive button
btnWrapper.addEventListener("click", function(e){
    tabsBtns.forEach(cur => {
        cur.classList.remove("active");
    })
    let el = e.target.closest(".tabs-btns");
    if(!el) return;
    el.classList.add("active");
})