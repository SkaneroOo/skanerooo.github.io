let slideIndex = 1;

let slides = document.getElementsByClassName("mySlides");

showSlide(slideIndex);

side();

function showSlide(n) {
    let i;
    if ( n == 1 ) {
        document.getElementById("prev").style.display = "none";
    } else if ( n == slides.length ) {
        document.getElementById("next").style.display = "none";
    } else {
        document.getElementById("prev").style.display = "block";
        document.getElementById("next").style.display = "block";
    }
    if ( n > slides.length ) { slideIndex = 1 }
    if ( n < 1 ) { slideIndex = slides.length }
    for ( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    let cap = document.getElementById("caption")
    cap.innerHTML = `${n} / ${slides.length}`
}

function next() {
    slideIndex += 1;
    showSlide(slideIndex);
    topFunction();
}

function prev() {
    slideIndex -= 1;
    showSlide(slideIndex);
    topFunction();
}

function plusSlides(n) {
    slideIndex += n;
    showSlide(slideIndex);
    topFunction();
}

function choosePage() {
    let page = 0;
    do {
        page = parseInt(window.prompt(`Select page in range 1 to ${slides.length}`, ""));
    } while ( isNaN(page) || page > slides.length || page < 1 );
    slideIndex = page;
    showSlide(slideIndex);
    topFunction();
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



function side() {
    let side = document.getElementById("SideNav");
    for (i = 1; i < 188; i++) {
        let item = document.createElement("div");
        item.className = "item";
        let pv = document.createElement("img");
        pv.src = `imgs/jujutsu (${i}).jpg`;
        pv.setAttribute("onclick", `slideIndex=${i};showSlide(${i})`);
        pv.loading = "lazy";
        side.appendChild(item).appendChild(pv);
        let p = document.createElement("p");
        p.className = "center";
        p.innerHTML = i;
        side.appendChild(p);
    }
}