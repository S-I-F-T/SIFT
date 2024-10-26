const { text } = require("express");

const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

function loadImage(e){
    const file = e.target.files[0]

    if(!isImage(file)){
        alertError('Please select an image')
        return
    }

    // Get original dimensions
    const image = new Image()
    image.src = URL.createObjectURL(file)
    image.onload = function () {
        widthInput.value = image.width
        heightInput.value = image.height
    }

    form.style.display = 'block'
    filename.innerText = file.name
    outputPath.innerText = path.join(os.homedir(), 'imageresizer')
}

// Make sure file is an image
function isImage(file){
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png']
    return file && acceptedImageTypes.includes(file.type)
}

function alertError(message){
    Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: 'red',
            color: 'white',
            textAlign: 'center',
        }
    });
}

function alertSuccess(message){
    Toastify.toast({
        text: message,
        duration: 5000,
        close: false,
        style: {
            background: 'green',
            color: 'white',
            textAlign: 'center',
        }
    });
}

img.addEventListener('change', loadImage)