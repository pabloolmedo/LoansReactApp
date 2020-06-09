import React from 'react';

const Result = ({ total, term, quantity }) => {
    return (

        <div className="u-full-width resultado">
            <h2>Summary</h2>
            <p>The quantity requested is: ${quantity}</p>
            <p>To pay in: {term} months</p>
            <p>Your monthly payment is: ${(total / term).toFixed(2)}</p>
            <p>The total amount is: ${(total).toFixed(2)}</p>

        </div>
    );
}

export default Result;