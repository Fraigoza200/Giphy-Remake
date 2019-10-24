document.addEventListener('click', event => {
    if (event.target.className ==='animal'){
        let animal = event.target.dataset.animal

        let url = `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=Ew93dwWn010w0V9pwaDJ0FdsvVaYBNCF&limit=5`

        fetch(url) 
            .then(response => response.json())
            .then(gifs => {
                document.getElementById('gifDisp').innerHTML = ''
                gifs.data.forEach(gif => {
                    let gifElem = document.createElement('img')
                    gifElem.src = gif.images.original.url
                    document.getElementById('gifDisp').append(gifElem)
                    
                })
            })
    }
})

document.getElementById('addAnimal').addEventListener('click', event =>{
    event.preventDefault()
    let btnElem = document.createElement('button')
    btnElem.textContent = document.getElementById('newAnimal').nodeValue
    btnElem.dataset.animal = document.getElementById('newAnimal').nodeValue
    btnElem.className ='animal'
    document.getElementById('addAnimal').addEventListener('click', e =>{
        append(btnElem).value
    })
    document.getElementById('newAnimal').value = ''
})