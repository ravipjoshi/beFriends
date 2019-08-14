var friends = require("../app/data/friends");

module.exports=function(app){


app.get("/api/friends",function(req,res){
    res.json(friends);
});

app.post("/api/friends", function(req, res) {
 
    
		var surveyResults = req.body.scores;
	
		for (var i=0; i<surveyResults.length; i++) {
			surveyResults[i] = parseInt(surveyResults[i]);
		}

		var bestDifference = 999999; 
		var bestMatch = 0; 


		for (i=0; i < friends.length; i++) {

		
			var tempDifference = difference(surveyResults, friends[i].scores);

		
			console.log("difference between", surveyResults, "and", friends[i].name, friends[i].scores, "=", tempDifference);

		
			if (tempDifference < bestDifference) {
				bestDifference = tempDifference;
				bestMatch = i;
			}
		}

		function difference(array1, array2) {

		
			var differenceAmount=0;
			
			for (var i=0; i<array1.length; i++) {
				differenceAmount += Math.abs(array1[i] - array2[i]);
			}
			
			
			return differenceAmount;
		}


		res.send(friends[bestMatch]);

      

  });



}

  
 
