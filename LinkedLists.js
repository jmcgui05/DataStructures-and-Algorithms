//Create a linkedlist
function LinkedList() {

    //LinkedList uses a Node function
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    //set the length and the head
    var length = 0;
    var head = null;

    //add an element to the end of list
    this.append = function(element) {
        var node = new Node(element),
            current;
        
        //two possible scenarios: 
        // 1=> the list is empty to add element and assign as head
        // 2=> iterate the list to find last node and assign as the last current.next
        if (head === null) {
            head = node;
        } else {
            current = head;
            //loop list until you find last item
            while (current.next) {
                current = current.next;
            }

            //get the last item and assign next to node to make the link.
            current.next = node;
        }
        //update the size of list
        length++;
    }

    //insert at specific position
    this.insert = function(position, element) {
        //check for out of bound position
        if (position >= 0 && position <= length) {

            var node =new Node(element),
                current = head,
                previous,
                index = 0;
            
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;

            return true;
        } else {
            return false;
        }
    }

    //remove from specific position
    this.removeAt = function(position) {

        //two possible scenarios: 
        // 1=> remove the first element
        // 2=> remove any element but the first one

        //check for out of bound values
        if(position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;
            //remove first item
            if( position === 0) {
                head = current.next;
            } else{
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }

                //link previous with currents next, skip it to remove
                previous.next = current.next;
            }
            length--;

            return current.element;
        } else {
            return null;
        }
    }

    //remove specific element from list
    this.remove = function(element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    }

    //get index of specific element or -1 if not found
    this.indexOf = function(element) {
        var current = head,
            index = 0;
        while(current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1
    }

    //is the list empty
    this.isEmpty = function() {
        return length == 0;
    }

    //get the size of the list
    this.size = function() {
        return length;
    }

    //stringify the list
    this.toString = function() {
        var current = head,
            string = '';
        
        while(current) {
            string += (current.element + ' ');
            current = current.next;
        }
        return string;

    }

    //get the head of the list
    this.getHead = function() {
        return head;
    }
}