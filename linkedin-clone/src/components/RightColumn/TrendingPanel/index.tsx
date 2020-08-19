import React from "react";

import Panel from "../../Panel";

import { Container } from "./styles";

const TrendingPanel: React.FC = () => {
    return (
        <Container>
            <Panel>
                <span className="title">Assuntos mais discutidos</span>

                <ul>
                    <li>
                        <span className="bullet" />
                        <span className="news">
                            <span className="head">UX</span>
                            <span className="subtext">
                                há 1 d • 123 leitores
                            </span>
                        </span>
                    </li>
                    <li>
                        <span className="bullet" />
                        <span className="news">
                            <span className="head">NextJS</span>
                            <span className="subtext">
                                há 1 d • 316 leitores
                            </span>
                        </span>
                    </li>
                    <li>
                        <span className="bullet" />
                        <span className="news">
                            <span className="head">PHP 8.0</span>
                            <span className="subtext">
                                há 2 d • 112 leitores
                            </span>
                        </span>
                    </li>
                    <li>
                        <span className="bullet" />
                        <span className="news">
                            <span className="head">Laravel no server</span>
                            <span className="subtext">
                                há 2 d • 989 leitores
                            </span>
                        </span>
                    </li>
                    <li>
                        <span className="bullet" />
                        <span className="news">
                            <span className="head">WordPress</span>
                            <span className="subtext">
                                há 3 d • 501 leitores
                            </span>
                        </span>
                    </li>
                </ul>
            </Panel>
        </Container>
    );
};

export default TrendingPanel;
