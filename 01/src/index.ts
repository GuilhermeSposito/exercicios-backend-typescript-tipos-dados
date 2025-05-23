type usuario = { nome: string, pets: string[] };

const usuarios: usuario[] = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

const buscarDonoPet = (lista: usuario[], nomePet: string) => {
    let usuarioEncontrado: usuario = { nome: "", pets: [] };

    for (const usuario of lista) {
        if (usuario.pets.includes(nomePet)) {
            usuarioEncontrado = usuario;
        }
    }

    if (usuarioEncontrado.nome != "") {
        console.log(`O dono(a) do(a) ${nomePet} é o(a) ${usuarioEncontrado.nome}`);
    } else {
        console.log(`Que pena ${nomePet}, não encontramos seu dono(a)`);
    }
}

buscarDonoPet(usuarios, 'guido');