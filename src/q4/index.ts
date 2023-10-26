class Carro2 {

    _quantidadeCombustivel: number;
    _capacidadeMaxima: number = 50; // em litros

    constructor(quantidadeDeCombustivel: number) {
        this._quantidadeCombustivel = quantidadeDeCombustivel
    }


    set quantidadeDeCombustivel(quantidade: number){
        if (this._quantidadeCombustivel >= this._capacidadeMaxima * 0.1) {
            throw new Error("Nao precisa abastecer")
        }
        if (!((this._quantidadeCombustivel + quantidade) <= this._capacidadeMaxima)) {
            throw new Error("A capacidade máxima do tanque foi ultrapassado")
        } 

        this._quantidadeCombustivel += quantidade
    }
}
class TestaCarro2 {
    static reabastecerSeNecessario(carro: Carro2, quantidade: number) {
        carro.quantidadeDeCombustivel = quantidade
    }
}

const carro4 = new Carro2(50)
const carro5 = new Carro2(4)
const carro6 = new Carro2(20)

TestaCarro2.reabastecerSeNecessario(carro4, 20)
TestaCarro2.reabastecerSeNecessario(carro5, 10)
TestaCarro2.reabastecerSeNecessario(carro6, 40)