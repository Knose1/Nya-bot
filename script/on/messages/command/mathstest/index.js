exports.execute = () => {

    if ((command.toLowerCase() == 'mathstest' || command.toLowerCase() == 'mt') && undefined != args[0]) {
            
            
            if (undefined == args[1]) {
                var ArrMin = 1;
                var ArrMax = args[0];
            } else {
                var ArrMin = args[0];
                var ArrMax = args[1];
            }
            let collect = false;
            let Operate = ['+','-','*','/'];
            let ArrNumbers = [0,0,0,0,0];
            ArrNumbers = ArrNumbers.map( () => {return rand(ArrMin,ArrMax)} );
            console.log(ArrNumbers);
            
            let question = ArrNumbers.join(' | ');
            let solution = '';
            
            let x = rand(0,ArrNumbers.length - 1);
            let solunum = ArrNumbers[x];
                delete ArrNumbers[x];
            
            let maxI = ArrNumbers.length;
            let i = 1;
            console.log(solunum);
            
            while (i < maxI) {
                i += 1;
                let x = rand(0,maxI + 1);
                console.log(ArrNumbers);
                while (ArrNumbers[x] == undefined) {
                    x = rand(0,maxI + 1);
                }
                let randOperat = Operate[rand(0,Operate.length - 1)];
                let randnumb = ArrNumbers[x];
                    delete ArrNumbers[x];
                console.log(randnumb);
                solution += `${solunum} ${randOperat} ${randnumb}`;
                if (randOperat == '+') solunum += randnumb;
                if (randOperat == '-') solunum -= randnumb;
                if (randOperat == '*') solunum *= randnumb;
                if (randOperat == '/') solunum /= randnumb;
                
                solution += ` = ${solunum}\n`;
            }
            question += "\n"+"Result: "+solunum+"\n\n"+"Try to find how to get the result";
            
            message.channel.send(`\`\`\`js\n
${question}\`\`\``)
                .then(msg => {
                    //On ajoute une réaction
                    msg.react('✅');
                
                    //On attend une réaction puis on del le message
                    const filter = (reaction,user) => {return reaction.emoji.name == '✅' && user.id != mention}
                    const collector = msg.createReactionCollector(filter, {time: 3600000, max:1});
                        collector.on('collect', r => {
                            collect = true;
                            msg.edit(`\`\`\`javascript\n\
${solution}\`\`\``);
                            msg.clearReactions();;
                            msg.delete(60000);
                        });
                        collector.on('end', e => {if (!collect) {msg.clearReactions(); msg.delete(500);}});
                    });
                        
        }
        else if ((command.toLowerCase() == 'mathstest' || command.toLowerCase() == 'mt')) {
            message.channel.send("use: ")
                .then(msg => msg.delete(15000));
        }

}
