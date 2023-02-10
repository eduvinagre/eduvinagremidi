function playSound (audioSelector) {
     const element = document.querySelector(audioSelector);
         
     if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Element not found or invalid selector')
    }
}  

const keyList = document.querySelectorAll('.tecla');let counter = 0;

for (let counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrument =  key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function () {
        playSound(idAudio)
    }

    key.onkeydown = function (event) {
        if (event.code === "Enter" || event.code === "Space") {
            key.classList.add('ativa')
        }
    }

    key.onkeyup = function () {
        key.classList.remove('ativa');
    }    
    
} 
