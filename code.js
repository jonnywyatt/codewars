const checkForOverlap = (otherInterval, currentInterval) => {
    return (otherInterval[0] == currentInterval[0] && otherInterval[1] == currentInterval[1]) ||
    (currentInterval[0] < otherInterval[0] && currentInterval[1] < otherInterval[0]) ||
    (currentInterval[0] > otherInterval[1] && currentInterval[1] > otherInterval[1])
}

module.exports = function sumIntervals(intervals) {
    console.log(intervals);
    intervals = intervals.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    })
//   sums interval if array contains only one interval
    if (intervals.length == 1) return (intervals[0][1] - intervals[0][0]);
    let lowestInterval = intervals[0];
    let a = lowestInterval[0];
    let b = lowestInterval[1];
    let inSequence = [];
    let overlap = [];
    //  check lowest interval against array of intervals
    //  push to either inSequence, or overlap
    for (var i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i]
        // loop through intervals
        // for each interval
        // check against current interval, for an overlap
        for (var j = 0; j < intervals.length; j++) {
            if (j !== i) { // only compare currentInterval with the other items, not with itself
                const otherInterval = intervals[j]
                if (checkForOverlap(otherInterval, currentInterval)){
                    inSequence.push(currentInterval);
                } else overlap.push(currentInterval);
            }
        }
    }
    // [
    //      [ -7, 3 ] ]
    //      [ 10, 14 ],
    //      [ 14, 19 ],
    //      [ 18, 20 ],
    //   remove duplicates
    let set = Array.from(new Set(inSequence.map(JSON.stringify)), JSON.parse);
    let merger = [];
// if overlap is empty, sum intervals and return
// if not, flatten, merge lowest/highest into new interval,
// pass merger into inSequence, and return function with inSequence as the parameter
    if (overlap.length == 0) {
        let results = 0;
        for (interval of set) {
            let sum = interval[1] - interval[0];
            results += sum;
        }
        return results;
    }
    overlap.unshift(lowestInterval)
    overlap = overlap.flat();
    merger.push(Math.min(...overlap));
    merger.push(Math.max(...overlap));
    inSequence.unshift(merger);
    return sumIntervals(inSequence);
}


const intervals = [ [ 19, 20 ], [ 17, 19 ], [ 10, 14 ], [ 9, 10 ], [ -7, 3 ] ]
const output = []

// i = 0 - [ [ 19, 20 ] ]
// i = 1 - [ [ 17, 20 ] ]
// i = 2 - [ [ 17, 20 ], [ 10, 14 ] ]
// i = 3 - [ [ 17, 20 ], [ 9, 14 ] ]
// i = 4 - [ [ 17, 20 ], [ 9, 14 ], [ -7, 3 ] ]

// array reduce
sum = 0
sum = 3
sum = 8
sum = 18

