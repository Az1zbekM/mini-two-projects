 // Subscribe btn
        function subscribe() {
            const buttonElem = document.querySelector('.btny');

            if (buttonElem.innerText === 'Subscribe') {
                buttonElem.innerHTML = 'Subscribed';
                buttonElem.classList.add('user-subscribed');
            }
             else{
                buttonElem.innerHTML = 'Subscribe';
                // buttonElem.classList.add('user-conceled')
                buttonElem.classList.remove('user-subscribed');
            }
        }

        // Other functions
        function handleCostKeydown(event){
          console.log(event.key)
          if (event.key === 'Enter') {
          calculateTotal();
            }
        };

        function calculateTotal(){
          let inputElement = document.querySelector('.js-cost-input');
        
        let cost = Number(inputElement.value);
        
        if (cost <= 40){
           cost = cost + 10;
        } 
        // else if(cost = '$NaN'){
        //     cost = '-> Please, write in numbers! (example: 20).';
        // } 
        else{
            cost = cost;
        }
        
        document.querySelector('.js-total-cost').innerHTML = `Total cost: $${cost} ` ; 

    } 
    