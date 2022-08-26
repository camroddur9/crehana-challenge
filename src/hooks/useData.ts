import {useState, useEffect } from 'react'

const useData = async(url: string) => {
    const [dataCountries, setData] = useState({})

    const query: any = 
    `query {
        countries {
            code
            name
            phone
            emoji
            emojiU
            capital
            currency
            languages {
                code
                name
            }
            continent {
                code
                name
            }
        }
    }`

    await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: query
        })
    })
    .then(response => response.json())
    .then(data => {
        setData(data.data)
        return dataCountries
    })

    
}

export default useData