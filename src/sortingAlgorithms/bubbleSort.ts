export function getBubbleSortAnimations(array: number[]) {
    const animations: number[][] = [];
    let n = array.length;
    for(let i=n-1; i>=0; i--) {
        for(let j=0; j<=i-1; j++) {
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if(array[j] > array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
            animations.push([j, j+1, array[j], array[j+1]]);
        }
    }
    return {animations, array}
}