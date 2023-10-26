class Cliente {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class Pedido {
    private valorTotal: number;

    constructor(valorTotal: number) {
        this.valorTotal = valorTotal;
    }

    getValorTotal(): number {
        return this.valorTotal;
    }
}



class RepositorioDePedidos {
    constructor(private cliente: Cliente) { }
    private pedidos: Pedido[] = []


    processarPedido(pedido: Pedido) {
        this.pedidos.push(pedido);
        this.calcularDesconto(pedido);
    }

    calcularDesconto(pedido: Pedido): number {
        return pedido.getValorTotal() * 0.1;
    }
}


const notrew = new Cliente("Notrew");
const macBookAirM2 = new Pedido(7600);



const repositorio = new RepositorioDePedidos(notrew);

repositorio.processarPedido(macBookAirM2);

console.log(`Desconto do pedido de valor ${macBookAirM2.getValorTotal()} é de ${repositorio.calcularDesconto(macBookAirM2)}`)