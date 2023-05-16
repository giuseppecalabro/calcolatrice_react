import React, { useState, useEffect, FormEvent } from "react";
import Display from "../Display/Display";
import Tastiera from "../Tastiera/Tastiera";
interface Props {
    key: number;
    valore: string;
}

const Calcolatrice = (): JSX.Element => {
    const [risultato, setRisultato] = useState<string|number>("0")

      useEffect(() => {
        setRisultato(risultato)
    }, [risultato]);

    function gestisciClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        alert("ok")
    }
    return (
        <>
            <Display key={1} valore={risultato}/>
            <Tastiera key={2} setRisultato={setRisultato}/>
        </>
    )
}

export default Calcolatrice

