Error handling – try(), catch() and finally
	Error handling is a way to manage exceptions (errors) that occur during code execution **without crashing the program**.
	Why use try-catch?
•	Prevents the program from stopping due to runtime errors.
•	Helps in debugging by showing custom error messages.
•	Improves user experience by handling failures smoothly
	How try-catch Works?
1.	The try block contains the code that might cause an error
2.	If an error occurs, throw Error(‘message’) is used to send the error to the catch() block
3.	The catch() block receives the error and handles it without stopping the whole program
4.	If no error occurs, the code inside try() runs normally, and catch is ignored


	Example: 
function divide(a, b) {
  try { // Code that may cause an error
    if (b == 0) throw Error("Can't divide by 0!"); // Throwing an error
    console.log(a / b); // Code runs if no error
  } catch (error) { // Code that runs if an error occurs
    console.log(error); // Catching and displaying the error
  }
finally { // Code that always runs (optional)
    console.log("Division function executed.");
  }
}
divide(12, 0); 
// Caught Error: Can't divide by 0!
Division function executed.

`error parameter` in catch(error)
Error.name – Name/type of error (referenceError, typeError etc)
Error.message – Error description (what went wrong)
Error.stack – Tracing error location (line number + call path of the error code)
