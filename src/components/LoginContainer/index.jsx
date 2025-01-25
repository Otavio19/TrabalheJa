import './style.css'

// MUI
import TextField from '@mui/material/TextField';

//Components
import { InputField, ButtonField } from '../InputField';

// Icons
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EastIcon from '@mui/icons-material/East';
import AddIcon from '@mui/icons-material/Add';

const LoginContainer = () => {
    return (
        <>
            <div className='loginContainer'>
                <h1>Login</h1>
                <InputField iconInput={<PersonIcon />} typeInput='text' labelInput='Login' idInput='txt_login' />
                <InputField iconInput={<LockIcon />} typeInput='password' labelInput='Senha' idInput='txt_login' />
                <div className='btnContainer'>
                    <ButtonField iconButton={<EastIcon />} textButton='Logar' className='btnBox' />
                    <ButtonField iconButton={<AddIcon />} textButton='Registrar' className='btnBox' />
                </div>
            </div>
            <div className='contentContainer'>
                <h2>
                    Oportunidades
                </h2>
                <p>
                    Ajudando empresas a encontrar colaboradores qualificados de maneira simples e eficiente.
                </p>
                <hr />
                <p>
                    Cadastre-se ou faça login para começar a explorar as vagas e oferecer suas habilidades.
                </p>
            </div>
        </>
    )
}

export default LoginContainer;