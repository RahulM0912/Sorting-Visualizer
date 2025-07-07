
export function getInsertionSortAnimations(arr: number[]) {
    let animations: number[][] = [];
    let n = arr.length;
    for(let i=0; i<n; i++) {
        let j = i;
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([i, i, arr[i], arr[i]]);
        while(j>0 && arr[j-1] > arr[j]) {
            [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            animations.push([j-1, j]);
            animations.push([j-1, j]);
            animations.push([j-1, j, arr[j-1], arr[j]]);
            j--;
        }
    }

    return {animations, arr}
}