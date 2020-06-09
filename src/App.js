import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Message';
import Result from './components/Result';
import Spinner from './components/Spinner';


function App() {

  //definir el state
  const [quantity, saveQuantity] = useState(0);
  const [term, saveTerm] = useState('');
  const [total, saveTotal] = useState(0);
  const [loading, saveLoading] = useState(false);

  let component;
  if (loading) {
    component = <Spinner />
  } else if (total === 0) {
    component = <Message />
  } else {
    component = <Result
      total={total}
      term={term}
      quantity={quantity}
    />
  }

  return (
    <Fragment>
      <Header
        title="Loan quote"
      />
      <div className="container">
        <Form
          quantity={quantity}
          saveQuantity={saveQuantity}
          term={term}
          saveTerm={saveTerm}
          saveTotal={saveTotal}
          saveLoading={saveLoading}
        />
        <div className="mensajes">
          {component}
        </div>

      </div>
    </Fragment>
  );
}

export default App;
