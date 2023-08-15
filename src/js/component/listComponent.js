import React, { useEffect, useState } from "react";
import { Card } from "./card"

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    overflow: 'auto'
};

export const ListComponent = (props) => {
    const [listaPersonajes, setListaPersonajes] = useState([])
    const [listaPlanetas, setListaPlanetas] = useState([])
    const [listaNaves, setListaNaves] = useState([])

    useEffect(() => {
        const fetchPersonajes = async () => {
            const data = await (
                await fetch('https://swapi.dev/api/people/', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })).json();
            setListaPersonajes(data.results);
        };

        const fetchPlanetas = async () => {
            const data = await (
                await fetch('https://swapi.dev/api/planets/', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })).json();
            setListaPlanetas(data.results);
        };

        const fetchNaves = async () => {
            const data = await (
                await fetch('https://swapi.dev/api/starships/', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })).json();
            setListaNaves(data.results);
        };

        fetchPersonajes();
        fetchPlanetas();
        fetchNaves();
    }, [])

    return (
        <><h1 class="text-danger">Characters</h1>
            <div style={divStyle}>
                {listaPersonajes.map(personaje => {
                    return <Card
                        function={props.function}
                        favoritos={props.favoritos}
                        nombre={personaje.name}
                        description={
                            <p className="info">Gender: {personaje.gender} <br />
                                Hair Color: {personaje.hair_color} <br />
                                Eye-Color: {personaje.eye_color}</p>
                        }
                    />;
                })}
            </div>

            <br />

            <h1 class="text-danger">Planets</h1>
            <div style={divStyle}>
                {listaPlanetas.map(planetas => {
                    return <Card
                        function={props.function}
                        favoritos={props.favoritos}
                        nombre={planetas.name}
                        description={
                            <p className="info">Population: {planetas.population} <br />
                                Terrain: {planetas.terrain}</p>
                        }
                    />;
                })}
            </div>

            <br />

            <h1 class="text-danger">Starships</h1>
            <div style={divStyle}>
                {listaNaves.map(naves => {
                    return <Card
                        function={props.function}
                        favoritos={props.favoritos}
                        nombre={naves.name}
                        description={
                            <p className="info">Model: {naves.model} <br />
                                Passengers: {naves.passengers}</p>
                        }
                    />;
                })}
            </div>
        </>)
};