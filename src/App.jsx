
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';


import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function App() {

  let initialValue = 1;
  const [counter, updateCounter] = useState(Number(initialValue));
  const [text, updateText] = useState('Counter value is min 0 & max 20.');

  function handleIncrement() {
    let decrement = document.getElementById("decrement");
    let increment = document.getElementById("increment");
    updateCounter(prev => {
      prev += 1;
      if (counter < 1) {
        decrement.removeAttribute('disabled')
        document.getElementById('any').setAttribute('class', 'py-3 text-success bold');
        updateText('Counter value is min 0 & max 20.');
      }
      if (counter > 18) {
        increment.setAttribute('disabled', 'disabled');
        document.getElementById('any').setAttribute('class', 'py-3 text-danger bold');
        updateText('Counter value is max 20.');
      }
      return prev;
    })

  }


  function handleDecrement() {
    let decrement = document.getElementById("decrement");
    let increment = document.getElementById("increment");
    updateCounter(prev => {
      prev -= 1;
      if (counter < 2) {
        document.getElementById('any').setAttribute('class', 'py-3 text-danger bold');
        decrement.setAttribute('disabled', 'disabled');
        updateText('Counter value is min 0.');
      }
      if (counter < 21 && counter > 1) {
        document.getElementById('any').setAttribute('class', 'py-3 text-success bold');
        increment.removeAttribute('disabled');
        updateText('Counter value is min 0 & max 20.');
      }
      return prev;
    })
  }



  function handleReset() {
    let decrement = document.getElementById("decrement");
    let increment = document.getElementById("increment");
    decrement.removeAttribute('disabled')
    increment.removeAttribute('disabled');
    updateCounter(prev => {
      prev = initialValue;
      document.getElementById('any').setAttribute('class', 'py-3 text-success bold');
      updateText('Counter value is min 0 & max 20.');
      return prev;
    })
  }

  


  return (
    <>
      <Row>
        <Col className='col-sm-12 col-md-6 col-lg-6 m-auto mt-5'>
          <Card>
            <Card.Header className='bg-secondary text-white'>
              <h1><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" /> Counter</h1>
            </Card.Header>
            <Card.Body className=' text-center'>
              <Button type='button' onClick={handleDecrement} id="decrement" variant="secondary"><FontAwesomeIcon icon="fa-solid fa-minus" /></Button>
              <span className='px-4'>{counter}</span>
              <Button type='button' onClick={handleIncrement} id="increment" variant="secondary"><FontAwesomeIcon icon="fa-solid fa-plus" /></Button>
              <div className="pt-2">
                <Button type="reset" onClick={handleReset} variant="danger" className="px-5">Reset</Button>
              </div>
              <p id='any' className='py-3 text-success bold '>{text}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

library.add(far);
library.add(fas);

export default App;
