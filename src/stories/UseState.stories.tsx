import React, {useMemo, useState} from 'react'

export default {
    title: "useState.demo"
}

function generateData() {
    console.log("generateData")
    return 1216546546874
}


export const Example1 = () => {
    console.log('Example');

    /*const initValue = useMemo(generateData,[])*/

    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={()=> setCounter(changer)}>+</button>
        {counter}
     </>
}

