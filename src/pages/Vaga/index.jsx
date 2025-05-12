import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDetail from "../../components/CardDetail";

//icons
import { FaDollarSign } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { PiGift } from "react-icons/pi";

import { Grid2 } from "@mui/material";

const Vaga = () => {
    const { id } = useParams();

    const [vaga, setVaga] = useState({})

    const notFound = "Não Informado."

    useEffect(() => {
        axios.get(`https://trabalhe-ja-api.vercel.app/api/vaga/${id}`)
            .then(function (response) {
                console.log(response.data);
                setVaga(response.data)
            })
            .catch(function (error) {
                console.error(error);
            })
    }, [id])

    return (
        <>
            <Grid2 container>
                <Grid2 size={12} className="cardDataLimite">
                    <h2>Data Limite Para Inscrição: </h2>
                    <p>
                        12/02
                    </p>
                </Grid2>
                <CardDetail cardSize={12} title="" content={<h1>{vaga.titulo}</h1> || notFound} />
            </Grid2>
            <Grid2 container spacing={2}>
                <CardDetail icon={<IoLocationOutline />} cardSize={4} title="Localização" content={vaga.localizacao || notFound} />
                <CardDetail icon={<FaDollarSign />} cardSize={4} title="Faixa Salarial" content={vaga.faixa_salarial || notFound} />
                <CardDetail icon={<MdOutlineAccessTime />} cardSize={4} title="Horário" content={vaga.horario_trabalho || notFound} />
            </Grid2>
            <Grid2 container spacing={2} >
                <CardDetail icon={<FiFileText />} cardSize={12} title="Resumo da Vaga" content={vaga.resumo || notFound} />
                <CardDetail icon={<FiBriefcase />} cardSize={6} title="Habilidades Obrigatórias" content={vaga.habilidades_obrigatorias || notFound} />
                <CardDetail icon={<BsStars />} cardSize={6} title="Habilidades Desejáveis" content={vaga.habilidades_desejaveis || notFound} />
                <CardDetail icon={<PiGift />} cardSize={12} title="Benefícios" content={vaga.beneficios || notFound} />
                <CardDetail cardSize={12} title="Instruções" content={vaga.instrucoes || notFound} />
            </Grid2>
        </>


    )
}

export default Vaga