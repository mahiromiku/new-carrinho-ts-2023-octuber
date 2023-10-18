class Descricao{
    private _url: string
    private _nome: string
    private _descricao: string
    private _preco: number
    private _quantidade: number = 0

    getUrl(){
        return this._url
    }

    getNome(){
        return this._nome
    }

    getDescricao(){
        return this._descricao
    }

    getPreco(){
        return this._preco
    }

    getQuantidade(){
        return this._quantidade
    }

    setUrl(url: string){
        this._url = url
    }

    setNome(nome: string){
        this._nome = nome
    }

    setDescricao(descricao: string){
        this._descricao = descricao
    }

    setPreco(preco: number){
        this._preco = preco
    }

    setQuantidade(quantidade: number){
        this._quantidade = quantidade
    }
}

class Coxinha extends Descricao{}

const coxinha = new Coxinha();
coxinha.setNome("coxinha de frango")
coxinha.setUrl("https://cdn0.tudoreceitas.com/pt/posts/1/9/1/coxinha_simples_191_600.jpg")
const coxinhaFrangoNome = coxinha.getNome();
const coxinhaFrangoUrl = coxinha.getUrl();

document.getElementById("item__nome__1")!.innerHTML = coxinhaFrangoNome
document.getElementById("item__imagem__1")!.src = coxinhaFrangoUrl