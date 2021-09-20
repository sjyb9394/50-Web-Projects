const toasts = document.getElementById('toasts');
const button = document.getElementById('button');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
];

const color = [
    'info','success','error'
];

button.addEventListener('click', createNotification);

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(getRandomColor());

    notif.innerText = getRandomMessage();
    toasts.appendChild(notif);

    setTimeout(()=>{
        notif.remove();
    }, 3000);
}

function getRandomMessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}

function getRandomColor(){
    return color[Math.floor(Math.random()*color.length)];
}