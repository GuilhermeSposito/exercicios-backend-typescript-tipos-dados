import { Usuario, usuarios } from "../models/ListaDeUsuarios"; // ajuste o caminho conforme necessário

const ProcuraUsuario = (letras: string): Usuario[] => {
    const usuariosEncontrados: Usuario[] = [];

    usuarios.forEach(x => {
        if (x.nome.includes(letras)) {
            usuariosEncontrados.push(x)
        }
    })


    return usuariosEncontrados;
}


function IniciaOPrograma() {

    const Result: Usuario[] = ProcuraUsuario("Gui");

    if (Result.length == 0) {
        console.log("Nenhum usuario encontrado")
        return
    }

    console.log(Result)

}

IniciaOPrograma();