import { useEffect, useState } from "react"
import { getMergeSortAnimations } from "../sortingAlgorithms/mergeSort";
import { getBubbleSortAnimations } from "../sortingAlgorithms/bubbleSort";
import { getQuickSortAnimations } from "../sortingAlgorithms/quickSort";
import { getSelectionSortAnimations } from "../sortingAlgorithms/selectionSort";
import { getInsertionSortAnimations } from "../sortingAlgorithms/insertionSort";

export function SortingVisualizer() {
    const [array, setArray] = useState<number[]>([40, 50, 60, 10, 20, 30]);
    const [arrayLen, setArrayLen] = useState<number>(3);
    const [animationSpeed, setAnimationSpeed] = useState<number>(1);
    const [isDisableToolBar, setIsDisableToolBar] = useState<boolean>(false);
    const [sortingAlgo, setSortingAlgo] = useState<string>("");
    const INITIAL_COLOR = "DodgerBlue";
    const COMPARE_COLOR = "red";

    const arrayReset = () => {
        const arr: number[] = [];
        for(let i=0; i<=arrayLen; i++) {
            arr.push(Math.floor(Math.random()*700) + 5)
        }
        setArray(arr);
        const arrayBars = document.getElementsByClassName(
          "array-bar"
        ) as HTMLCollectionOf<HTMLElement>;
        Array.from(arrayBars).forEach((bar) => {
          bar.style.backgroundColor = INITIAL_COLOR;
        });
    }

    const mergeSort = () => {
      setIsDisableToolBar(true);
      let temp: number[] = [];
      for(let i=0; i<array.length; i++) {
        temp.push(array[i]);
      }
      const arr = getMergeSortAnimations(temp);
      const animations = arr.animations;
      const sortedArr = arr.array;
      // const sortedFlags = new Array(array.length).fill(false);


      console.log((`sortedArr: ${sortedArr}`))
      console.log((`animations: ${animations}`))
      const arrayBars = Array.from(
        document.getElementsByClassName("array-bar")
      ) as HTMLElement[]; 
      for (let i = 0; i < animations.length; i++) {
        const delay = i * (6-animationSpeed) * 100;
        const isColorStep  = i % 3 !== 2;
        const isHighlight  = i % 3 === 0;

        if (isColorStep) {
          const [a, b] = animations[i] as [number, number];

          setTimeout(() => {
            if (isHighlight) {
              arrayBars[a].style.backgroundColor = COMPARE_COLOR;
              arrayBars[b].style.backgroundColor = COMPARE_COLOR;
            } else {
              arrayBars[a].style.backgroundColor = INITIAL_COLOR;
              arrayBars[b].style.backgroundColor = INITIAL_COLOR;
            }
          }, delay);

        } else {
          const [barIdx, newHeight] = animations[i] as [number, number];
          
          setTimeout(() => {
            const bar = arrayBars[barIdx];
            const barStyle = bar.style;
            barStyle.height = `${newHeight}px`;

            if (arrayLen <= 9) bar.textContent = `${newHeight}`;
   
          }, delay);  
        }

      }
  
      // Finally sync React state to the sorted order
      setTimeout(() => {
        setIsDisableToolBar(false);
        setArray(sortedArr)
      }, animations.length * (6-animationSpeed) * 100 + 5);
      
    };

    const quickSort = () => {
      setIsDisableToolBar(true);
      let temp: number[] = [];
      for(let i=0; i<array.length; i++) {
        temp.push(array[i]);
      }
      const arr = getQuickSortAnimations(temp);
      const animations = arr.animations;
      const sortedArr = arr.arr;
      console.log((`sortedArr: ${sortedArr}`))
      console.log((`animations: ${JSON.stringify(animations)}`))
      const arrayBars = Array.from(
        document.getElementsByClassName("array-bar")
      ) as HTMLElement[]; 

          for(let i=0; i<animations.length; i++) {
            const delay = i * (6-animationSpeed) * 100;
            const isColorStep = (i%3 !== 2);
            const isHighlight = i%3 === 0;

            if(isColorStep) {
              const [a, b] = animations[i] as [number, number];
              setTimeout(() => {
                if(isHighlight) {
                arrayBars[a].style.backgroundColor = COMPARE_COLOR;
                arrayBars[b].style.backgroundColor = COMPARE_COLOR;
              } else {
                arrayBars[a].style.backgroundColor = INITIAL_COLOR;
                arrayBars[b].style.backgroundColor = INITIAL_COLOR;
              }
              }, delay)
            }
            else {
              const [a, b, h1, h2] = animations[i] as [number, number, number, number];
              setTimeout(() => {
                if(arrayLen<=9) {
                  arrayBars[a].textContent = `${h1}`;
                  arrayBars[b].textContent = `${h2}`;
                }
                arrayBars[a].style.height = `${h1}px`;
                arrayBars[b].style.height = `${h2}px`;
              }, delay)
            }
          }
      


      setTimeout(() => {
        setIsDisableToolBar(false);
        setArray(sortedArr)
      }, animations.length * (6-animationSpeed) * 100 + 5);
    }

    const bubblesort = () => {
      setIsDisableToolBar(true);
      let temp: number[] = [];
      for(let i = 0; i<array.length; i++) {
        temp.push(array[i]);
      }

      const arr =  getBubbleSortAnimations(temp);
      const animations = arr.animations;
      const sortedArr = arr.array;
      
      console.log("srotedarray: ", sortedArr)
      console.log("animations: ", JSON.stringify(animations)) 

      const arrayBars = Array.from(
        document.getElementsByClassName('array-bar')
      ) as HTMLElement[];

      for(let i=0; i<animations.length; i++) {
        let delay = i*animationSpeed*100;
        let isColorStep = i%3!==2;
        let isHighlight = i%3===0;
        if(isColorStep) {
          const [a, b] = animations[i] as [number, number];
            setTimeout(() => {
              if(isHighlight) {
              arrayBars[a].style.backgroundColor = COMPARE_COLOR;
              arrayBars[b].style.backgroundColor = COMPARE_COLOR;
            } else {
              arrayBars[a].style.backgroundColor = INITIAL_COLOR;
              arrayBars[b].style.backgroundColor = INITIAL_COLOR;
            }
            }, delay)
          
        } else {
          const [a, b, h1, h2] = animations[i] as [number, number, number, number];
          setTimeout(() => {
            if(arrayLen<=9) {
              arrayBars[a].textContent = `${h1}`;
              arrayBars[b].textContent = `${h2}`;
            }
            arrayBars[a].style.height = `${h1}px`;
            arrayBars[b].style.height = `${h2}px`;
          }, delay)
        }
      }

      console.log("srotedarray: ", sortedArr)

      
      setTimeout(() => {
        setIsDisableToolBar(false)
        setArray(sortedArr)
      }, animations.length * (6-animationSpeed) * 100 + 5)

    }

    const selectionSort = () => {
      setIsDisableToolBar(true);
      let temp: number[] = [];
      for(let i = 0; i<array.length; i++) {
        temp.push(array[i]);
      }

      const arr =  getSelectionSortAnimations(temp);
      const animations = arr.animations;
      const sortedArr = arr.arr;
      
      console.log("srotedarray: ", sortedArr)
      console.log("animations: ", JSON.stringify(animations));

      const arrayBars = Array.from(
        document.getElementsByClassName('array-bar')
      ) as HTMLElement[];

      for(let i=0; i<animations.length; i++) {
        const delay = i * (6-animationSpeed) * 100;
        const isColorStep = i%3 !== 2;
        const isHighlight = i%3 === 0;

        if(isColorStep) {
          const [a, b] = animations[i] as [number, number];
          setTimeout(() => {
            if(isHighlight) {
              arrayBars[a].style.backgroundColor = COMPARE_COLOR;
              arrayBars[b].style.backgroundColor = COMPARE_COLOR;
            }
            else {
              arrayBars[a].style.backgroundColor = INITIAL_COLOR;
              arrayBars[b].style.backgroundColor = INITIAL_COLOR;
            }
          }, delay)
        }
        else {
          const [a, b, h1, h2] = animations[i] as [number, number, number, number];
          setTimeout(() => {
            if(arrayLen <= 9) {
              arrayBars[a].textContent = `${h1}`;
              arrayBars[b].textContent = `${h2}`;
            }
            arrayBars[a].style.height = `${h1}px`;
            arrayBars[b].style.height = `${h2}px`;
          }, delay)
        }
      }


      setTimeout(() => {
        setIsDisableToolBar(false)
        setArray(sortedArr)
      }, animations.length * (6-animationSpeed) * 100 + 5)

    }

    const insertionSort = () => {
      setIsDisableToolBar(true);
      let temp: number[] = [];
      for(let i = 0; i<array.length; i++) {
        temp.push(array[i]);
      }

      const arr =  getInsertionSortAnimations(temp);
      const animations = arr.animations;
      const sortedArr = arr.arr;
      
      console.log("srotedarray: ", sortedArr)
      console.log("animations: ", JSON.stringify(animations));

      const arrayBars = Array.from(
        document.getElementsByClassName('array-bar')
      ) as HTMLElement[];

      for(let i=0; i<animations.length; i++) {
        const delay = i * (6-animationSpeed) * 100;
        const isColorStep = i%3 !== 2;
        const isHighlight = i%3 === 0;

        if(isColorStep) {
          const [a, b] = animations[i] as [number, number];
          setTimeout(() => {
            if(isHighlight) {
              arrayBars[a].style.backgroundColor = COMPARE_COLOR;
              arrayBars[b].style.backgroundColor = COMPARE_COLOR;
            }
            else {
              arrayBars[a].style.backgroundColor = INITIAL_COLOR;
              arrayBars[b].style.backgroundColor = INITIAL_COLOR;
            }
          }, delay)
        }
        else {
          const [a, b, h1, h2] = animations[i] as [number, number, number, number];
          setTimeout(() => {
            if(arrayLen <= 9) {
              arrayBars[a].textContent = `${h1}`;
              arrayBars[b].textContent = `${h2}`;
            }
            arrayBars[a].style.height = `${h1}px`;
            arrayBars[b].style.height = `${h2}px`;
          }, delay)
        }
      }


      setTimeout(() => {
        setIsDisableToolBar(false)
        setArray(sortedArr)
      }, animations.length * (6-animationSpeed) * 100 + 5)
    }

    const handleSortAlgo = () => {
      sortingAlgo === 'merge'? mergeSort()
      : sortingAlgo === 'quick'? quickSort()
      : sortingAlgo === 'selection'? selectionSort()
      : sortingAlgo === 'bubble'? bubblesort()
      :sortingAlgo === 'insertion'?insertionSort()
      :''
    }

    const setCurrSortingAlgo = (algo: string) => {
      setSortingAlgo(algo)
      console.log("algo Selected", algo)
    }

    

    useEffect(() => {
        arrayReset();
    }, [arrayLen]);

    return <div className="w-screen bg-gray-200">
      <div className="flex min-w-screen items-center justify-between bg-cyan-900 py-5 px-2" style={{
          pointerEvents: isDisableToolBar? 'none': 'auto',
          opacity: isDisableToolBar?0.7: 1
      }}>
        <div className="flex items-center space-x-4">
            <button
            className="px-3 py-1 bg-blue-500 text-xs text-white rounded cursor-pointer"
            onClick={arrayReset}
            >
            Generate New Array
            </button>
            <label className="flex items-center text-xs text-white space-x-2">
            <span>Size:</span>
            <input
                type="range"
                min={3}
                max={100}
                value={arrayLen}
                onChange={(e) => setArrayLen(Number(e.currentTarget.value))}
            />
            <span>{arrayLen + 1}</span>
            </label>
            <label className="flex items-center text-xs text-white space-x-2">
            <span>Speed:</span>
            <input
                type="range"
                min={1}
                max={5}
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(Number(e.currentTarget.value))}
            />
            <span>{animationSpeed }</span>
            </label>
        </div> 
        <div className="flex gap-x-2">
            <button 
              className={`px-3 py-1 bg-blue-500 text-white text-xs rounded cursor-pointer ${sortingAlgo === 'merge'?'bg-green-700':'bg-blue-500'}`}
              onClick={() => setCurrSortingAlgo('merge')}>Merge Sort</button>
            <button 
              className={`px-4 py-1 bg-blue-500 text-white text-xs rounded cursor-pointer ${sortingAlgo === 'quick'?'bg-green-700':'bg-blue-500'}`} 
              onClick={() => setCurrSortingAlgo('quick')}>Quick Sort</button>
            <button 
              className={`px-4 py-1 bg-blue-500 text-white text-xs rounded cursor-pointer ${sortingAlgo === 'selection'?'bg-green-700':'bg-blue-500'}`} 
              onClick={() => setCurrSortingAlgo('selection')}>Selection Sort</button>
            <button 
              className={`px-4 py-1 bg-blue-500 text-white text-xs rounded cursor-pointer ${sortingAlgo === 'bubble'?'bg-green-700':'bg-blue-500'}`} 
              onClick={() => setCurrSortingAlgo('bubble')}>Bubble Sort</button>
            <button 
              className={`px-4 py-1 bg-blue-500 text-white text-xs rounded cursor-pointer ${sortingAlgo === 'insertion'?'bg-green-700':'bg-blue-500'}`} 
              onClick={() => setCurrSortingAlgo('insertion')}>Insertion Sort</button>
            {
              sortingAlgo !== ''?<button className="px-4 py-1 bg-violet-500 text-white text-xs rounded cursor-pointer" onClick={handleSortAlgo}>Sort!</button>:''
            }
        </div>
      </div>

      <div className="min-h-screen flex justify-center items-start space-x-1 bg-gray-200 rounded-b-lg">
        {array.map((value, i) => (
          <div
            key={i}
            className="array-bar text-white text-xs text-center"
            style={{
              backgroundColor: INITIAL_COLOR,
              height: `${value}px`,
              width: `${Math.floor(300 / arrayLen)}px`,
            }}
          >
            {arrayLen <= 9 ? value : ""}
          </div>
        ))}
      </div>  
    </div>
}