
      
const stopsBetweenStations = function(startLine, startStation, endLine, endStation){

        const lines = 
      {
           Red : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
           Green : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
          Orange : ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],     
      }

        //if the line name is correct 
    if ((startLine === 'Red' || startLine === 'Green' || startLine === 'Orange') && (endLine === 'Red' || endLine === 'Green' || endLine === 'Orange')){
             
        
        let startPoint = lines[startLine].indexOf(startStation);
        let toParkStreet = lines[startLine].indexOf("Park Street");
        let fromParkStreet = lines[endLine].indexOf("Park Street");
        let endingPoint = lines[endLine].indexOf(endStation);

        let stopsToChange = 0;
        let stopsAfterChange = 0;
        let stops = 0;


        if (startPoint === -1 ){
            return ` ${startStation} is NOT on  ${startLine} Line. Please check your departing station!`;
        }
        if (endingPoint === -1){
            return ` ${endStation} is NOT on  ${endLine} Line. Please check your arriving station!`;
        }
        if (startStation === endStation){
            return `Hey dude !!  ${startStation} && ${endStation} are the Same!!!.`;
        }
        

        if (startLine === endLine){
                //If the rider travils in the same line
                    
                    if ( startPoint > endingPoint){
                        stops = startPoint - endingPoint;
                    }else{
                        stops = endingPoint - startPoint;
                    }
                    
         }else {
                    //If the rider travils in different lines
                    
                    if ( startPoint > toParkStreet){
                        // From the Stat to Park Street
                        stopsToChange = startPoint - toParkStreet;
                    }else{
                        stopsToChange = toParkStreet - startPoint;
                    }
                    
                    if ( fromParkStreet > endingPoint){
                        // From Park Street to the End
                        stopsAfterChange = fromParkStreet - endingPoint;
                    }else{
                        stopsAfterChange = endingPoint - fromParkStreet;
                    }
                    stops = stopsToChange + stopsAfterChange;
                    
                }        
             return `${stops}  stops From ${startStation}  To  ${endStation} `;
           
    }else{ 
            //if the line name is NOT correct
            return `${startLine} OR ${endLine} is NOT correct. Please check your input and try again!`
         }
}


        //==========================RESULTS AFTER TESTING==================================//

        stopsBetweenStations("Orange", "Chinatown", "Green", "Hynes"); // "7  stops From Chinatown  To  Hynes "
        stopsBetweenStations("Red", "Central", "Green", "Hynes"); //"6  stops From Central  To  Hynes "

        //testing going back and forth--
        stopsBetweenStations("Red", "Alewife", "Green", "Kenmore"); //"11  stops From Alewife  To  Kenmore "
        stopsBetweenStations( "Green", "Kenmore", "Red", "Alewife"); //"11  stops From Kenmore  To  Alewife "

        //==========================TESTING THE BONUS====================================//

        // check if the starting station on the correct line! Or there is a mistake in the station name.
        stopsBetweenStations("Orange", "Alewife", "Green", "Hynes"); // " Alewife is NOT on  Orange Line. Please check your departing station!"


        //check if the ending station on the correct line! Or there is a mistake in the station name.
        stopsBetweenStations("Red", "Central", "Green", "Alewife"); //  " Alewife is NOT on  Green Line. Please check your arriving station!"


        // check if the rider start and end in the same distnation.
        stopsBetweenStations("Red", "Park Street", "Green", "Park Street"); //"Hey dude !!  Park Street && Park Street are the Same!!!."


        //check if the name of the starting line is correct.
        stopsBetweenStations("Orangggg", "Chinatown", "Green", "Hynes");  //"Orangggg OR Green is NOT correct. Please check your input and try again!"


        //check if the name of the ending line is correct.
        stopsBetweenStations("Orange", "Chinatown", "Greennnnnnnn", "Hynes");  //"Orange OR Greennnnnnnn is NOT correct. Please check your input and try again!"