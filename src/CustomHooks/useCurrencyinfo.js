import {useEffect, useState} from 'react'

 
function useCurrencyinfo(currency){
    const [data, setData] = useState({})
    // {} we include it because if response is not come then no failer occuire
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((respons)=> respons.json())
        .then((respons)=>setData(respons[currency]))
        console.log(data);
    }, [currency])
    //console.log(data);
    return data
}

export default useCurrencyinfo;