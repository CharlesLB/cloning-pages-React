import React from "react";
import { useViewportScroll, useTransform, MotionValue } from "framer-motion";

import { Container } from "./styles";

const Header: React.FC = () => {
    const { scrollYProgress } = useViewportScroll();
    const headerY: MotionValue<string> = useTransform(
        scrollYProgress,
        [0.188, 0.198],
        ["0%", "-100%"]
    );

    return <Container style={{ top: `${headerY}` }} >
        Header
    </Container>;
};

export default Header;
