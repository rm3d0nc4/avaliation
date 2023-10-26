
import fs from 'fs';

interface TipoTransacao {
    calcularTaxas(): number
}

class Transacao {
    constructor(private valor: number, private data: Date, private tipo: string) { }

    calcularTaxas(): number {
        switch (this.tipo.toUpperCase()) {
            case "DEPOSITO":
                return this.valor * 0.01;
            case "RETIRADA":
                return this.valor * 0.02;
            case "TRANSFERENCIA":
                return this.valor * 0.015;
            default:
                return 0;
        }
    }

    get getValor(): number {
        return this.valor;
    }
    get getData(): Date {
        return this.data;
    }

    get getTipo(): string {
        return this.tipo;
    }

}

class ProcessarTransacao {

    static salvar(transacao: Transacao) {
        fs.appendFileSync(`transacao.txt`, `Data: ${transacao.getData}\nValor: ${transacao.getValor} \n Tipo:${transacao.getTipo}`);
    }
}

const transacaoDeposito = new Transacao(100, new Date(), "deposito");
const transacaoRetirada = new Transacao(200, new Date(), "retirada");
const transacaoTransferencia = new Transacao(300, new Date(), "transferencia");

ProcessarTransacao.salvar(transacaoDeposito);
ProcessarTransacao.salvar(transacaoRetirada);
ProcessarTransacao.salvar(transacaoTransferencia);