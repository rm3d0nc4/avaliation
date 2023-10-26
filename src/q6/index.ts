abstract class Item {
    constructor(
        protected id: string,
        protected descricao: string,
        protected valor: number,) { }
}

class Produto extends Item implements Totalizavel {
    constructor(
        id: string,
        descricao: string,
        valor: number,
        private taxa: number) {
        super(id, descricao, valor)
    }

    calcularTotal(): number {
        return this.valor * (1 + this.taxa)
    }



}
class Servico extends Item implements Totalizavel {

    constructor(
        id: string,
        descricao: string,
        valor: number,
        private horas: number) { super(id, descricao, valor) }

    calcularTotal(): number {
        return this.valor * this.horas
    }


    get getValor(): number {
        return this.valor;
    }

    get getHoras(): number {
        return this.horas;
    }
}

class Doacao extends Item implements Totalizavel {
    constructor(
        id: string,
        descricao: string,
        valor: number,
        private bonus: number) {
        super(id, descricao, valor)
    }

    calcularTotal(): number {
        return this.valor + this.bonus
    }

}

interface Totalizavel {
    calcularTotal(): number
}



class Totalizacao {
    static totalizar(totalizar: Totalizavel[]) {
        let total = 0
        for (let totalizavel of totalizar) {
            total += totalizavel.calcularTotal()
        }

        return total
    }

}





const macBookAir = new Produto("1", "MacBook Air", 10000, 0.1)
const servico = new Servico("2", "Manutenção", 100, 2)
const doacao = new Doacao("3", "Doação", 100, 10)


const totalizar =  Totalizacao.totalizar([macBookAir, servico, doacao])

console.log(`Total: ${totalizar}`)




