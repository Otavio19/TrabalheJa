import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDetail from "../../components/CardDetail";

import { Grid2 } from "@mui/material";

const Vaga = () => {

    /*
    {
    "id": "2ed80d25-6373-40ff-9bc9-19bdb21fc751",
    "titulo": "Vaga empresa Otávio",
    "resumo": "reusasuha",
    "habilidades_obrigatorias": "uas",
    "habilidades_desejaveis": "auhs",
    "beneficios": "asa",
    "localizacao": "s",
    "faixa_salarial": "as",
    "horario_trabalho": "s",
    "instrucoes": "as",
    "data_limite": "2025-02-15T03:00:00.000Z",
    "data_criacao": "2025-03-10T22:57:37.083Z",
    "empresa_id": "f1e3bbaf-20fb-4ec2-8076-e02773be5a71"
}
    */
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:3000/api/vaga/2ed80d25-6373-40ff-9bc9-19bdb21fc751")
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
            })
    }, [id])

    return (
        <>
            <Grid2 container>
                <CardDetail cardSize={12} title="" />
            </Grid2>
            <Grid2 container spacing={2}>
                <CardDetail cardSize={4} title="Localização" />
                <CardDetail cardSize={4} title="Faixa Salarial" />
                <CardDetail cardSize={4} title="Horário" />
            </Grid2>
            <Grid2 container >
                <CardDetail cardSize={12} title="Resumo da Vaga" />
                <CardDetail cardSize={12} title="Habilidades Obrigatórias" />
                <CardDetail cardSize={12} title="Habilidades Desejáveis" />
                <CardDetail cardSize={12} title="Benefícios" />
                <CardDetail cardSize={12} title="Instruções" />
            </Grid2>
        </>


    )
}

export default Vaga