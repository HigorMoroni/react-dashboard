import React from "react";

import "./styles.scss";

const Cards = () => {
    return (
        <>
            <div className="row">
                <div className="card">
                <h3>Total de clientes</h3>
                <span>15</span>
                </div>
                <div className="card">
                <h3>Clientes inadimplentes</h3>
                <span>5</span>
                </div>
            </div>
            <div className="row">
                <div className="card">
                <h3>Clientes adimplentes</h3>
                <span>10</span>
                </div>
                <div className="card">
                <h3>Total arrecadado</h3>
                <span>R$ 4.162,26</span>
                </div>
            </div>
        </>
    );
}

export default Cards;