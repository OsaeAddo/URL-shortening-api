// Nav related
const menu = document.querySelector('.menu-btn')
const close = document.querySelector('.close')
const navMenu = document.querySelector('.nav-menu')

// Shorten url Form
const shortenForm = document.querySelector('.main-2-shorten')

// Url Input
const inputUrl = document.getElementById('url-input')


//*************** Nav functionalities   *****************
function toggleNav() {
    navMenu.classList.toggle('show-nav-menu');
}

function windowOnClick (event) {
    if (event.target === navMenu){
        toggleNav();
    }
}



//****************** Url shortening functionalities  ******************
// Error handling
const empty = () => {
    //ToDo: Add error messages
    return false
}

// Input checks functionality
const takeUserInput = () => {
    const input = document.getElementById("url-input") // Incomplete
    const userInput = input.value 
    input.value = ""
    const url = userInput === "" ? empty() : userInput
    console.log(url)
    return url
}

// Display functionalities
const displayShortenedContainer = (div) => {
    const shortUrlsContainer = document.querySelector('.short-urls-container')
    shortUrlsContainer.style.display = "block"
    shortUrlsContainer.prepend(div)
}

const displayUrl = res => {
    // add a function to first remove the error message
    const div = fillTemplate(res)
    displayShortenedContainer(div)
}


const fillTemplate = (data) => {
    const content = document.getElementById("")
}


// Url Shortening functions
const getUrl = (url) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then(res => res.json())
        .then(data => console.log(data))
}


const shortenUrl = (event) => {
    event.preventDefault()
    const url = takeUserInput()
    if (url) {
        getUrl(url).then(
            res => {    
                res ? showUrl(res) : invalidUrl() // handle the response returned
            }
        )
    }
}