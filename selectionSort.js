const length = 10000;
const min = -10000;
const max = 10000;
let randomNumbersArray = [];

for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbersArray.push(randomNumber);
};

function formatArray(arr) {
    return arr.map((n, i) => `[cell - ${i}, value - ${n}]`);
};

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            };
        };

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    };

    return arr;
};

const startTime = performance.now();
const sortedArray = selectionSort(randomNumbersArray);
const endTime = performance.now();

const formattedUpper = formatArray(sortedArray);
console.log("Sorted array to upper:", formattedUpper);

sortedArray.reverse();

const formattedLower = formatArray(sortedArray);
console.log("Sorted array to lower:", formattedLower);

const durationMs = endTime - startTime;

if (durationMs >= 1000) {
    console.log(`Sorting time: ${(durationMs / 1000).toFixed(3)} seconds`);
} else {
    console.log(`Sorting time: ${durationMs.toFixed(3)} ms`);
};

