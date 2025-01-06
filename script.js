function firstNonRepeatedChar(str) {
 for (i=0;i<str.length;i++)
	 {
		 if(str[i]!=str[i+1])
			console.log(i);
		 else
			 console.log("null")
				
			})
			 
			 

	 }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
