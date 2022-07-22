function findSmallestIndex(arr) {
    let smallest = arr[0];
    let smallestInd = 0;
    let len = arr.length;
    
    for(let i = 0; i < len; i++) {
        if(arr[i].x < smallest.x) {
            smallest = arr[i];
            smallestInd = i;
        } else if(arr[i].x == smallest.x) {
            if(arr[i].y < smallest.y) {
                smallest = arr[i];
                smallestInd = i;
            }
        }
    }
    
    return smallestInd;
}

function selectionSort(arr) {
    let sorted = [];
    let len = arr.length;
    let buff = arr;
    
    for(let i = 0; i < len; i++) {
        let smallest = findSmallestIndex(buff);
        /* проблема */
        sorted.push(buff.splice(smallest, 1)[0])
    }
    
    return sorted;
}

function binarySearch(arr, item) {
    let low = 0;
    let high = arr.length - 1;
    
    while(low <= high) {
        let mid = low + high;
        let guess = arr[mid];
        
        if(guess.x == item.x && guess.y == item.y) return mid;
        
        if(guess.x > item.x || guess.x == item.x) high = mid - 1;
        else low = mid + 1;
    }
}

function findCell(arr, cell) {
    let sorted = selectionSort(arr);
    let res = binarySearch(sorted, cell);
    
    if(res) return res;
    else return false;
}

/*
let arr = [
    { x : 13, y : 2  },
    { x : 6,  y : 2 },
    { x : 6,  y : 12 },
    { x : 7,  y : 2  },
    { x : 12, y : 0  },
    { x : 7,  y : 10  },
    { x : 68, y : 7  },
    { x : 42, y : 3  }
];
console.log(arr)
arr = selectionSort(arr);
console.log(arr)
*/


























