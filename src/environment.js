let IS_PROD = true;
const server = IS_PROD ?
    "https://apnacollegebackend.onrender.com" :
    // "https://8de2d6a99997.ngrok-free.app"
    "http://192.168.130.28:8000"


export default server;