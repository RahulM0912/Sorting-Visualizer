
function partition(arr: number[], low: number, high: number, animations: number[][]): number {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while(i<j) {
        while(arr[i]<= pivot && i<=high-1) {
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, j, arr[i], arr[j]])
            i++;

        }
        while(arr[j]>pivot && j>=low+1) {
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, j, arr[i], arr[j]])
            j--;
        }

        if(i<j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, j, arr[i], arr[j]])
        }

    }
    [arr[low], arr[j]] = [arr[j], arr[low]];

    animations.push([low, j]);
    animations.push([low, j]);
    animations.push([low, j, arr[low], arr[j]])

    return j;
}

function quickSort(arr: number[], low: number, high: number, animations: number[][]) {
    if(low < high) {
        let pivotIndex = partition(arr, low, high, animations);
        quickSort(arr, low, pivotIndex-1, animations);
        quickSort(arr, pivotIndex+1, high, animations)
    }
    
}

export function getQuickSortAnimations(arr: number[]) {
    let animations: number[][] = [];
    quickSort(arr, 0, arr.length-1, animations)
    return {animations, arr}
}