// Example code that breaks the specified TypeScript ESLint rules

const unusedVariable = 42; // This variable is declared but not used

function greet(name) {
    const message = "Hello, " + name; // Place breakpoint here for debugging
    console.log(message);
    return message;
} // Missing explicit return type and parameter type

class Greeter {
    message;
    constructor(msg) {
        this.message = msg;
    } // Missing property type declaration and parameter type
}
