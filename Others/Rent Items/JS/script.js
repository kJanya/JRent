let nav = document.getElementById('nav');
let loader = document.getElementById('loader');
let body = document.getElementById('body');
let lost = document.getElementById('lost');
let m = document.getElementById('m');
let more1 = document.getElementById('more1');

let showhide = () => {
    nav.classList.toggle('activeNav');
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

m.addEventListener('click', () => {
    more1.style.display = 'flex';
    m.style.display='none';
});


let btn = document.querySelectorAll('.btn');
let pic = document.querySelectorAll('.pic');

for(let i=0; i<btn.length; i++)
{
    btn[i].addEventListener('click', () => {
        for(let j=0; j<btn.length; j++)
        {
            btn[j].classList.remove('active');
        }
        btn[i].classList.add('active');

        let dataFilter = btn[i].getAttribute('data-filter');

        for(let k=0; k<pic.length; k++)
        {
            pic[k].classList.remove('active');
            pic[k].classList.add('hide');

            if(pic[k].getAttribute('data-item') == dataFilter || dataFilter == "all")
            {
                pic[k].classList.remove('hide');
                pic[k].classList.add('active');
            }
        }
    });
}