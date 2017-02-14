function BinarySearchTree() {

    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    //inserting a key into BinarySearchTree
    this.insert = function(key) {
        var newNode = new Node(key);

        if (root === null) {
            rooy = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    var insertNode =function(node, newNode) {
        if (newNode.key < node.key) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    //In order traversal
    this.inOrderTraverse = function() {
        inOrderTraverseNode(root, printNode);
    }

    var inOrderTraverseNode = function(node, printNode) {
        if (node !== null) {
            inOrderTraverseNode(node.left, printNode);
            callback(node.key);
            inOrderTraverseNode(node.right, printNode);
        }
    }

    this.printNode = function(value) {
        console.log(value);
    }

    //pre-order traversal
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    }

    var preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }
}