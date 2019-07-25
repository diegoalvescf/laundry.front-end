export default class ItemService{
    constructor($http) {
        this.http = $http; //faz a ponte entre controller e o html
        this.url = "http://localhost:3000/itens;"//Endereço do backend - Quando for publicar tem que alterar essa URL para subir o projeto 
    }

    findByPesquisa(pesquisa){
        return this.http
        .get(this.url + '-pesquisa', { params:{ pesquisa } })
        .then(function(response){
            return response.data; // retornando o dado
        });
    }

    findById(id) {
        return this.http.get(this.url + "/"+id)
        .then(function(response){
            return response.data;
        });
    }

    findAll(){
        return this.http.get(this.url).then(function(response){
            return response.data;
        });
    }

    insert(registro){
        return this.http.post(this.url, registro)
        .then(function(response){
            return response.data;
        });
    }

    update(registro) {
        return this.http.put(this.url + "/" + registro._id, registro) 
        .then(function(response){
            return response.data;
        });
    }

    remove(id){
        return this.http.delete(this.url + "/" + id)
        .then(function(response){
            return response.data; //função para ter uma resposta do servidor
        });
    }
}

ItemService.$inject = ["$http"];