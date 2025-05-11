import "./style.css"
import { TextField, Button, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";

const CardVaga = ({ btnText, titulo, faixa_salarial, localizacao, horario_trabalho, eventButton, link, sizeCard }) => {
    return (
        <Grid2 className="cardBox" size={sizeCard}>
            <Grid2 container>
                <Grid2 size={12} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}>
                    <h4>Titulo de Emprego</h4>
                    <h2>{titulo}</h2>
                </Grid2>
                <Grid2 size={12}>
                    <h4>Localização</h4>
                    <h2>{localizacao}</h2>
                </Grid2>
                {
                    sizeCard > 5 ? <Grid2 size={6}>
                    <h4>Salário</h4>
                    <h2 className="success">{faixa_salarial}R$</h2>
                </Grid2> : <Grid2 size={12} >
                    <h4>Salário</h4>
                    <h2 className="success">{faixa_salarial}R$</h2>
                </Grid2>
                }
                <Grid2 size={6} textAlign={'right'}>
                {
                    btnText ?
                        <Button variant="contained" onClick={eventButton} component={Link} to={link}>{btnText}</Button> : ''
                }
            </Grid2>
            </Grid2>
        </Grid2>
    )
}

export default CardVaga;