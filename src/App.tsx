import { useState } from 'react'
import './App.css'
import Numbers from './Numbers/Numbers';

function App() {

  const [numbers, setNumbers] = useState<number[]>([]);

  const getRandomNumbers = (count: number): number[] => {
    const numbersArray: number[] = [];
    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(5 + Math.random() * (36 + 1 - 5));
      numbersArray.push(randomNumber);
    };
    const sortedNumbers = numbersArray.sort();
    return sortedNumbers;
  }
  setNumbers(getRandomNumbers(5).sort());
  console.log(numbers)
return (
   <>
     <Numbers {numbers[1]} />
   </>
)


}



//  return(
//      for(let i = 0; i < numbers.length; i++){
//        <Numbers {numbers[i]}/>
//      }
//  )
//
// }

export default App
