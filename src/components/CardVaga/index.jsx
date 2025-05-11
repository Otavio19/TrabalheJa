import "./style.css"
import { TextField, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";

const CardVaga = ({btnText, titulo, faixa_salarial, localizacao, horario_trabalho, eventButton, link}) => {
    return (
        <Grid2 className="cardBox">
            <Grid2 container>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <h4>Titulo de Emprego</h4>
                    <h2>{titulo}</h2>
                </Grid2>
                <Grid2 size={{ xs: 3, md: 3 }}>
                    <h4>Localização</h4>
                    <h2>{localizacao}</h2>
                </Grid2>
                <Grid2 size={{ xs: 3, md: 3 }}>
                    <h4>Carga Horária</h4>
                    <h2>{horario_trabalho}</h2>
                </Grid2>
                <Grid2 size={{ xs: 4, md: 4 }}>
                    <h4>Salário</h4>
                    <h2 className="success">{faixa_salarial}R$</h2>
                </Grid2>
            </Grid2>
            <Grid2 container className="btnCard">
                <Button variant="contained" onClick={eventButton} component={Link} to={link}>{btnText}</Button>
            </Grid2>
        </Grid2>
    )
}

export default CardVaga;