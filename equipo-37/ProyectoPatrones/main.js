const audio=document.getElementById('audio')
const section=document.getElementById('section')
const fragment = document.createDocumentFragment()
section.addEventListener('click',(e)=>{
    audio.play()
    let posicionX=e.offsetX;
    let posicionY=e.offsetY;
    CreateImg(posicionX,posicionY)
})

const CreateImg=(x,y)=>{
    const img=document.createElement('img')
    img.setAttribute('src','salpicadura.png')
    img.style.left=`${x}px`
    img.style.top=`${y}px`
    fragment.appendChild(img)
    section.appendChild(fragment)
}