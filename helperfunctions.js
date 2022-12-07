function randChar(strLen = 20, arrLen = 10, useSpecialChar=false){
  function arrayOfRandomCharaters() {
    const special = "!@#$%^&*()_+";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    while (str.length < strLen) {
      str = str + alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return str;
  }

  let randStrings = [];
  while (randStrings.length < arrLen) {
    randStrings.push(arrayOfRandomCharaters())
  }
  return randStrings;
}


//Ex Data Structure is [ [{htmlElement},{},{}], [{},{},{}] ]
function nestedArrayToObject(z){
  let fine = z.reduce( (acc, val) => {
    let temp = {};
    val.forEach( ( j, idx ) => {
        temp[idx] = j.innerText;
    });
    acc.push(temp);
      return acc;
  }, [] )
  return fine;
}


// Sort and count words
class WordGames{
	constructor(delimiter = " "){
		this.textCountHash = {};
		this.sortedResults = [];
		this.properNouns = [];
		this.excludeCommonWords = ['the', 'they', 'them', 'and', 'is', 'a', 'of', 'for', 'was', 'as', 'to', 'from', 'at', 'are', 'its', 'with', 'that', 'it', 'has', 'be', 'been'];
		this.delimiter = delimiter;
  }

	countWords( input ){
		console.log("counting started");
		
		this.textCountHash = input.innerText.split(this.delimiter).reduce( (acc, val, idx) => {  	
			
			if(!this.excludeCommonWords.includes(val)){			

				acc[val]
				? acc[val]++ 
				: Object.assign(acc, { [val.replace(/([^A-z])/, '')] : 1 })	

			
			}							
			return acc				
		}, {});
	
		console.log("counting complete");	
		
		console.log( this.textCountHash );
		
		return this;
	}

	sortResults() {
		console.log( "sorting results!" )
		this.sortedResults = Object.entries(this.textCountHash).sort( (a, b) => {
			return  b[1] - a[1];
		})		
		return this;
	}
	
	findProperNouns() {
		
		this.properNouns = Object.entries(this.textCountHash).map( ( i ) => {
			if( i[0].charAt(0).search(/A-Z/) ) {
				return i;
			}
		})
		return this;		
	}
	
	printResults( limit = 10){
		console.log(" SORTED RESULTS ");
		for(let i = 0; i < limit; i++){			
			console.log( this.sortedResults[i] );
		}
	}
}

