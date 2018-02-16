        "use strict";
        console.log("shall we dance")

            var wordarr= "";
            var newStr= "";
            var i =" , ";
            var list= " ";
            var mySong= " ";
            var jungle = " ";
           // var counter=" ";


        let str="The walrus danced through the trees in the light of the moon";
        let nextSentence="i like to dance";
            var wordarr= str.split(" ");
                console.log(wordarr);
            var newStr= nextSentence.split(" ");
                console.log(newStr);


                        let addExcitement = (jungle, mySong) => {
                                let  counter="";
                                jungle.forEach(function (item, index) {
                                    var i = index + 1; 
                                    if (i % 3 === 0) { 
                                        let she = i / 3; 
                                        counter += ` ${item + mySong.repeat(she)}`; 
                                    } else {
                                        counter += ` ${item}`;
                                    }
                                    console.log(counter); 
                                });
                            }

                            addExcitement(wordarr, "!");
                            
                            addExcitement(newStr, "?");


