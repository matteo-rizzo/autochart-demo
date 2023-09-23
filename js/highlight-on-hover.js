document.getElementById('oxygen').onmouseover = function () {
    document.getElementsByClassName('keyword')[0].classList.add("w3-red")
}

document.getElementById('oxygen').onmouseout = function () {
    document.getElementsByClassName('keyword')[0].classList.remove("w3-red")
}
