import React, { useState, useEffect, FormEvent } from "react";
interface Props {
    key: number;
    valore: string;
    colspan?:boolean;
    operator?:boolean;
}

const Pulsante= (props: Props): JSX.Element => {
    // const [stringa, setStringa] = useState<string[]>([]);

    const array:string[] = []

    // useEffect(() => {
    //     setStringa(stringa + props.valore);
    //   }, [props.valore]);



    function gestisciClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        alert("ok")
        alert(props.valore)
        
        // setStringa((prevArray) => [...prevArray, props.valore])

        // console.log(stringa)
        
        array.push(props.valore)
        console.log(array)
    }
    return (
        <>    
            <button className={`${props.operator? "bg-orange-400" : "bg-gray-500"} rounded-full text-white font-bold text-xl h-20 ${props.colspan ? "col-span-2" : ""} `} onClick={gestisciClick}>{props.valore}</button>
        </>

    )
}

export default Pulsante



