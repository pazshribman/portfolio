$('.paz').on('mouseover',function(){

    $('.paz-img').show()
    
    }
    
    )
    
    $('.paz').on('mouseout',function(){
    
    $('.paz-img').hide()
    
    }
   
    )

const dvd = document.querySelector('.dvd');

dvd.addEventListener('mouseover', () => {
    dvd.classList.add('dvd-animation');
})



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});