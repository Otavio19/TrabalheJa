import './style.css'
import axios from "axios";
import { useEffect, useState } from "react";

//Icons:
import { CiSearch } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import { LuBriefcase } from "react-icons/lu";
import { FiAward } from "react-icons/fi";

//components
import CardIndex from '../../components/CardIndex';
import { TextField, Button, Grid2 } from "@mui/material";
import CardVaga from "../../components/CardVaga";
import { Link } from 'react-router-dom';

const Index = () => {

    const [vagas, setVagas] = useState([])

    useEffect(() => {
        getVagas();
    }, []);

    const getVagas = () => {
        axios
            .get(`https://trabalhe-ja-api.vercel.app/api/vagas`)
            .then((response) => {
                setVagas(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar vagas:", error);
                setError("Erro ao carregar as vagas.");
            });
    };

    return (
        <>
            <div className="index-container">
                <div className="title-box">
                    <h1>Encontre Seu <span className="title-blue">Emprego dos Sonhos</span></h1>
                    <h3 className="subtitle">Conecte-se com milhares de empresas e oportunidades. Sua próxima carreira começa aqui.</h3>
                </div>
                <div className="search-box">
                    <input type="text" placeholder='Cargo palavras-chave ou Empresas..' className='input-box' />
                    <button className="button-box"> <CiSearch /> Buscar Vagas</button>
                </div>
                <div className="cards-box">
                    <CardIndex icon={<IoAnalytics />} title="Vagas em Alta" description="Descubra as posições mais procuradas em todas as áreas." />
                    <CardIndex icon={<LuBriefcase />} title="Trabalhos Remoto" description="Encontre oportunidades flexiveis em todo o mundo." />
                    <CardIndex icon={<FiAward />} title="Melhores Empresas" description="Trabalhe com empresas lideres em seu setor." />
                </div>

                <Grid2 container marginTop={10} marginBottom={10}>
                    <Grid2 size={6} marginBottom={2}>
                        <h2>Vagas Recentes</h2>
                    </Grid2>
                    <Grid2 size={6} textAlign={'right'}>
                        <Button variant='outlined' component={Link} to="/vagas">
                            Ver Mais
                        </Button>
                    </Grid2>

                    <Grid2 container spacing={3} size={12}>
                        {vagas.map((vaga) => (
                            <CardVaga sizeCard={4} key={vaga.id} titulo={vaga.titulo} localizacao={vaga.localizacao} horario_trabalho={vaga.horario_trabalho} faixa_salarial={vaga.faixa_salarial}
                             eventButton={''} link={''} />
                        ))}
                    </Grid2>
                </Grid2>
            </div>
        </>
    )
}

export default Index