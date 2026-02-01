# Merge Sort Visualizer

An interactive web-based visualization of the merge sort algorithm, demonstrating the divide-and-conquer approach with animated step-by-step execution.

![Merge Sort Demo](Demo.png)

---

## Overview

This project visualizes how the merge sort algorithm works by animating the sorting process in real-time. Users can watch as the algorithm divides the array into smaller subarrays, sorts them, and merges them back together in order.

**Key Features:**
- Real-time visualization of merge sort algorithm
- Color-coded states (comparing, sorted)
- Adjustable animation speed
- Random array generation
- Clean, responsive interface

---

## How to Use

### Online (GitHub Pages)
Visit: `https://ConnorPospisil.github.io/merge-sort-visualizer/`

### Local Installation

1. Clone the repository:
```bash
git clone https://github.com/ConnorPospisil/merge-sort-visualizer.git
cd merge-sort-visualizer
```

2. Open `index.html` in your web browser

**No dependencies or build steps required!** Pure HTML, CSS, and JavaScript.

---

## How It Works

### The Algorithm

Merge sort is a divide-and-conquer algorithm that:

1. **Divide:** Splits the array into two halves recursively until each subarray has one element
2. **Conquer:** Sorts each subarray (single elements are already sorted)
3. **Combine:** Merges sorted subarrays back together in order

**Time Complexity:** O(n log n)  
**Space Complexity:** O(n)

### Visualization

- **Blue bars:** Unsorted elements
- **Red bars:** Elements being compared
- **Green bars:** Elements in their final sorted position

The animation uses `async/await` to pause execution between steps, making each comparison and swap visible to the user.

---

## Code Structure

### `index.html`
- Main HTML structure
- Contains the array container and control buttons

### `style.css`
- Styling for bars, buttons, and layout
- Color definitions for different states
- Flexbox layout for bar alignment

### `script.js`
- **`generateArray()`** - Creates random array of heights
- **`displayArray()`** - Renders array as visual bars
- **`mergeSortAnimated()`** - Recursive merge sort with animation
- **`mergeAnimated()`** - Merges two sorted subarrays with visual updates
- **`highlightBars()`** - Changes bar colors for visual feedback
- **`sleep()`** - Async delay function for animation timing

---

## Technical Highlights

- **Pure Vanilla JavaScript** - No frameworks or libraries
- **Async/await** - Clean asynchronous code for animation timing
- **DOM Manipulation** - Dynamic creation and styling of elements
- **Responsive Design** - Works on different screen sizes
- **ES6+ Features** - Arrow functions, template literals, const/let

---

## What I Learned

This was my first JavaScript project, coming from a background in Python, Java, and C. Key learnings:

- **JavaScript syntax and semantics** - Variables, functions, loops, and async programming
- **DOM manipulation** - Selecting, creating, and modifying HTML elements dynamically
- **Event handling** - Responding to user interactions with event listeners
- **CSS styling** - Layout with flexbox, color schemes, transitions
- **Algorithm visualization** - Breaking down algorithm steps for visual representation
- **Async/await patterns** - Managing asynchronous operations for smooth animations

---

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

---

## Future Enhancements

Potential features to add:
- Speed slider for adjustable animation speed
- Array size control
- Additional sorting algorithms (Quick Sort, Heap Sort, Bubble Sort)
- Step-by-step mode (manual control)
- Comparison counter
- Performance metrics display

---

## Project Files
```
merge-sort-visualizer/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # Sorting logic and animations
├── demo.png            # Screenshot for README
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Author

**Connor** (pospsl)  
Computer Science Student

*First JavaScript project - built to learn web development fundamentals and algorithm visualization.*

---

## Acknowledgments

- Merge sort algorithm concept from computer science fundamentals
- Visualization techniques inspired by [VisuAlgo](https://visualgo.net/)
- Built as a learning project to transition from Python/Java/C to JavaScript

---