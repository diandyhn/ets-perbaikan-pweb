$(document).ready(function(){
    var url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    $.get(url, function(data, status){
        var pokemonList = $("#pokemon-list");

        for (var i = 0; i < 20; i+=4) {
            var cardRow = $('<div class="row justify-content-center" style="padding-top: 40px;"></div>');

            for (var j = i; j < i+4; j++) {
                var card = `
                <div class="col-xl-3 col-md-6 mb-4 padding">
                    <div class="card border-dark text-center">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col">
                                    <div class="h9 mb-0 font-weight-bold text-blue-500">${data.results[j].name}</div>
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        <a href="${data.results[j].url}" target="_blank" class="btn btn-primary">Detail</a>
                                    </div>
                                </div>              
                            </div>
                        </div>
                    </div>
                </div>
                `;
                cardRow.append(card);
            }

            pokemonList.append(cardRow);
        }
    });
});
