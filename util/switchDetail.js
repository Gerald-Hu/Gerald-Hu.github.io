const switchDetail = (event) => {
    const current = event.target;
    const defaultMsg = document.getElementById('defaultMsg');
    const CM = document.getElementById("CMInfo");
    const CO = document.getElementById("COInfo");
    const Minor = document.getElementById("MinorInfo");

    defaultMsg.style.display = 'none';

    if(current.id === 'CM'){
        CM.setAttribute("style", "display:inherit");
        CO.setAttribute("style", "display:none");
        Minor.setAttribute("style", "display:none");
    } else if(current.id === 'CO'){
        CO.setAttribute("style", "display:inherit");
        CM.setAttribute("style", "display:none");
        Minor.setAttribute("style", "display:none");
    }else{
        Minor.setAttribute("style", "display:inherit");
        CO.setAttribute("style", "display:none");
        CM.setAttribute("style", "display:none");
    }
}