import { jwtDecode } from "jwt-decode";

class DecodeJwt {
  teste = () => {
    console.log("Classe conectada!");
  };

  decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token); // Use diretamente o jwt_decode
      console.log(decoded)
      return decoded;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return null;
    }
  };
}

export default DecodeJwt;
