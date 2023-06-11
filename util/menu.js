const toggleMenu = () => {

    if(window.innerWidth > 768) return;

    const hamburger = document.getElementById("header--hamburger");
    const menu = document.getElementById("header--menu");

    if(hamburger.classList.contains("is-active")){
        hamburger.classList.remove("is-active");
    }else{
        hamburger.classList.add("is-active");
    }

    if (menu.className === "header--nav") {
        menu.className = "header--nav--expand";
    } else {
        menu.className = "header--nav";
    }

}