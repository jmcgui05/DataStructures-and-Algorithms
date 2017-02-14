//Create LinkedList Class
//Create Node class inside the LinkedList
//Assign element and next in node
//assign length and head of LinkedList
function LinkedList() {


//Create an append function
//create a new node
//create a variable current to track current element
//check if the list is empty (head is null)
//if head is null, assign node to head
//else, assign head to current
//while current.next exists, assign current.next to current
//then, the final current.next = node
//increment the length


//create an insert method that takes a position and element as args
//check for out of bounds position by comparing against 0 and length
//create a new node with element
//assign the head to a variable current to track
//create a previos var to track the last element
//create an index variable and set to 0
//check if the position is equal to 0, if so set node.next to current, and head to node
//else iterate over list while the incremented index is < position
//set the previous to the current variable, and current to current.next
//then set node.next to the current, and previous.next to the node
//then increment length
//return true
//else return false



//create a removeAt method that takes a position args
//check for out of bounds position by checking against -1 and length
//set current variable to head
//create previous var for tracking and index var set to 0
//check if position is 0, if so, set head to current.next
//else iterate over list while incremented index < position
//set previous to current and current to current.next
//then set previous.next to current.next
//then decrement length
//return the current.element (element that was removed)

}

//get childNodes className
function getClassNames(node, className) {
    if(!node.hasChildNodes()) {
        if(node.className = className) {
            return node;
        }
    } else {
        var children = Array.prototype.slice.call(node.childNodes);
        children.forEach(function(child) {
            if (child.className === className) {
                results.push(child);
            }
        })
    }
}

