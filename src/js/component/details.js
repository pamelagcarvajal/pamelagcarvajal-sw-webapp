import React from "react";
import "../../styles/main.css";
import { useLocation } from "react-router-dom";

export const Details = () => {
    const { state } = useLocation();
    return <p className="distance">{state.nombre}</p>;
};