import React from "react";
import "../../styles/card.css";

export const Card = (props) => {

    function agregar(nombre) {
        if (!props.favoritos.includes(nombre)) {
            props.function([...props.favoritos, nombre])
        }
    }

    return (
        <div className="cardBox m-2 border border-success" >
            <img width={400} height={200} src="https://img.freepik.com/foto-gratis/fondo-gris-pintado_53876-94041.jpg" />
            <div className="card-body">
                <h5 className="card-tittle">{props.nombre}</h5>
                {props.description}
                <button onClick={() => { }} type="button" class="btn btn-outline-primary">Learn more!</button>
                <button onClick={() => { agregar(props.nombre) }} className="like border btn btn-outline-warning border-warning far fa-heart"> </button>
            </div>
        </div>
    )
};