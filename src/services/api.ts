
export async function Api(url: string){
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

    let results = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: query
        })
    })

    let countriesData = await results.json()
    return countriesData.data
}