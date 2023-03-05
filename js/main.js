const url = 'https://api.adviceslip.com/advice'
const generateQuotes = async () =>{
    const quotesData = await fetch(url).then(response => response.json())
    advice_id.textContent = quotesData.slip.id
    quotes.textContent = `"${quotesData.slip.advice}"` 
}

generateQuotes()