import './style.css'

import { Grid2 } from "@mui/material";

const CardDetail = ({icon, cardSize, title, content }) => {
    console.log("Content: ", content)
    return (
        <Grid2 size={cardSize} className="cardDetailBox">
            <h2>{icon} {title}</h2>
            <p>
                { content }
            </p>
        </Grid2>
    )
}

export default CardDetail