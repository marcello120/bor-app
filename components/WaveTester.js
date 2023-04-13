import React, { useState } from 'react'
import Wave from 'react-wavify'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const WaveTester = () => {


    const [height, setHeight] = useState(100);
    const [amplitude, setAmplitude] = useState(45);
    const [speed, setSpeed] = useState(0.5);
    const [points, setPoints] = useState(3);
    const [divHeight, setDivHeight] = useState(35);

  return (
    <>
    <div className='wavecontainer'>
        <Wave style={{ height: `${divHeight}vh` }}
          fill='#690a00'
          paused={false}
          options={{
            height: height,
            amplitude: amplitude,
            speed: speed,
            points: points
          }} />
      </div>

      {/* ------------------------------------------------------------------- */}
      <h2 className='cliptext'>
        Height
      </h2>
      <Form>
        <Form.Group as={Row}>
          <Col xs="9">
            <Form.Range
              value={height}
              onChange={e => setHeight(Number(e.target.value))}
            />
          </Col>
          <Col xs="3">
            <Form.Control value={height} onChange={e => setHeight(Number(e.target.value))} />
          </Col>
        </Form.Group>
      </Form>

      {/* ------------------------------------------------------------------- */}
      <h2>
        amplitude
      </h2>
      <Form>
        <Form.Group as={Row}>
          <Col xs="9">
            <Form.Range
              value={amplitude}
              onChange={e => setAmplitude(Number(e.target.value))}
            />
          </Col>
          <Col xs="3">
            <Form.Control value={amplitude} onChange={e => setAmplitude(Number(e.target.value))} />
          </Col>
        </Form.Group>
      </Form>



      {/* ------------------------------------------------------------------- */}
      <h2>
        speed
      </h2>
      <Form>
        <Form.Group as={Row}>
          <Col xs="9">
            <Form.Range
              value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              step={0.1}
              min={0.1}
              max={1}
            />
          </Col>
          <Col xs="3">
            <Form.Control value={speed} onChange={e => setSpeed(Number(e.target.value))} />
          </Col>
        </Form.Group>
      </Form>


      {/* ------------------------------------------------------------------- */}
      <h2>
        points
      </h2>
      <Form>
        <Form.Group as={Row}>
          <Col xs="9">
            <Form.Range
              value={points}
              onChange={e => setPoints(Number(e.target.value))}
              min={1}
              max={20}
            />
          </Col>
          <Col xs="3">
            <Form.Control value={points} onChange={e => setPoints(Number(e.target.value))} />
          </Col>
        </Form.Group>
      </Form>

      {/* ------------------------------------------------------------------- */}
      <h2>
        DivHeight
      </h2>
      <Form>
        <Form.Group as={Row}>
          <Col xs="9">
            <Form.Range
              value={divHeight}
              onChange={e => setDivHeight(Number(e.target.value))}
              min={0}
              max={120}
            />
          </Col>
          <Col xs="3">
            <Form.Control value={divHeight} onChange={e => setDivHeight(Number(e.target.value))} />
          </Col>
        </Form.Group>
      </Form>
      </>
  )
}

export default WaveTester