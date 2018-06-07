exports.load();
            var AnTable = document.createElement("TABLE");
            AnTable.class = "anime";
            AnTable.align = "center";
            AnTable.style.width = "95%";
            AnTable.style.marginLeft = "auto";
            AnTable.style.marginRight = "auto";
            var rawLine = 2;
            
            var inTable = "";
            
            listAnime.forEach(anime => {
                //TR
                if ( Math.floor(listAnime.indexOf(anime) / rawLine) == listAnime.indexOf(anime) / rawLine)
                    inTable += "<tr>\n";
                
                //Op | Ed handeler
                if (anime.story_fr_source != `undefined`)
                    var story_fr = `${anime.story_fr}\n\n<a href="${anime.story_fr_source[1]}">Source: ${anime.story_fr_source[0]}</a>`;
                        
                if (anime.story_en_source != `undefined`)
                    var story_en = `${anime.story_en}\n\n<a href="${anime.story_en_source[1]}">Source: ${anime.story_en_source[0]}</a>`;
                
                var AnOp = "";
                var AnEd = "";
                var i = -1;
                while (i < anime.op.length -1 || i < anime.opFull.length -1 || i < anime.edFull.length -1 || i < anime.edFull.length -1) {
                
                    i += 1;
                    if (anime.op[i] != "undefined")
                        AnOp += `<a href="${anime.op[i]}" target="_blank">Opening ${i + 1}</a><br>`;
                    else AnOp += `<span title="undefined">Opening ${i + 1}</span><br>`;
                    
                    if (anime.opFull[i] != "undefined")  
                        AnOp += `<a href="${anime.opFull[i]}" target="_blank">Opening ${i + 1} Full</a><br><br>`;
                    else AnOp += `<span title="undefined">Opening ${i + 1} Full</span><br><br>`;
                    
                    if (anime.ed[i] != "undefined")
                        AnEd += `<a href="${anime.ed[i]}" target="_blank">Ending ${i + 1}</a><br>`;
                    else AnEd += `<span title="undefined">Ending ${i + 1}</span><br>`;
                    
                    if (anime.edFull[i] != "undefined")
                        AnEd += `<a href="${anime.edFull[i]}" target="_blank">Ending ${i + 1} Full</a><br><br>`;
                    else AnEd += `<span title="undefined">Ending ${i + 1} Full</span><br><br>`;
                    
                
                }
                
                //TD
                inTable +=  `<td style="width:${100/rawLine}%" class="anime">` + "\n" +
                            `   <button class="accordion"><img src="${anime.image}" style="width: 50px;"><h2 style="margin-left:10px">${anime.name}</h2></button>` + "\n" +
                            `   <div class="panel">` + "\n" +
                            `       <p><u>Synopsis:</u> ${story_fr}</p>`.replace(/\n/g,"<br>") + "\n" +
                            `       <table style="width:100%"><tr><td>${AnOp}</td><td>${AnEd}</td></table>` + "\n" +
                            `   </div>` + "\n" +
                            `</td>\n`;
                
                //Fin Tr
                if ( Math.floor((listAnime.indexOf(anime) + 1) / rawLine) == (listAnime.indexOf(anime) + 1) / rawLine)
                    inTable += "</tr>\n";
            });
            AnTable.innerHTML = inTable;
            document.body.appendChild(AnTable);
            
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight){
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                });
            }
