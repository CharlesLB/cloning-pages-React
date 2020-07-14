import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Charles Braga"
                        date="25/07/2020"
                        content="Lorem Ipsum dolor sit amet, consectetur adipiscing el"
                    />
                ))}

                <ChannelMessage
                    author="Gabriella Carvalho"
                    date="26/07/2020"
                    content={
                        <>
                            <Mention>@Charles Braga</Mention>, Lorem Ipsum dolor
                            sit amet, consectetur adipis
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversarem #programming" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
