const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const bubble_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

const selection_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
    return array;
};

const quick_sort = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        quick_sort(array, low, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, high);
    }
    return array;
};

const partition = (array, low, high) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};