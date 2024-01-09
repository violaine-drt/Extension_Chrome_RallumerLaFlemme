chrome.runtime.onMessage.addListener(async (request, sender, response) => {
        // console.log(request);
        if (request.action == "CHANGE_IMAGE_DOG") {
            let linkImgDog="https://yt3.googleusercontent.com/9iLQ5D6LNbHLjKQbwMf1fCXSY6MIlNJey94ywUSil-bgb6ds7AczCSMWCN_gbvWlgqEdCC-x=s900-c-k-c0x00ffffff-no-rj"
            changeImg(linkImgDog)
        }
        if (request.action == "CHANGE_IMAGE_CAT") {
            let linkImgCat="https://cloudfront-eu-central-1.images.arcpublishing.com/lexpress/VQ6QDWLMKFGCXFORD36RA6RZ7I.jpg"
            changeImg(linkImgCat)
    }
}
)
    console.log("Je suis laaaaaaaaaa");



function changeImg(imgAnimal)
{
            const images =document.getElementsByTagName("img")
            console.log(images)
            console.log(images.length)
            for (let i=0;i<images.length;i++)
            {
                images[i].src= imgAnimal
                if (images[i].srcset !== null) {
                images[i].srcset= imgAnimal
            }
        }
}
