function Set() {
    var items = {};

    this.has = function(value) {
        return items.hasOwnProperty(value);
    };

    this.add = function(value) {
        if(!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    this.remove = function(value) {
        if(this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    this.clear = function() {
        items = {};
    };

    this.size = function() {
        return Object.keys(items).length;
    };

    this.values = function() {
        return Object.keys(items);
    };

    //Union - returns a new set with elements from both sets
    this.union = function(otherSet) {
        var unionSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }

    //Intersection - returns a new set with elements that exist in both
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if(otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    //Difference - returns new set with all elements that exist in first, but not second set
    this.difference = function(otherSet) {
        var differenceSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }

    //Subset - confirms whether a set is a given subset of another
    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }
}