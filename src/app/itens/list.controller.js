export default class ListController {
    constructor($state, itemService) {
        this.records = [];
        this._$state = $state; // vincular o array com a controller
        this._itemService = itemService; // o "_" é para definir como um atributo local, pois nao sera usado em outro lugar
        this.findAll();
        this.cols = [
            {
                label: "Descrição", // nome da coluna que sera exibida na tela\
                value: "descricao",
                type: "text"
            },
            {
                label: "Valor",
                value: "valor",
                type: "number"
            }
        ] // Colunas
    }

    buscar(pesquisa){
        this.records = [];
        this.findByPesquisa(pesquisa)
    }

    findByPesquisa(pesquisa){
        return this._itemService.findByPesquisa(pesquisa)
        .then(response => {
            this.records = response;
            return this.records;
        })
    }

    findAll(){
        return this._itemService.findAll()
        .then(response => {
            this.records = response;
            return this.records;
        })
    }

    async excluir(id){
        await this._itemService.remove(id);
        this._$state.reload(); // recarrega a pagina.
    }
} 

ListController.$inject = ["$state","itemService"];