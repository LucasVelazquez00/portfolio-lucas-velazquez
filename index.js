
let clickNav = document.querySelectorAll('.click-nav')

console.log(clickNav);


clickNav.forEach(click => {
    click.addEventListener('click', ()=>{
        click.classList.toggle('hide')
        let hide = document.querySelectorAll('.hide');

        hide.forEach(element=>{
            element.classList.toggle('show')
        })
        
    })
});

