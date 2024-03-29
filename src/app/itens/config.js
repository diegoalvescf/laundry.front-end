import ListController from "./list.controller"
import FormController from "./form.controller"
 
export const itemConfig = $stateProvider => {
    $stateProvider

    .state("app.item",{
        template: require("@views/default.html"),
        url: "itens",
        redirectTo: "app.item.list" 
    })
    .state("app.item.list",{
        template: require("@views/itens/list.html"),
        url: "/list",
        controller: ListController,
        controllerAs: "vm"
    })
    .state("app.item.new",{
        template: require("@views/itens/form.html"),
        url: "/new",
        controller: FormController,
        controllerAs: "vm"
    })
    .state("app.item.edit",{
        template: require("@views/itens/form.html"),
        url: "/{id}",
        controller: FormController,
        controllerAs: "vm"
    });
};

itemConfig.$inject = ["$stateProvider"];