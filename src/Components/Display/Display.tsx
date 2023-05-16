import React, { useState, useEffect, FormEvent } from "react";
interface Props {
    key: number;
    valore: string|number;
}

const Display= (props:Props): JSX.Element => {
    const [state, setState] = useState<string>("")

    function gestisciClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        alert("ok")
    }
    return (
        <>
            <div className="w-[25rem] container mx-auto">
                <div className="bg-slate-950 h-20  rounded-ss-2xl rounded-se-2xl text-white text-right px-2 text-6xl overflow-y-hidden overflow-x-auto shadow border-x-4 border-x-zinc-500 border-t-4 border-t-zinc-500">{props.valore}</div>
            </div>  
        </>

    )
}

export default Display

