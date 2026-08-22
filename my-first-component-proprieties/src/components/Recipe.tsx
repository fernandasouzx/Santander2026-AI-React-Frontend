import type { PropsWithChildren } from "react";

interface Props{
    id: string;
    onClick?: () => void;
}

export function Recipe({id, children, onClick}: PropsWithChildren<Props>){
    function handleClick(){
        if(onClick){
            onClick();
        }
    }
    return(
        <div className="card" id={id}>
            {children} 
            <button onClick={handleClick} className="button">Ver receita</button>
        </div>
    );
}