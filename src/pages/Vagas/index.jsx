import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"

//Components
import CardVaga from "../../components/CardVaga"
import CardStatus from "../../components/CardStatus"
import ModalLogin from "../../components/ModalLogin"

//Utils
import { getUserToken } from "../../utils/auth"
import DecodeJwt from '../../Utils/DecodeJwt'

//Icons
import { BiRocket } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";


const Vaga = () => {
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(getUserToken());
  const [userLevel, setUserLevel] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [openLoginModal, setOpenLoginModal] = useState(false);

  useEffect(() => {
    setVagas([])
    getVagas();
  }, []);

  const getVagas = () => {
    const endpoint = token?.empresa_id ? `/${token.empresa_id}` : "";

    console.log("Endpoint usado:", endpoint);

    axios
      .get(`http://localhost:3000/api/vagas${endpoint}`)
      .then((response) => {
        setVagas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar vagas:", error);
        setError("Erro ao carregar as vagas.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseLoginModal = () =>{
    setOpenLoginModal(false)
  }

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleLoginSuccess = () => {
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      var decodeJwt = new DecodeJwt()
      const decodedToken = decodeJwt.decodeToken(sessionUser);
      setUserLevel(decodedToken?.nivel);
    }
    setIsLoggedIn(true);
  };

  return (
    <div>
      
      <div className='boxHome'>
        {token ? <div className='homeTitle'>Vagas Cadastradas</div> : 
          <div className='homeTitle'>
            Conectamos você às melhores oportunidades de trabalho!
            <div className="mini-cards">
              <CardStatus  icon={<BiRocket/>} text="83 Vagas Ativas!"/>
              <CardStatus  icon={<BiSolidHeart/>} text="5 Empresas Parceiras!"/>
            </div>
            <p className="miniCardParagraph">Confirá nossas vagas a baixo!</p>
          </div>
        }
      </div>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {vagas.map((vaga) => (
          <div className="cardMagin" key={vaga.id}>
            <CardVaga key={vaga.id} titulo={vaga.titulo} localizacao={vaga.localizacao} horario_trabalho={vaga.horario_trabalho} faixa_salarial={vaga.faixa_salarial}
             btnText={token ? 'Acessar' : 'Logar-se'} eventButton={ token ? "" : handleOpenLoginModal } link={token? "/vaga/" + vaga.id : ""}/>
          </div>
        ))}
      </ul>

      <ModalLogin
                open={openLoginModal}
                onClose={handleCloseLoginModal}
                onLoginSuccess={handleLoginSuccess}
              />
    </div>
  );
};

export default Vaga;
