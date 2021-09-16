const btn = document.querySelectorAll('.faq-toggle');

btn.forEach(button=>{
    button.addEventListener('click', ()=>{
        button.parentNode.classList.toggle('active');
    });
});