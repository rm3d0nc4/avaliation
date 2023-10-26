class Carro {

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
class TestaCarro {
    static reabastecerSeNecessario(carro: Carro, quantidade: number) {
        carro.quantidadeDeCombustivel = quantidade
    }
}

const carro1 = new Carro(50)
const carro2 = new Carro(4)
const carro3 = new Carro(20)

TestaCarro.reabastecerSeNecessario(carro1, 10)
TestaCarro.reabastecerSeNecessario(carro2, 20)
TestaCarro.reabastecerSeNecessario(carro3, 40)