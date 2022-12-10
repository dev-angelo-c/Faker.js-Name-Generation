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



// Copy the text from one field and paste it into another element.
// Assumes that date and subtitle elements contain similar row heights.
// Limited use I suppose but fun. 
// Possible ways to improve include:
// using a mouse as the selector
// highlighting the selected and allowing the user to 
// zoom in or out. parents/children elements. 
function copyFrom(){
  // enable mouse element selection.
  // open popup that indicates you're capturing for the selector application.
  // warn about possible failures. mitigate their impact. 
  let from = $$(".classNameFrom"); // $$ === document.querySelectorAll('.date')
  let moveTo = $$(".subtitle"); // $$ === document.querySelectorAll('.date')
  
  if( ( moveTo.length - from.length < 3) &&  ( moveTo.length - from.length > -3) ) {
    console.log(" Within bounds of tolerance limits")
  }else{
    console.log("!!! OUT OF BOUNDS, YOU MAY NOT LIKE THE RESULTS YOU SEE ")
  }

  moveTo.forEach( (i, idx) => {
    let x = document.createElement('span');
    x.innerText = Array.from(from)[idx].innerText;

    i.appendChild(x);
  })
}