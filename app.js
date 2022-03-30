let waifuImg = document.getElementById('waifu-img')

let waifuBtn = document.getElementById('waifu-btn')

waifuBtn.addEventListener('click', randomWaifu)

function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function randomWaifu(){
    let n = Random(1, 56)
    fetch('http://127.0.0.1:5500/images.json')
    .then( res => res.json())
    .then(data => {
        waifuImg.innerHTML = `<iframe src="${data.images[n]} "> 
        waifuImg.style.scale = 1.2</iframe>`
    })

    waifuBtn.style.display = 'none'
    waifuImg.style.scale = 1.2

let oi =  setTimeout(
        function(){
            waifuBtn.style.display = 'block'
            waifuImg.style.scale = 1
        }, 45000
    )
}