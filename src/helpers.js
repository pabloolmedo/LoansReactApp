export function calculateTotal(quantity, term) {
    let totalAmount;
    if (quantity <= 1000) {
        totalAmount = quantity * .25;
    } else if (quantity > 1000 && quantity <= 50000) {
        totalAmount = quantity * .20;
    } else if (quantity > 5000 && quantity <= 10000) {
        totalAmount = quantity * .15;
    } else {
        totalAmount = quantity * .10;
    }
    //calcular el plazo
    let totalTerm = 0;

    switch (term) {
        case 3:
            totalTerm = quantity * .05;
            break;
        case 6:
            totalTerm = quantity * .10;
            break;
        case 12:
            totalTerm = quantity * .15;
            break;
        case 24:
            totalTerm = quantity * .20;
            break;
        default:
            break;
    }


    return totalTerm + totalAmount + quantity;

}