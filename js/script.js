// Nav related
const menu = document.querySelector('.menu-btn')
const close = document.querySelector('.close')
const navMenu = document.querySelector('.nav-menu')


// Url Input
const urlInput = document.getElementById('url-input')

function toggleNav() {
    navMenu.classList.toggle('show-nav-menu');
}

function windowOnClick (event) {
    if (event.target === navMenu){
        toggleNav();
    }
}
menu.addEventListener('click', toggleNav);
window.addEventListener('click', windowOnClick);

// Error handling
const empty = () => {
    //ToDo: Add error messages
    return false
}

const takeUserInput = () => {
    const input = document.getElementById("") // Incomplete
    const userInput = input.value 
    input.value = ""
    const url = userInput === "" ? empty() : userInput
    return url
}

const showUrl = res => {
    // add a function to first remove the error message
    const div = fillTemplate(res)
    
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