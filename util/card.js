const cardEnter = (event) => {
    if(window.innerWidth <= 768) return;
    const cardContent = event.target;
    cardContent.children[0].style.zIndex = 1;
}

const cardLeave = (event) => {
    if(window.innerWidth <= 768) return;
    const cardContent = event.target;
    cardContent.children[0].style.zIndex = 0;
}