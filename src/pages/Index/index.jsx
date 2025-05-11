import './style.css'

//Icons:
import { CiSearch } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import { LuBriefcase } from "react-icons/lu";
import { FiAward } from "react-icons/fi";

//components
import CardIndex from '../../components/CardIndex';

const Index = () => {

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
            </div>
        </>
    )
}

export default Index