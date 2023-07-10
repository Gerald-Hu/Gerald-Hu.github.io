let nickname = '';
let email = '';
let message = '';

const nicknameChange = (event)=>{
    nickname = event.target.value;
}

const getNickname = ()=>{
    return nickname;
}

const emailChange = (event)=>{
    email = event.target.value;
}

const getEmail = ()=>{
    return email;
}

const messageChange = (event)=>{
    message = event.target.value;
}

const getMessage = ()=>{
    return message;
}

document.getElementById("message-form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(getEmail())
    fetch("https://savemessage-43qfjnlioa-uc.a.run.app", {
        method: 'post',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'nickname': getNickname(),
            'email': getEmail(),
            'message': getMessage(),
        })
    })
        .then((res) => {
            alert("Thank you for your message!");
            console.log(res)
        }).catch(() =>{
            alert("Sorry, but the message did not went through due to network errors.");
        }
        );
})