import React, { useState, useEffect } from "react";
import Display from "../Display/Display";
import Tastiera from "../Tastiera/Tastiera";


const Calcolatrice = (): JSX.Element => {
    const [risultato, setRisultato] = useState<string|number>("0")

      useEffect(() => {
        setRisultato(risultato)
    }, [risultato]);

    return (
        <>
            <Display key={1} valore={risultato}/>
            <Tastiera key={2} setRisultato={setRisultato}/>
        </>
    )
}

export default Calcolatrice

