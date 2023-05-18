import React, { useState, useEffect, FormEvent, Dispatch, SetStateAction } from "react";
import Pulsante from "../Pulsanti/Pulsanti";
import { Calcolatore } from "./TastieraBL";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


interface Props {
    key: number;
    setRisultato: React.Dispatch<React.SetStateAction<string|number>>
}

const Tastiera= (props:Props): JSX.Element => {
    const [stringaOperazione, setStringaOperazione] = useState<string>("")

    // useEffect(() => {
    //     console.log(stringa)
    // }, [stringa]);

    function gestisciClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        props.setRisultato("")
        setStringaOperazione("")

        if(event.currentTarget.innerHTML === "AC"){
            props.setRisultato("")
            setStringaOperazione("")
        }else if(event.currentTarget.innerHTML === "="){
            try{
                const result:string = String(Calcolatore.calcola(stringaOperazione))
                props.setRisultato((result!))
                setStringaOperazione((String(result!)))
            }catch(error){
                if(error instanceof Error){
                    const errore = (error as Error).message
                    props.setRisultato("")
                    setStringaOperazione("")
                    toast.error(errore, {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            }
        }else if(event.currentTarget.innerHTML === "C"){
            const nuovaStringa = stringaOperazione.substring(0, stringaOperazione.length-1)
            props.setRisultato(nuovaStringa)
            setStringaOperazione(nuovaStringa)
        }
        else{
            props.setRisultato("")
            const nuovoValore = stringaOperazione + event.currentTarget.innerHTML;
            setStringaOperazione(nuovoValore)
            props.setRisultato(nuovoValore)
            
        }
        
    }
    return (    
        <>
            <div className="w-[25rem] bg-slate-800 container mx-auto rounded-ee-2xl rounded-es-2xl shadow-white border-4 border-x-zinc-500 border-b-4 border-b-zinc-500">
                <div className="grid gap-3 grid-cols-4 grid-rows-5 p-6">
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>AC</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>C</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" title="numero*percentuale/100" onClick={gestisciClick}>%</button>
                    <button className="bg-orange-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>/</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>7</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>8</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>9</button>
                    <button className="bg-orange-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>x</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>4</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>5</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>6</button>
                    <button className="bg-orange-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>-</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>1</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>2</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>3</button>
                    <button className="bg-orange-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>+</button>
                    <button className="bg-gray-500 rounded-full col-span-2 text-white font-bold text-xl h-20" onClick={gestisciClick}>0</button>
                    <button className="bg-gray-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>,</button>
                    <button className="bg-orange-500 rounded-full text-white font-bold text-xl h-20" onClick={gestisciClick}>=</button>

                </div>
            </div>
            <ToastContainer theme="dark" autoClose={1500}/>
        </>
    )
}

export default Tastiera

