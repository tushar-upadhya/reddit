import styled from "@emotion/styled";
import { Card } from "@mui/material";
import React from "react";

const Meme = ({ meme }) => {
    return (
        <StyledCard>
            <img src={meme.data.url} alt="" style={{ height: 200 }} />
        </StyledCard>
    );
};

const StyledCard = styled(Card)({
    "&:hover": {
        transform: "scale(1.5)",
        borderRadius: 0,
        height: 200,
    },
});

export default Meme;
