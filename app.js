const submitBtn = document.querySelector('.btn');
const ratingItems = document.querySelectorAll('.rating')
const ratingResult = document.getElementById('rating-result');
const cards = document.querySelectorAll('.card');


submitBtn.addEventListener('click', () => {
    let ratingScore = 0;
   
    // search a checked item. if found, assign its value to variable ratingScore
    for (const ratingItem of ratingItems.values()) { 
        if (ratingItem.checked &&
            ratingItem.value >= 1 &&
            ratingItem.value <= 5 ) {

            ratingScore = ratingItem.value;

            /**
            * only one rating item can be selected at a time.
            * no need to pursuie the loop if an item is found;
            */
            break;
        }
    }

    if (ratingScore) {

        ratingResult.textContent = `You selected ${ratingScore} out of 5`;
        
        for (const card of cards.values()) { 
            card.classList.toggle("is-hidden");
        }
    } 
})