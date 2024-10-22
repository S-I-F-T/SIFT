const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

function loadImage(e){
    const file = e.target.files[0]

    if(!isImage(file)){
        console.log('Please select an image')
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
}

// Make sure file is an image
function isImage(file){
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png']
    return file && acceptedImageTypes.includes(file.type)
}

img.addEventListener('change', loadImage)