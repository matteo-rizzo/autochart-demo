document.getElementById('oxygen').onmouseover = function () {
    document.getElementsByClassName('keyword')[0].classList.add("highlight")
    document.getElementsByClassName('keyword')[1].classList.add("highlight")
}

document.getElementById('oxygen').onmouseout = function () {
    document.getElementsByClassName('keyword')[0].classList.remove("highlight")
    document.getElementsByClassName('keyword')[1].classList.remove("highlight")
}
