import React, {MouseEventHandler } from "react";
interface Props {
    key: number;
    gestisciOperatore:MouseEventHandler<HTMLButtonElement>
}

const Pulsanti= (props: Props): JSX.Element => {

    return (
        <>    
            <div className="grid gap-3 grid-cols-4 grid-rows-5 p-6">
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>AC</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>C</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" title="numero*percentuale/100" onClick={props.gestisciOperatore}>%</button>
                    <button className="bg-orange-500 hoverButtonOrange rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>/</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>7</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>8</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>9</button>
                    <button className="bg-orange-500 hoverButtonOrange rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>x</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>4</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>5</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>6</button>
                    <button className="bg-orange-500 hoverButtonOrange rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>-</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>1</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>2</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>3</button>
                    <button className="bg-orange-500 hoverButtonOrange rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>+</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full col-span-2 text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>0</button>
                    <button className="bg-gray-500 hoverButtonGray rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>,</button>
                    <button className="bg-orange-500 hoverButtonOrange rounded-full text-white font-bold text-xl h-20" onClick={props.gestisciOperatore}>=</button>
                </div>
        </>

    )
}

export default Pulsanti



