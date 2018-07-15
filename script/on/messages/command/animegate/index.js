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
                    boucle(i,result.push(queryResult));
                })
            
                .catch(r => {
                    resolve(result)
                });
        }
        
        boucle(0,[])
    }).then(result => {})
    
}
