export default class FormController {

    // Construtor irá chamar as funçoes e fazer a injeções de dependencias
    constructor($state, $stateParams, itemService) {
        this.record = {}
        this._$state = $state;
        this._id = $stateParams.id;
        this._itemService = itemService;
        if (this._id) {
            this.findById()
        }
    }

    async save(){
        if (this._id) {
            await this._itemService.update(this.record);
        } else {
            await this._itemService.insert(this.record);
        }
        this._$state.go("app.item.list") // irá redirecionar - /nome da rota -
    }

    findById(){
        return this._itemService.findById(this._id)
        .then(response => {
            this.record = response;
            return this.record;
        })
    }
} 

FormController.$inject = ["$state", "$stateParams", "itemService"];