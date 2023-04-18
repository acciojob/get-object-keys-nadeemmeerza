//your JS code here. If requir
const student ={	
		name : "john", 
	    age :35, 
	    city : "new york",
}

student.prototype.getKeys = function(){
			return Object.keys(this);
		} 

const myObject = Object.create(student);
const body = document.querySelector("body");
body.innerText = myObject.getKeys();
