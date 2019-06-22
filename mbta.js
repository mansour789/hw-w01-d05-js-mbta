
      
const stopsBetweenStations = function(startLine, startStation, endLine, endStation){

        const lines = 
      {
           Red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
           Green : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
          Orange : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],     
      }
            //This loop for writing all stations name
      const loopFirstBigger = function(start, end, array, keyObject){

        for (let i = start; i > end - 1; i--){
            array.push(lines[keyObject][i]);   
    };
        for (let j = 1; j < array.length - 1; j++){
        console.log(`Rider arrives at ${keyObject} Line and ${array[j]}.`);
        };

    };
        //This loop for writing all stations name
    const loopFirstSmaller = function(start, end, array, keyObject){

        for (let i = start; i < end + 1; i++){
            array.push(lines[keyObject][i]); 
        };
        for (let j = 1; j < array.length - 1; j++){
        console.log(`Rider arrives at ${keyObject} Line and ${array[j]}.`);
        };
    };

        //check the line name is correct 
    if ((startLine === 'Red' || startLine === 'Green' || startLine === 'Orange') && (endLine === 'Red' || endLine === 'Green' || endLine === 'Orange')){
             
        
        let startPoint = lines[startLine].indexOf(startStation);
        let toParkStreet = lines[startLine].indexOf("Park Street");
        let fromParkStreet = lines[endLine].indexOf("Park Street");
        let endingPoint = lines[endLine].indexOf(endStation);
        let stopsToChange = 0;
        let stopsAfterChange = 0;
        let stops = 0;
        let stations = [];
        let stationsBeforChange = [];
        let stationsAfterChange = [];

            //check if the startStation name is corrct
        if (startPoint === -1 ){
            return ` ${startStation} is NOT on  ${startLine} Line. Please check your departing station!`;
        }
            //check if the endStation name is corrct
        if (endingPoint === -1){
            return ` ${endStation} is NOT on  ${endLine} Line. Please check your arriving station!`;
        }
            //check if the startStation and endStation are same
        if (startStation === endStation){
            return `Hey dude !! ${startStation} in ${startLine} Line is the same as ${endStation} in ${endLine} Line!!!.`;
        }

        
        
            //If the rider travils in the same line
        if (startLine === endLine){
                console.log(`Rider boards the train a ${startLine} Line and ${startStation}.`);
                if ( startPoint > endingPoint){
                    stops = startPoint - endingPoint;
                    loopFirstBigger(startPoint, endingPoint, stations, startLine);
                }else{
                    stops = endingPoint - startPoint; 
                    loopFirstSmaller(startPoint, endingPoint, stations, startLine);
                };
                console.log(`Rider exits the train at ${endLine} Line and ${endStation}.`);
     }else {
                    //If the rider travils in different lines
                    console.log(`Rider boards the train a ${startLine} Line and ${startStation}.`);
                    //count and write all the stations from start to Park Street
                if ( startPoint > toParkStreet){
                    stopsToChange = startPoint - toParkStreet;
                loopFirstBigger(startPoint, toParkStreet, stationsBeforChange, startLine);  
                }else{
                    stopsToChange = toParkStreet - startPoint;
                    loopFirstSmaller(startPoint, toParkStreet, stationsBeforChange, startLine);   
                }
                console.log(`Rider transfers from ${startLine} Line to ${endLine} Line at Park Street.`);
                
                //count and write all the stations from Park Street to the end
                if ( fromParkStreet > endingPoint){
                    stopsAfterChange = fromParkStreet - endingPoint;
                loopFirstBigger(fromParkStreet, endingPoint, stationsAfterChange, endLine);
                }else{
                    stopsAfterChange = endingPoint - fromParkStreet;
                    loopFirstSmaller(fromParkStreet, endingPoint, stationsAfterChange,endLine);
                }
                stops = stopsToChange + stopsAfterChange;
                console.log(`Rider exits the train at ${endLine} Line and ${endStation}.`);
            }     
             
          console.log(`${stops}  stops From ${startStation}  To  ${endStation} `);
           
    }else{ 
            //if the line name is NOT correct
            return `${startLine} OR ${endLine} is NOT correct. Please check your input and try again!`;
         }
}




        //==========================RESULTS AFTER TESTING WITH BONUS==================================//

        stopsBetweenStations("Orange", "Chinatown", "Green", "Hynes"); 

                    //  Rider boards the train a Orange Line and Chinatown.
                    //  Rider arrives at Orange Line and Downtown Crossing.
                    //  Rider arrives at Orange Line and State.
                    //  Rider transfers from Orange Line to Green Line at Park Street.
                    //  Rider arrives at Green Line and Boylston.
                    //  Rider arrives at Green Line and Arlington.
                    //  Rider arrives at Green Line and Copley.
                    //  Rider exits the train at Green Line and Hynes.
                    // "7  stops From Chinatown  To  Hynes "

        stopsBetweenStations("Red", "Central", "Green", "Hynes"); 

                    // Rider boards the train a Red Line and Central.
                    // Rider arrives at Red Line and Kendall.
                    // Rider transfers from Red Line to Green Line at Park Street.
                    // Rider arrives at Green Line and Boylston.
                    // Rider arrives at Green Line and Arlington.
                    // Rider arrives at Green Line and Copley.
                    // Rider exits the train at Green Line and Hynes.
                    // "6  stops From Central  To  Hynes "


        //=============================testing going back and forth====================================//
       
        stopsBetweenStations("Red", "Alewife", "Green", "Kenmore"); 

                    // Rider boards the train a Red Line and Alewife.
                    // Rider arrives at Red Line and Davis.
                    // Rider arrives at Red Line and Porter.
                    // Rider arrives at Red Line and Harvard.
                    // Rider arrives at Red Line and Central.
                    // Rider arrives at Red Line and Kendall.
                    // Rider transfers from Red Line to Green Line at Park Street.
                    // Rider arrives at Green Line and Boylston.
                    // Rider arrives at Green Line and Arlington.
                    // Rider arrives at Green Line and Copley.
                    // Rider arrives at Green Line and Hynes.
                    // Rider exits the train at Green Line and Kenmore.
                    // "11  stops From Alewife  To  Kenmore "

        stopsBetweenStations( "Green", "Kenmore", "Red", "Alewife");  

                    // Rider boards the train a Green Line and Kenmore.
                    // Rider arrives at Green Line and Hynes.
                    // Rider arrives at Green Line and Copley.
                    // Rider arrives at Green Line and Arlington.
                    // Rider arrives at Green Line and Boylston.
                    // Rider transfers from Green Line to Red Line at Park Street.
                    // Rider arrives at Red Line and Kendall.
                    // Rider arrives at Red Line and Central.
                    // Rider arrives at Red Line and Harvard.
                    // Rider arrives at Red Line and Porter.
                    // Rider arrives at Red Line and Davis.
                    // Rider exits the train at Red Line and Alewife.
                    // "11  stops From Kenmore  To  Alewife "



        //==========================TESTING  WRONG INPUT====================================//

        // check if the starting station on the correct line! Or there is a mistake in the station name.
        stopsBetweenStations("Orange", "Alewife", "Green", "Hynes"); // " Alewife is NOT on  Orange Line. Please check your departing station!"


        //check if the ending station on the correct line! Or there is a mistake in the station name.
        stopsBetweenStations("Red", "Central", "Green", "Alewife"); //  " Alewife is NOT on  Green Line. Please check your arriving station!"


        // check if the rider start and end in the same distnation.
        stopsBetweenStations("Red", "Park Street", "Green", "Park Street"); //"Hey dude !! Park Street in Red Line is the same as Park Street in Green Line!!!."


        //check if the name of the starting line is correct.
        stopsBetweenStations("Orangggg", "Chinatown", "Green", "Hynes");  //"Orangggg OR Green is NOT correct. Please check your input and try again!"


        //check if the name of the ending line is correct.
        stopsBetweenStations("Orange", "Chinatown", "Greennnnnnnn", "Hynes");  //"Orange OR Greennnnnnnn is NOT correct. Please check your input and try again!"