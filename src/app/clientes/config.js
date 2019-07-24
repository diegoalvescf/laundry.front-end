import ListController from "./list.controller"
import FormController from "./form.controller" // importado 
 
export const clienteConfig = $stateProvider => {
    $stateProvider
        // Primeiro é definido default pois pode ser exibido graficos - entre outras informações
        // é uma pagina vazia para ser exibido o que quiser
        .state("app.cliente",{ // Nome definido aqui - depois sera chamado esse nome no menu controller --> http://prntscr.com/oj5n93 
            template: require("@views/default.html"),//o arquivo html que sera usado nessa rota, o @nomeDaPasta e o arquivo - caminho\
            url: "clientes", // url que será exibida
            redirectTo: "app.cliente.list"// Redirecionamento da rota
        })
        .state("app.cliente.list",{ 
            template: require("@views/clientes/list.html"),
            url: "/list",
            controller: ListController, 
            controllerAs: "vm" // apelido para poder usar a função depois - semelhante ao apelido dado em sql
        })
        .state("app.cliente.new",{
            template: require("@views/clientes/form.html"),
            url: "/new",
            controller: FormController,
            controllerAs: "vm"
        })
        .state("app.cliente.edit",{
            template: require("@views/clientes/form.html"),
            url: "/{id}", // dessa maneira irá mostrar o id na url
            controller: FormController,
            controllerAs: "vm"
        });
};

clienteConfig.$inject = ["$stateProvider"]; //Injetando as dependencias  