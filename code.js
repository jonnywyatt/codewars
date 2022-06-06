function mergeArrays(a, b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

function sumRanges(array) {
    return array.reduce((sum, [one, two]) => (sum + (two - one)), 0);
}

function checkForOverlap(current, intervalToCompare) {
    return current[0] <= intervalToCompare[1] && intervalToCompare[0] <= current[1]
}

function sumIntervals(intervals) {
    if (intervals.length === 1) return intervals[0][1] - intervals[0][0];
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < intervals.length; i++) {
        let compareIndex = 0
        while (compareIndex < intervals.length) {
            let intervalToCompare = intervals[compareIndex];
            if (i !== compareIndex && intervals[i] && checkForOverlap(intervals[i], intervalToCompare)) {
                intervals[i] = mergeArrays(intervals[i], intervalToCompare);
                // if there was an overlap, remove intervalToCompare from the array because it's now been merged
                intervals.splice(compareIndex, 1)
                // because intervalToCompare was removed, go to the next iteration without incrementing compareIndex, as it will already point to the next item in the array
                continue
            }
            compareIndex = compareIndex + 1
        }
    }
    return sumRanges(intervals);
}

module.exports = sumIntervals