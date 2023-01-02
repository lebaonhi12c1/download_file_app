function getEvents(){
    var inputFile = document.querySelector('.content_inp')
    var btn_submit = document.querySelector('.submit')
    btn_submit.addEventListener('click',function(){
        fetchFile(inputFile.value)
    })
    function fetchFile(url){
        fetch(url).then(res=> res.blob()).then(file=>{
            let temUrl = URL.createObjectURL(file)
            let aTag = document.createElement('a')
            aTag.href = temUrl
            aTag.download = 'filename'
            document.body.appendChild(aTag)
            aTag.click()
            aTag.remove()
        })
    }
}
getEvents()