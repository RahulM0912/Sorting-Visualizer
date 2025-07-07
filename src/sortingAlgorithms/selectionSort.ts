
export function getSelectionSortAnimations(arr: number[]) {
    let animations: number[][] = [];
    let n = arr.length;
    for(let i=0; i<n-1; i++) {
        let minIndex = i;
        for(let j=i+1; j<n; j++) {
            if(arr[j] < arr[minIndex]) {
                animations.push([i, minIndex]);
                animations.push([i, minIndex]);
                animations.push([i, minIndex, arr[i], arr[minIndex]]);
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        animations.push([i, minIndex]);
        animations.push([i, minIndex]);
        animations.push([i, minIndex, arr[i], arr[minIndex]]);
    }

    return {animations, arr};
}