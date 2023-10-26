class RedeSocial {
    postarMensagem(mensagem: string) {
        if (mensagem == null || mensagem.trim() === "") {
            throw new Error("A mensagem nao pode ser vazia")
        }
        console.log("Mensagem postada: " + mensagem);
    }
}

const redeSocial = new RedeSocial()

redeSocial.postarMensagem('')
redeSocial.postarMensagem("Mackbook Air M2")