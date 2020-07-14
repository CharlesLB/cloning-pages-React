import React from "react";
import ChannelButton from "../ChannelButton";
import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="programming" />
            <ChannelButton channelName="games" />
            <ChannelButton channelName="grupo do trabalho" />
        </Container>
    );
};

export default ChannelList;
