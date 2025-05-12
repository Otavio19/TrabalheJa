export const getUserLevel = () => {
  const rawToken = sessionStorage.getItem("user");

  if (!rawToken) return null;

  try {
    const cleanedToken = rawToken.startsWith('"') ? JSON.parse(rawToken) : rawToken;
    const tokenPayload = JSON.parse(atob(cleanedToken.split(".")[1]));
    return tokenPayload.nivel;
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return null;
  }
};

export const getUserToken = () => {
  const rawToken = sessionStorage.getItem("user");

  if (!rawToken) return null;

  try {
    const cleanedToken = rawToken.startsWith('"') ? JSON.parse(rawToken) : rawToken;
    const tokenPayload = JSON.parse(atob(cleanedToken.split(".")[1]));
    return tokenPayload;
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return null;
  }
}