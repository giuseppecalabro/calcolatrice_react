import React, { useState} from "react";
import Pulsanti from "../Pulsanti/Pulsanti";
import { Calcolatore } from "./TastieraBL";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


interface Props {
    key: number;
    setRisultato: React.Dispatch<React.SetStateAction<string|number>>
}

const Tastiera= (props:Props): JSX.Element => {
    const [stringaOperazione, setStringaOperazione] = useState<string>("")

    function gestisciOperatore(event: React.MouseEvent<HTMLButtonElement>) {
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
            <div className="md:w-[25rem]  bg-slate-800 container mx-auto rounded-ee-2xl rounded-es-2xl shadow-white border-4 border-x-zinc-500 border-b-4 border-b-zinc-500">
                <Pulsanti key={3} gestisciOperatore={gestisciOperatore}/>
            </div>
            <ToastContainer className={"mt-[10.2rem]"} theme="dark" pauseOnHover={false} draggable  autoClose={1500}/>
        </>
    )
}

export default Tastiera

