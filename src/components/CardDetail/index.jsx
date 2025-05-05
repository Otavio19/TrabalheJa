import { IoLocationOutline } from "react-icons/io5";
import './style.css'

import { Grid2 } from "@mui/material";

const CardDetail = ({cardSize, title}) => {
    return (
            <Grid2 size={cardSize} className="cardDetailBox">
                <h2><IoLocationOutline /> {title}</h2>
                <p>
                    Sorocaba-SP
                </p>
            </Grid2>
    )
}

export default CardDetail