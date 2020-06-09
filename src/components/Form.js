import React, { Fragment, useState } from 'react';
import { calculateTotal } from '../helpers';

const Form = (props) => {
    const { quantity, saveQuantity, term, saveTerm, saveTotal, saveLoading } = props;
    //definir state
    const [error, saveError] = useState(false);

    const calculateLoan = event => {
        event.preventDefault();
        //validar
        if (quantity === 0 || term === '') {
            saveError(true);
            return;
        }
        saveError(false);


        //habilitar el spinner
        saveLoading(true);

        //realizar cotizacion
        setTimeout(() => {

            const total = calculateTotal(quantity, term);

            //una vez calculado guardar total
            saveTotal(total);

            //deshabilitar el spinner
            saveLoading(false);
        }, 3000);

    }


    return (
        <Fragment>
            <form onSubmit={calculateLoan}>

                <div className="row">
                    <div>
                        <label>Loan amount</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Example: 3000"
                            onChange={event => saveQuantity(parseInt(event.target.value))}
                        />
                    </div>
                    <div>
                        <label>Term to pay</label>
                        <select
                            className="u-full-width"
                            onChange={event => saveTerm(parseInt(event.target.value))}
                        >
                            <option value="">Select</option>
                            <option value="3">3 months</option>
                            <option value="6">6 months</option>
                            <option value="12">12 months</option>
                            <option value="24">24 months</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calculate"
                            className="button-primary u-full-width"

                        />
                    </div>
                </div>
            </form>
            {(error) ? <p className="error">All fields are required</p> : null}

        </Fragment>
    );
}

export default Form;