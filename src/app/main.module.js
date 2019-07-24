import angular from "angular";

import { default as uiRouter } from "@uirouter/angularjs";
import diretivas from "./diretivas";

import { mainConfig } from "./main/config";
import { clienteConfig } from "./clientes/config" // importado as configurações de clientes
import { itemConfig } from "./itens/config";
import { osConfig } from "./os/config";

export default angular
  .module("app", [uiRouter, diretivas])
  .config(mainConfig)
  .config(itemConfig)
  .config(osConfig)
  .config(clienteConfig).name; // declarando a configuração de clientes, 
                               // Aqui é declarado todos os configs mas apenas no ultimo .config que vai o .name
