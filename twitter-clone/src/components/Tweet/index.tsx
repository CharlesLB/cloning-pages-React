import React from 'react';

import {
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Friend</strong>
                        <span>@friend</span>
                        <Dot />
                        <time>1 de jan</time>
                    </Header>

                    <Description>
                        Lorem ipsum dolor sit amet, consect
                    </Description>
                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />1
                        </Status>
                        <Status>
                            <RetweetIcon />1
                        </Status>
                        <Status>
                            <LikeIcon />3
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
