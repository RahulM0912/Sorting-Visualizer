
function merge(
  mainArr: number[],
  auxArr: number[],
  low: number,
  mid: number,
  high: number,
  animations: number[][]
) {
  let k = low;
  let i = low;
  let j = mid+1;

  while(i<=mid && j<=high) {
    animations.push([i, j]);
    animations.push([i, j]);
    if(auxArr[i] <= auxArr[j]) {
      animations.push([k, auxArr[i]]);
      mainArr[k++] = auxArr[i++];
    }
    else {
      animations.push([k, auxArr[j]]);
      mainArr[k++] = auxArr[j++];
    }
  }

  while(i<=mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxArr[i]]);
    mainArr[k++] = auxArr[i++];
  }

  while(j<=high) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxArr[j]]);
    mainArr[k++] = auxArr[j++];
  }
}

function mergeSort(
  mainArr: number[],
  low: number,
  high: number,
  auxArr: number[],
  animations: number[][]  
) {
  if(low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(auxArr, low, mid, mainArr, animations);
  mergeSort(auxArr, mid+1, high, mainArr, animations);
  merge(mainArr, auxArr, low, mid, high, animations);

}

export function getMergeSortAnimations(
  array: number[]
): any {
  const animations: number[][] = [];
  if (array.length <= 1) return animations;
  const auxiliaryArray = array.slice();
  mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
  return {array, animations};
}
