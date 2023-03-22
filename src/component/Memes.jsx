import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { data } from "../API";
import Meme from "./Meme";
const Memes = () => {
    const [meme, setMeme] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await data();
            setMeme(response.data.children);
        };
        getData();
    }, []);

    return (
        <Grid container margin={3}>
            {meme.map((meme) => (
                <Grid item xs={2}>
                    <Meme meme={meme} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Memes;
