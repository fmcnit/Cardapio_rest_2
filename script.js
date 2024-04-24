$(document).ready(function(){
    $("#mobile_btn").on("click", function(){
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x');
    })

    const sections = $('section')
    const navItems = $('li.nav-item')
    console.log(sections)

    $(window).on("scroll", function(){
        
        const header = $('header')
        const scrollPosition = $(window).scrollTop - header.outerHeight()
        
        let activeSectionIndex = 0

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');

        }else{
            header.css("box-shadow", "rgba(0, 0, 0, 0.2) 0px 0px 9px 6px");
        }

        sections.each(function(i){
            const section = $(this)
            const sectionTop = section.offset().top - 200
            const sectionBottom = sectionTop + section.outerHeight()

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i
                
                return false
            }
        
        })
        $(navItems[activeSectionIndex]).addClass('active')

        
    
    })
    
    ScrollReveal().reveal("#cta", {
        origin:'left',
        duration: 3000,
        distance: '20%'

    });

    ScrollReveal().reveal(".dish", {
      origin: "left",
      duration: 2000,
      distance: "60%",
    });
})

