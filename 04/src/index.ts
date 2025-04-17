type Produto = { Nome: string, lote: number, ano: number, qtd: number };

const Produtos: Produto[] = [{
    Nome: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
},
{
    Nome: 'teste',
    lote: 388,
    ano: 2000,
    qtd: 3
}
]

function PrintEtiquetas(produtos: Produto[]) {
    const ListaDeEtiquetas: string[] = [];

    for (let produto of produtos) {
        const infos = `${produto.ano}-${produto.lote}-${(produto.qtd).toString().padStart(3, '0')}`;

        ListaDeEtiquetas.push(infos);
    }

    console.log(ListaDeEtiquetas)

}

PrintEtiquetas(Produtos);

