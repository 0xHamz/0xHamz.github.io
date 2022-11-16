window.addEventListener("scroll", muncul);

function muncul(){
    let elementsz = document.querySelectorAll(".elemen");
    for (let i = 0; i < elementsz.length; i++){
        let tinggilayar = window.innerHeight;
        let jarakAtasElemen = elementsz[i].getBoundingClientRect().top;
        let ukuranScroll = 150;

        if (jarakAtasElemen < tinggilayar - ukuranScroll){
            elementsz[i].classList.add("tampil");
        }
        else {
            elementsz[i].classList.remove("tampil");
        }
    }
}