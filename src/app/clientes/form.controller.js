export default class FormController {

    // Construtor irá chamar as funçoes e fazer a injeções de dependencias
    constructor($state, $stateParams, clienteService) {
        this.record = {}
        this._$state = $state;
        this._id = $stateParams.id;
        this._clienteService = clienteService;
        if (this._id) {
            this.findById()
        }
    }

    async save(){
        if (this._id) {
            await this._clienteService.update(this.record);
        } else {
            await this._clienteService.insert(this.record);
        }
        this._$state.go("app.cliente.list") // irá redirecionar - /nome da rota -
    }

    findById(){
        return this._clienteService.findById(this._id)
        .then(response => {
            this.record = response;
            return this.record;
        })
    }
} 

FormController.$inject = ["$state", "$stateParams", "clienteService"];