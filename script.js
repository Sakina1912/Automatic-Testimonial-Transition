const nameUser = document.getElementById('name')
const profession = document.getElementById('profession')
const imageUser = document.getElementById('user-img')
const quote = document.getElementById('quote')


let posis = ['Software Developer','Manager','Analyst','Executive Director','Brand Manager']
const commText = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laudantium quod cum nulla, magnam, doloremque dicta, voluptatibus iste vero ad eum! At, aliquid! Consectetur modi adipisci quam! Rem, quisquam velit.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam mollitia provident, fugiat beatae nesciunt?',
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, doloremque?',
'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis laborum sapiente id ullam, soluta libero quo consectetur odit labore laboriosam!']

class User{
    constructor(name,position,photo,text){
        this.name = name
        this.position = position
        this.photo = photo
        this.text = text
    }
}

//showing the data in the DOM
async function showData(data){
    let name = {firstName : data.results[0].name.first, lastName: data.results[0].name.last}
    let newUser = new User (name,
                            posis[Math.floor(Math.random() * posis.length)],
                            data.results[0].picture.medium,
                            commText[Math.floor(Math.random() * commText.length)])
    nameUser.innerText= `${newUser.name.firstName} ${newUser.name.lastName}`
    profession.innerText=`${newUser.position}`
    imageUser.src=`${newUser.photo}`
    quote.innerText=`${newUser.text}`
}

//getting the data from the API
async function getData(){
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    await showData(data)
}

setInterval(getData,10000)