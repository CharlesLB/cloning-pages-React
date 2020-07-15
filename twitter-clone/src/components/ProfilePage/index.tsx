import React from 'react';

import Feed from '../Feed';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Username</h1>
                <h2>@username</h2>

                <p>Lorem Ipsum dolor</p>

                <ul>
                    <li>
                        <LocationIcon />
                        Juiz de Fora, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 25 de Janeiro de 2002
                    </li>
                </ul>

                <Followage>
                    <span>
                        Seguindo <strong>54</strong>
                    </span>
                    <span>
                        <strong>15mi </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    );
};

export default ProfilePage;
