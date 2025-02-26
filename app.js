document.addEventListener("DOMContentLoaded", function () {
    //  accordion JavaScript code 
    const accordion = document.getElementsByClassName('contentBx');
    for(i = 0; i < accordion.length; i++){
        accordion[i].addEventListener('click', function(){
            this.classList.toggle('active')
        })
    }

    // hambuger section

    const mobileBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');
    mobileBtn.addEventListener('click', function(){
        mobileBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
       
       
    })


    //price toggle section

    
    const toggleChecked = document.getElementById('toggle');
    const basicPlanChecked = document.getElementById('basic-plan');
    const standardPlanChecked =document.getElementById('standard-plan');
    const premimumPlanChecked = document.getElementById('premium-plan');
    const ultimatePlanChecked = document.getElementById('ultimate-plan');

    toggleChecked.addEventListener('change', () => {
        if (toggleChecked.checked) {
            basicPlanChecked.textContent = `4.99`
            standardPlanChecked.textContent = `6.99`
            premimumPlanChecked.textContent = `9.99`
            ultimatePlanChecked .textContent = `19.99`
        } else {
            basicPlanChecked.textContent = `59.88`
            standardPlanChecked.textContent = `83.88`
            premimumPlanChecked.textContent = `119.88`
            ultimatePlanChecked.textContent = `239.88`
        }
    })

    
});