console.log("ici, vous êtes dans le content")

//Ecoute quelle action (définie dans popup.js) est déclenchée 
chrome.runtime.onMessage.addListener(async (request, sender, response) => {
    console.log(request);
    console.log(request.action)
    if (request.action == "CHANGE_IMAGE_DOG") {
        
        let linkImgDog=[
        "https://yt3.googleusercontent.com/9iLQ5D6LNbHLjKQbwMf1fCXSY6MIlNJey94ywUSil-bgb6ds7AczCSMWCN_gbvWlgqEdCC-x=s900-c-k-c0x00ffffff-no-rj",
        "https://w7.pngwing.com/pngs/999/669/png-transparent-dog-funny-animal-xchng-high-definition-video-glasses-dog-glass-wine-glass-image-file-formats.png",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51tYXyD5NHL._AC_UF1000,1000_QL80_.jpg"
        ]
        changeImg(linkImgDog)
    }
    if (request.action == "CHANGE_IMAGE_CAT") {
        let linkImgCat=[
        "https://assets-jpcust.jwpsrv.com/thumbnails/ivnq84y4-720.jpg",
        "https://cloudfront-eu-central-1.images.arcpublishing.com/lexpress/VQ6QDWLMKFGCXFORD36RA6RZ7I.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr2ml5OBvLXrggHZ2JIuWJ90r1guQW2A23lwGmqTkCQQ&s"
        ]
        changeImg(linkImgCat)
    }
    if (request.action == "CHANGE_TEXT"){
        changeTxt()
    }})

//Cette fonction utilisée ci-dessus modifie aléatoirement les images de la page à partir d'un tableau d'images
function changeImg(imgAnimal) {
        const images =document.getElementsByTagName("img")
        console.log(images)
        console.log(images.length)
        for (let i=0;i<images.length;i++)
        {
            const randImg = Math.floor(Math.random() * imgAnimal.length);
            images[i].src= imgAnimal[randImg];
            if (images[i].srcset !== null) {
            images[i].srcset= imgAnimal[randImg];
        }
    }
}

//Utilisée ci-dessus, elle cible les paragraphes et span dans le html et les modifie 
function changeTxt(){
    const span = document.getElementsByTagName("span")
    const para =document.getElementsByTagName("p")
    console.log(span)
    for (let i=0;i<para.length;i++)
        {
            para[i].innerHTML= "C'est l'heure de la sieste";
        }
    for (let i=0;i<span.length;i++)
        {
            span[i].innerHTML= "zzzZZZZ";
        }
}


