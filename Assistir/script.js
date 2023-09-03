class Accordion {
    constructor(accordionListQuestions) {
        this.accordionListQuestions = document.querySelectorAll(accordionListQuestions);
        this.activeItemClass = "active";
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeItemClass);
        
    }

    addAccordionEvent() {
        this.accordionListQuestions.forEach((question) => {
            question.addEventListener("click", () => this.toggleAccordion
            (question));
        });
    }

    init() {
        if(this.accordionListQuestions.length) {
            this.addAccordionEvent();
        }
        return this;
    }
}

const accordion = new Accordion(".accordion") ;
accordion.init();


let minute = 5;
let second = 0;
let millisecond = 1000;

function timer() {
    if ((millisecond -= 10) === 0) {
        second--;

        if (minute > 0 || second > 0)
            millisecond = 1000;
    }

    if (second === 0) {
        if (minute > 0) {
            minute--;
            second = 59;
        }
    }

    document.getElementById("timer").innerHTML = (minute < 10 ? `0${minute}` : minute) + ":" + (second < 10 ? `0${second}` : second) + ":" + (millisecond < 10 ? `0${millisecond}` : millisecond.toString().substring(0, 2));
    
}

let cron;

cron = setInterval(() => {
    if (minute === 0 && second === 0 && millisecond === 0) {
        clearInterval(cron);
    } else {
        timer();
    }
}, 10);