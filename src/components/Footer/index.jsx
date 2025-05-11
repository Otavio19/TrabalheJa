import './style.css'
import { Grid2, Button } from "@mui/material";

const Footer = () => {
    return (
        <div className='footerBox'>
            <div className='footerTitle'>
                <h1>Pronto para dar o proximo passo na sua carreira?</h1>
                <p>Milhares de vagas para você. Encontre a que combina com você!</p>
                <Grid2 container spacing={2} justifyContent="center" marginTop={4}>
                    <Button variant="outlined" color="">Explorar Vagas</Button>
                    <Button variant="contained" color="success">Criar Conta</Button>
                </Grid2>

            </div>
            <div className='footerContent'>
                <div className='footerInfo'>
                    <h2>TrabalheJA</h2>
                    <p>Conectando talentos e oportunidades em todo o Brasil</p>
                </div>
                <div className='footerInfo'>
                    <h2>Para Candidatos</h2>
                    <ul>
                        <li>
                            <a href='#'>Buscar Vagas</a>
                        </li>
                        <li>
                            <a href='#'>Cadastrar Currículo</a>
                        </li>
                        <li>
                            <a href='#'>Dicas de Carreira</a>
                        </li>
                    </ul>
                </div>
                <div className='footerInfo'>
                    <h2>Para Empresas</h2>
                    <ul>
                        <li>
                            <a href='#'>Anunciar Vagas</a>
                        </li>
                        <li>
                            <a href='#'>Buscar Candidatos</a>
                        </li>
                        <li>
                            <a href='#'>Planos Corporativos</a>
                        </li>
                    </ul>
                </div>
                <div className='footerInfo'>
                    <h2>Contato</h2>
                    <ul>
                        <li>
                            contato@trabalheja.com
                        </li>
                        <li>
                            +55 (11) 94002-3817
                        </li>
                        <li>
                            São Paulo, SP
                        </li>
                    </ul>
                </div>
            </div>

            <div className='direitos'>
                © 2025 TrabalheJA. Todos os direitos reservados.
            </div>
        </div>
    )
}

export default Footer