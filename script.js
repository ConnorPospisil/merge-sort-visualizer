// Global variables
let array = [];
let arraySize = 30;
let delay = 100;  // Milliseconds between steps


// Sleep function - pauses execution
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



// Generate random array of heights between 50-350
function generateArray() {
    array = [];
    
    for (let i = 0; i < arraySize; i++) {
        // Math.random() gives 0-1, multiply by 300, round down, add 50
        array.push(Math.floor(Math.random() * 300) + 50);
    }
    
    displayArray();
}

// Convert array numbers into visual bars
function displayArray() {
    const container = document.getElementById('arrayContainer');
    container.innerHTML = '';  // Clear old bars
    
    // forEach loops through array: (value, index) => { }
    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');  // Apply CSS styling
        bar.style.height = value + 'px';  // Set height
        container.appendChild(bar);  // Add to page
    });
}

// Connect button to function (like addActionListener in Java)
document.getElementById('resetBtn').addEventListener('click', generateArray);

// Run on page load
generateArray();





// Merge sort algorithm (Async version) - can pause for animation
async function mergeSortAnimated(arr, left, right) {
    if (left >= right) {
        return;
    }
    
    // Find middle point
    const mid = Math.floor((left + right) / 2);
    
    // Recursively sort left half and right half
    // Wait for left half to sort
    await mergeSortAnimated(arr, left, mid);
    // Wait for right half to sort
    await mergeSortAnimated(arr, mid + 1, right);
    
    // Merge the two sorted halves, and wait for merge to complete
    await mergeAnimated(arr, left, mid, right);
}






/* Merge two sorted subarrays into one sorted array, it is also animated,
ie. it highlights and pauses between steps */
async function mergeAnimated(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    
    let i = 0;      // Index for leftArr
    let j = 0;      // Index for rightArr
    let k = left;   // Index for main array
    
    // Compare elements from left and right, take smaller one
    while (i < leftArr.length && j < rightArr.length) {
        // Highlight the bars we're comparing (turn them red)
        highlightBars([left + i, mid + 1 + j], 'comparing');
        await sleep(delay * 2);  // Pause so we can see it
        
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        
        // Update the display with new values
        displayArray();
        await sleep(delay);  // Pause again
        k++;
    }
    
    // Copy remaining elements from leftArr (if any)
    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        displayArray();
        await sleep(delay);
        i++;
        k++;
    }
    
    // Copy remaining elements from rightArr (if any)
    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        displayArray();
        await sleep(delay);
        j++;
        k++;
    }
    
    // Mark this section as sorted (turn green)
    for (let idx = left; idx <= right; idx++) {
        highlightBars([idx], 'sorted');
    }
}




/* Connect Start button to sorting
document.getElementById('startBtn').addEventListener('click', () => {
    mergeSort(array, 0, array.length - 1);
    displayArray();  // Redraw bars in sorted order
    console.log('Sorted!');
}); */

// Connect Start button to sorting, and make button async so we can await the sort
document.getElementById('startBtn').addEventListener('click', async () => {
    // Disable buttons during sort
    document.getElementById('startBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    
    // Run the animated sort
    await mergeSortAnimated(array, 0, array.length - 1);
    
    // Re-enable buttons
    document.getElementById('startBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;
    
    console.log('Sorting complete!');
});





// Change color of specific bars
function highlightBars(indices, className) {
    const bars = document.querySelectorAll('.bar');
    
    // Remove old highlighting from all bars
    bars.forEach(bar => {
        bar.classList.remove('comparing', 'sorted');
    });
    
    // Add new highlighting to specific bars
    bars.forEach((bar, idx) => {
        if (indices.includes(idx)) {
            bar.classList.add(className);
        }
    });
}