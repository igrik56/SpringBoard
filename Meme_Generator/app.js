const form = document.querySelector('#inputForm');
const inputImgLink = document.querySelector('#imgLink');
const inputTextTop = document.querySelector('#textTop');
const inputTextBottom = document.querySelector('#textBottom');
// const btnSubmit = document.querySelector('#Submit');
// const btnReset = document.querySelector('#Reset');
const gallery = document.querySelector('#Gallery');
const memeDiv = document.querySelector('.memeDiv');


function cleanForm(){                                                              //clean input form.
    inputImgLink.value = null;
    inputTextTop.value = null;
    inputTextBottom.value = null;
}

function deleteMeme(){
    gallery.addEventListener('click', function(evt){
        evt.target.parentElement.remove();
    }, {once: true});
}

form.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.id === 'Submit'){
        if(inputImgLink.value !== ''){
            if(inputTextTop.value !== '' || inputTextBottom.value !==''){
                let newPic = document.createElement('div');            
                let newImg = document.createElement('img');
                let topText = document.createElement('div');
                let textBottom = document.createElement('div');
                                
                newImg.src = inputImgLink.value;
                newImg.className = 'meme';
                newPic.appendChild(newImg);
                newPic.className = "memeDiv";
                gallery.appendChild(newPic);
                topText.id = "topText";
                topText.innerText = inputTextTop.value;
                textBottom.id = "bottomText";
                textBottom.innerText = inputTextBottom.value;
                newPic.appendChild(topText);
                newPic.appendChild(textBottom);
                cleanForm();                                                        
            }
            else{
                alert(`Some people won't understand meme without text.`);
                youWouldNtGetIt();
                cleanForm(); 
            }
        }
        else{
            alert(`Can't make a meme without a picture T_T`);
            //cleanForm(); - it is off on purpose for better user exp. For instance, you got cool text, but forgot an img and need to retype everything?
        }
    }
    else if(e.target.id === 'Reset'){
        cleanForm();
    }
    else if (e.target.id ===`Delete`){
        deleteMeme();
        // gallery.addEventListener('click', function(evt){
        //     evt.target.parentElement.remove();
        // });
    }
});      

function youWouldNtGetIt(){
    let newPic = document.createElement('div');            
    let newImg = document.createElement('img');
                    
    newImg.src = `https://c.tenor.com/JU26VnswjDsAAAAd/joker-face.gif`;
    newImg.className = 'meme';
    newPic.appendChild(newImg);
    newPic.className = "memeDiv";
    gallery.appendChild(newPic);
}