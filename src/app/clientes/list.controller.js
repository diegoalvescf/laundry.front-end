export default class ListController {
    constructor($state, clienteService) {
        this.records = [];
        this._$state = $state; // vincular o array com a controller
        this._clienteService = clienteService; // o "_" é para definir como um atributo local, pois nao sera usado em outro lugar
        this.findAll();
        this.cols = [
            {
                label: "Documento", // nome da coluna que sera exibida na tela\
                value: "documento",
                type: "text"
            },
            {
                label: "Nome",
                value: "nome",
                type: "text"
            },
            {
                label: "Telefone",
                value: "telefone",
                type: "text"
            },
            {
                label: "E-mail",
                value: "email",
                type: "text"
            }
        ] // Colunas
    }

    buscar(pesquisa){
        this.records = [];
        this.findByPesquisa(pesquisa)
    }

    findByPesquisa(pesquisa){
        return this._clienteService.findByPesquisa(pesquisa)
        .then(response => {
            this.records = response;
            return this.records;
        })
    }

    findAll(){
        return this._clienteService.findAll()
        .then(response => {
            this.records = response;
            return this.records;
        })
    }

    async excluir(id){
        await this._clienteService.remove(id);
        this._$state.reload(); // recarrega a pagina.
    }
} 

ListController.$inject = ["$state","clienteService"];