function izlistajImenaProizvoda(){

    var imenaProizvoda = [...document.getElementsByClassName('name')]

    imenaProizvoda.forEach(element => {
        console.log(element.textContent);
    });

    
}