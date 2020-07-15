import React from "react";
import { MdAdd } from "react-icons/md";

import { Container } from "./styles";

function List() {
    return (
        <Container>
            <header>
                <h2>Tarefas</h2>
                <button type="button">
                    <MdAdd size={24} color="#fff" />
                </button>
            </header>
        </Container>
    );
}

export default List;
