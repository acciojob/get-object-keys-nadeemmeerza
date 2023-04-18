//your JS code here. If requir
function student(name, age, city){	
		this.name = name;
	    this.age = age; 
	    this.city = city;
}

student.prototype.getKeys = function(){
			return Objects.keys(this);
		} 