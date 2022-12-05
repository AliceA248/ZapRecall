import React from "react";
import { Bottom } from "./styled"


export default function Footer() {
    return (
        <Bottom>
            <Concluidos/>
        </Bottom>
    )
}

function Concluidos() {
    return (

        <div className="Bottom">
            <p>
                0/4 Concluídos
            </p>
        </div>
    )
}
