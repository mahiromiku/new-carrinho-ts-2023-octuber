var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Descricao = /** @class */ (function () {
    function Descricao() {
        this._quantidade = 0;
    }
    Descricao.prototype.getUrl = function () {
        return this._url;
    };
    Descricao.prototype.getNome = function () {
        return this._nome;
    };
    Descricao.prototype.getDescricao = function () {
        return this._descricao;
    };
    Descricao.prototype.getPreco = function () {
        return this._preco;
    };
    Descricao.prototype.getQuantidade = function () {
        return this._quantidade;
    };
    Descricao.prototype.setUrl = function (url) {
        this._url = url;
    };
    Descricao.prototype.setNome = function (nome) {
        this._nome = nome;
    };
    Descricao.prototype.setDescricao = function (descricao) {
        this._descricao = descricao;
    };
    Descricao.prototype.setPreco = function (preco) {
        this._preco = preco;
    };
    Descricao.prototype.setQuantidade = function (quantidade) {
        this._quantidade = quantidade;
    };
    return Descricao;
}());
var Coxinha = /** @class */ (function (_super) {
    __extends(Coxinha, _super);
    function Coxinha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Coxinha;
}(Descricao));
var coxinha = new Coxinha();
coxinha.setNome("coxinha de frango");
coxinha.setUrl("https://cdn0.tudoreceitas.com/pt/posts/1/9/1/coxinha_simples_191_600.jpg");
var coxinhaFrangoNome = coxinha.getNome();
var coxinhaFrangoUrl = coxinha.getUrl();
document.getElementById("item__nome__1").innerHTML = coxinhaFrangoNome;
document.getElementById("item__imagem__1").src = coxinhaFrangoUrl;
