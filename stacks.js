// create a stack
function Stack() {

    //stacks use an array to store the stack data;
    var stackItems = [];

    //Stacks should have 7 functions (push, pop, peek, isEmpty, clear, size, print)
    this.push = function(item) {
        stackItems.push(item);
    };

    this.pop = function() {
        return stackItems.pop();
    }

    this.peek = function() {
        return stackItems[stackItems.length-1];
    }

    this.isEmpty = function() {
        return stackItems.length == 0;
    }

    this.clear = function() {
        stackItems = [];
    }

    this.size = function() {
        return stackItems.length;
    }

    this.print = function() {
        console.log(stackItems.toString());
    }

}

//create an instance of your stack
var todoStack = new Stack();

//add items
var toDos = ["Do Laundry", "Grocery Shopping", "Wash Car", "Walk Dog", "Study Data Structures"];
toDos.forEach(function(element) {
    todoStack.push(element);
});

//see the last entry
todoStack.peek() //=> "Study Data Structures"

//remove the last element
todoStack.pop(); //=> "Study Data Structures"

//print the contents of the stack
todoStack.print(); //=> "Do Laundry", "Grocery Shopping", "Wash Car", "Walk Dog"

//check if the stack isEmpty
todoStack.isEmpty(); //=> false


