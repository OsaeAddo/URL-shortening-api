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

// put data from shortening API into an empty template
const fillTemplate = (data) => {
    const content = document.getElementById("url-template").content
    const copyHtml = document.importNode(content, true)

    const div = copyHtml.querySelector('.short-container')
    const originalUrl = copyHtml.querySelector('.original-url')
    const short = copyHtml.querySelector(".shortened")


    data.result 
        ? (
            short.textContent = data.result.short_link, 
            originalUrl.textContent = data.result.original_link
        )
        : (
            short.textContent = data.result, 
            originalUrl.textContent = data.result.original_link
        ) //ToDo: Update to use LocalStorage
    
    return div
}


// Url Shortening functions
// Fetch the shortened url
const getUrl = async (url) => {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    let data = await  res.json()
    data = data.ok ? data : false
    console.log('Returned url data: ', data)
    return data
}

// Shorten the url input by the user
const shortenUrl = (e) => {
    e.preventDefault()
    const url = takeUserInput()
    if (url) {
        getUrl(url).then(
            res => {    
                res ? displayUrl(res) : console.log("Invalid url") // handle the response returned
            }
        )
    }
}


// ***************** Event listeners  *************
shortenForm.addEventListener('submit', shortenUrl)

menu.addEventListener('click', toggleNav);
window.addEventListener('click', windowOnClick);

