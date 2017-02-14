function HashTable() {
    var table = [];

    var djb2HashCode = function(key) {
        var hash = 5381;

        for(var i =0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        //to work with lower numbers, use the remainder of the hash number using arbitrary number
        return hash % 1013;
    };

    this.put = function(key, value) {
        var position = djb2HashCode(key);
        console.log('Position: ', position, ' key: ', key);
        table[position] = value;
    };

    this.get = function(key) {
        return table[djb2HashCode(key)];
    };

    this.remove= function(key) {
        table[djb2HashCode(key)] = undefined;
    }
}