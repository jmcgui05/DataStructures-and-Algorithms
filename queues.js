//create a queue
function Queue() {
    // a queue uses an array to store data
    var queueData = [];

    // a queue should have 6 functions (enqueue, dequeue, front, isEmpty, size, print)
    this.enqueue = function(item) {
        queueData.push(item);
    }

    this.dequeue = function() {
        return queueData.shift();
    }

    this.front = function() {
        return queueData[0];
    }

    this.isEmpty = function() {
        return queueData.length == 0;
    }

    this.size = function() {
        return queueData.length;
    }

    this.print = function() {
        console.log(queueData.toString());
    }
}

//create an instance of the Queue
var ticketQ = new Queue();

//populate the ticketQ
var items = ['ticket1', 'ticket2','ticket3','ticket4','ticket5'];
items.forEach(function(element) {
    ticketQ.enqueue(element);
});

//dequeue an item
ticketQ.dequeue(); //=> 'ticket2','ticket3','ticket4','ticket5'

//get the first item in the queue
ticketQ.front(); //=> 'ticket2'

//check if it is empty
ticketQ.isEmpty(); //=> false

//check the queue size
ticketQ.size(); //=> 4

//print the contents of the queue
ticketQ.print(); //=> 'ticket2','ticket3','ticket4','ticket5'


//Create a priority Queue
function priorityQueue() {
    var items = [];

    function QueueElement (element, priority) {
        this.element = element;
        this.priority = priority;
    };

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);

        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if(!added) {
                items.push(queueElement);
            }
        }
    }
}

//Create a circular queue
function hotPotato (nameList, num) {
    var queue = new Queue();

    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated from the hot potato game');
    }
    return queue.dequeue();
}

var names = ['John', 'Jack', 'Camilla', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('The Winner is: ', winner);