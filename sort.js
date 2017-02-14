//Merge Sort O(n log n)
var mergeSortRec = function(array) {
    var length = array.length;
    if (length === 1) {
        return array;
    }

    var mid = Math.floor(length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
};

var merge = function(left, right) {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;

    while(indexLeft < left.length && ir < right.length) {
        if(left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft++]) 
            
        } else {
            result.push(right[indexRight++]);
        }
    }

    while(indexLeft < left.length){
        result.push(left[indexLeft++]);
    }

    while(indexRight < right.length) {
        result.push(right[indexRight++]);
    }
    return result;
}


//Quick Sort - O (n log n)
function quick(array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);

        if(left < index -1) {
            quick(array, left, index - 1);
        }
        if(index < right) {
            quick(array, index, right);
        }
    }
};

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)];
    var l = left;
    var r = right;

    while(l <= r) {
        while(array[l] < pivot) {
            l++;
        }
        while(array[r] > pivot) {
            r--;
        }
        if (l <= r) {
            
        }
    }
}
