class Prato {
    constructor(
        id,
        categoriaIds,
        titulo,
        acessibilidadePreco,
        urlImagem,
        ingredientes,
        passos,
        eVegano,
        eLivreDeLactose
    ) {
        this.id = id,
            this.categoriaIds = categoriaIds,
            this.titulo = titulo,
            this.acessibilidadePreco = acessibilidadePreco,
            this.urlImagem = urlImagem,
            this.ingredientes = ingredientes,
            this.passos = passos,
            this.eVegano = eVegano,
            this.eLivreDeLactose = eLivreDeLactose
    }
}
export default Prato;
