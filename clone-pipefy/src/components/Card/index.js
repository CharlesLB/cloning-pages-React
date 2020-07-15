import React from "react";

import { Container, Label } from "./styles";

function Card() {
    return (
        <Container>
            <header>
                <Label color="#7159c1"/>
            </header>
            <p>Fazer a migração completa para o servidor</p>
            <img src="https://api.adorable.io/avatars/81/anio.png" alt=""/>
        </Container>
    );
}

export default Card;
