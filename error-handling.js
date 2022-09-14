// 1.
function sum(array) {
  let sum = 0;
 
	for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


//1.
//tests
try{
let res = sum(null);
console.log(res);
} catch(error){
if(error instanceof TypeError){
console.log(`Wrong Type: ${error.message}`);
} else{
console.error(error.message)
}
}

//2.
function sayName(name){
  if(typeof name!= "string"){
   throw new TypeError("Invalid name! Must be a string!");
  }

	console.log(name);
}
// 2.
// tests
try{
	sayName("Alex");
	sayName(23);
} catch(error){
if(error instanceof TypeError){
console.error(error.name + ": " + error.message);
}
}


//3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}


//3. tests
try{
greet("GOOD Morning fellas!!");
greet(nowayjose);
greet(null);
}

catch(error){
console.error("Hello World")
}

