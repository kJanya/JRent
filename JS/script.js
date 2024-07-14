let nav = document.getElementById('nav');
let items = document.getElementById('items');
let loader = document.getElementById('loader');
let more = document.getElementById('more');
let body = document.getElementById('body');
let lost = document.getElementById('lost');

let showhide = () => {
    nav.classList.toggle('activeNav');
}

more.onclick = () => {
    items.style.display = 'flex';
    more.style.display = 'none';
}

window.onload = () => {
    loader.style.display = 'none';
}

window.addEventListener('offline', () => {
    lost.style.display = 'flex';
    body.style.overflow = 'hidden';
});

window.addEventListener('online', () => {
    alert("Good! You Are Online" +"\n"+"\tClick on OK Button then you Enter the Website");
    lost.style.display = 'none';
    body.style.overflow = 'auto';
});