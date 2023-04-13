import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Wave from 'react-wavify'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Typeahead } from 'react-bootstrap-typeahead';
import { wineCategories } from '@/data/categories';




const WaveForm = () => {

    const maxSteps = 6;

    const [height, setHeight] = useState(100);
    const [amplitude, setAmplitude] = useState(45);
    const [speed, setSpeed] = useState(0.5);
    const [points, setPoints] = useState(3);
    const [divHeight, setDivHeight] = useState(25);
    const [fill, setFill] = useState("#690a00");

    const [step, setStep] = useState(1)



    // COLOR

    const color = [
        { name: 'Vörös' },
        { name: 'Rozé' },
        { name: 'Fehér' }
    ];

    const [chosenColor, setchosenColor] = useState("Vörös");

    const chooseColor = (newColor) => {
        console.log(chosenColor)
        console.log(newColor)

        setchosenColor(newColor)

        if (newColor === "Vörös") {
            setFill("#690a00")
        }
        if (newColor === "Rozé") {
            setFill("#ff9999")
        }
        if (newColor === "Fehér") {
            setFill("#f0eebb")
        }

    }

    //Taste

    const taste = [
        { name: 'Édes' },
        { name: 'Félédes' },
        { name: 'Félszáraz' },
        { name: 'Száraz' }
    ];


    const [chosenTaste, setChosenTaste] = useState("Édes");

    //Category

    const categories = wineCategories;

    const [chosenCategory, setChosenCategory] = useState("")




    const [price, setPrice] = useState(0);

    //color -radio
    //taste -radio
    //kategoria - typeahead
    //price - slider
    //evjarat - 




    const nextStep = (value) => {
        let newStep = step + value;

        console.log(newStep)

        if (newStep < 1) {
            newStep = 1;
            //hide back
        }
        if (newStep > maxSteps) {
            newStep = maxSteps
            //hide next
        }
        setStep(newStep);
        setDivHeight(Number(25 + newStep * 15))
    }




    return (
        <div>

            <div className='wavecontainer'>
                <Wave
                    style={{ height: `${divHeight}vh`, transition: 'height 2.5s' }}
                    fill={fill}
                    paused={false}
                    options={{
                        height: height,
                        amplitude: amplitude,
                        speed: speed,
                        points: points
                    }} />
            </div>

            <div className='middleParent'>
                <div className='middleContainer'>


                    {(step === 1) &&
                        <ButtonGroup name={step}>
                            {color.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant='outline-secondary'
                                    name="radio"
                                    value={radio.name}
                                    checked={chosenColor === radio.name}
                                    onChange={(e) => chooseColor(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>

                    }

                    {(step === 2) &&
                        <ButtonGroup name={step}>
                            {taste.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant='outline-secondary'
                                    name="radio"
                                    value={radio.name}
                                    checked={chosenTaste === radio.name}
                                    onChange={(e) => setChosenTaste(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    }

                    {(step === 3) &&
                        <Typeahead
                            id="basic-typeahead-single"
                            labelKey="category"
                            onChange={setChosenCategory}
                            options={categories}
                            placeholder="Válaszon bor kategóriát"
                            selected={chosenCategory}
                        />
                    }

                    {(step === 4) &&
                        <>
                            Ár: {price} HUF
                            <Form.Range
                                value={price}
                                onChange={e => setPrice(e.currentTarget.value)}
                                step={100}
                                min={0}
                                max={10000}
                                tooltip='on'
                                variant='error'
                                />
                        </>

                    }





                    {(step === 5) &&
                        <img style={{ height: '500px' }} src={"https://borhalo.com/shop/image/cache/catalog/Mesz_Kadarka_Premium_17_0,75-572x800.png"} />
                    }

                    <br></br>
                    <br></br>


                    {step > 1 && <Button className='allbutton' variant="secondary" onClick={e => nextStep(-1)}>Vissza</Button>}
                    {step < maxSteps && <Button disabled=
                        {step === 3 && chosenCategory == ""}
                        variant="secondary" onClick={e => nextStep(1)}>Tovább</Button>}


                </div>
            </div>

        </div>
    )
}

export default WaveForm