$(readyNow);
const budget = 25000;

let purchases = [];

function addPurchase() {
    console.log('in addPurchase');
    let newPurchase = {
        name: $('#item').val(),
        price: $('#cost').val()
    }

    purchases.push(newPurchase);
    $('#item').val('');
    $('#cost').val('');
    console.log(newPurchase);
    //get user inputs
    //create new object
    //push new information into the new object
}

function readyNow() {
    console.log('jQuery');
    //target total budget in DOM, fill with our budget amt
    $('#budgetOut').empty().append(budget);

    //handle click event
    $('#add-purchase').on('click', addPurchase);
}

