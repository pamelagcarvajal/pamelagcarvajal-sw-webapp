import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/main.css";
import { useLocation } from "react-router-dom";

export const Details = () => {
    const { state } = useLocation();

    function showDescription() {

        let result = '<div class="row">'
        let result2 = '<div class="row">'
        for (let i = 0; i < state.description.length - 1; i += 2) {
            if (state.description[i] != undefined) {
                result += `<div class="col-sm">${state.description[i]}</div>`
                result2 += `<div class="col-sm">${state.description[i + 1]}</div>`
            }
        }
        result += '</div>'
        result2 += '</div>'

        return <div dangerouslySetInnerHTML={{ __html: result + result2 }} />
    }

    return (
        <div className="m-2">
            <div className="container distance">
                <div className="row">
                    <div className="col">
                        <img width={450} height={300} src="https://img.freepik.com/foto-gratis/fondo-gris-pintado_53876-94041.jpg" />
                    </div>
                    <div className="col text-center">
                        <div className="row">
                            <h1>{state.nombre}</h1>
                        </div>
                        <div className="row w-100">
                            Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium
                            doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quip voluptas sit
                            aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores os qui
                            ratione voluptatem sequi
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr text-danger" />
            <div>
                <div class="container text-center text-danger">
                    {showDescription()}
                </div>
            </div>
        </div>
    )
};