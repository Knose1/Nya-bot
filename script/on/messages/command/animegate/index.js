exports.execute() => {
    
    new Promise(function(resolve, reject) {
        function boucle(i,result) {
            const query = 
            `
                query { 
                    media(page: ${i + 1}) { 
                        ... on Anime { 
                            id, 
                            title, 
                            titleEnglish, 
                            startDate, 
                            format, 
                            status, 
                            url 
                        } 
                    } 
                } 
            `
            
            request('https://api.anime-gate.net/', query)
                .then(queryResult => {
                    //on charge max 500 pages
                    if (i < 500)
                        boucle(i + 1,result.concat(queryResult.media));
                    else
                        resolve(result.concat(queryResult.media))
                })
            
                .catch(r => {
                    resolve(result)
                });
        }
        
        boucle(0,[])
    }).then(result => {})
    
}
