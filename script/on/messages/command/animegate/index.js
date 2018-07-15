exports.execute() => {
    
    new Promise(function(resolve, reject) {
        function boucle(i,result) {
            const query = 
            `
                {
                    anime(page: ${i + 1}){
                        data{
                            title, episodes
                        }
                    }
                }
            `
            
            request('https://api.anime-gate.net/', query)
                .then(queryResult => {
                    //on charge max 500 pages
                    if (i < 500)
                        boucle(i + 1,result.concat(queryResult.anime.data));
                    else
                        resolve(result.concat(queryResult.anime.data))
                })
            
                .catch(r => {
                    resolve(result)
                });
        }
        
        boucle(0,[])
    }).then(result => {})
    
}
