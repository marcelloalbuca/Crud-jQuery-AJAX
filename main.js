$(document).ready(function (){

    getEnquete();

});

function getEnquete() {
    $.ajax({
        
        async: true,
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Enquete')/items",
        method: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },
        success: function (data) {
            data = data.d.results;
            console.log(data)
            $.each(data, function(index, item){ 
                $('#ulteste').append('<li><span>'+ item.Votos + '</span>' + item.Title + '</li>');
             });          
        },
        error: function (error) {
        console.log(JSON.stringify(error));
        }
    })
}




function deleteItem(item) {
    $.ajax({
        async: true,
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('SolicitacaoEquipamentos')/items(" + item + ")",
        method: "DELETE",
        headers: { //obrigatório
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method": "DELETE"
        },
        success: function (data) {

            $('#solicitacoes').empty();
            getSolicitacaoEquipamentos();
            console.log("deletado com sucesso");
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    })
}

