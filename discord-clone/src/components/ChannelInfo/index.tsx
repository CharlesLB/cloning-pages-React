import React from "react";

import {
    Container,
    HashtagIcon,
    Title,
    Separator,
    Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />
            <Title>programming</Title>
            
            <Separator />

            <Description>Dúvidas de programação</Description>
        </Container>
    );
};

export default ChannelInfo;
