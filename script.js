
$(document).ready(function(){
    var url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    $.get(url, function(data, status){
        var pokemonList = $("#pokemon-list");

        for (var i = 0; i < data.results.length; i++) {
            var name = data.results[i].name;
            var url = data.results[i].url;

            var card = `
                <div style="width: 400px; height: 200px;">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col-auto">
                                    <div class="h9 mb-0 font-weight-bold text-blue-500">${name}</div>
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        <button href="${url}" target="_blank">Detail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            pokemonList.append(card);
        }
    });
});
