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

        //prevent scroll
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";

        menu.className = "header--nav--expand";
    } else {
        //enable scroll
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
        menu.className = "header--nav";
    }

}