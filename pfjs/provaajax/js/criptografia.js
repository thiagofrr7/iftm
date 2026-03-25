import usersData from "./senhas.js";
import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

// usersData.forEach(data => {
//     data.senha = bcrypt.genSaltSync(10);
//     console.log("nome: " + data.nome);
//     console.log("senha criptografada: " + data.senha);
// })

const senhasCript = (url) = usersData.forEach(data => {
    const senhaUser = url;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senhaUser, salt);
    // console.log(hash);
})

export default senhasCript; 

