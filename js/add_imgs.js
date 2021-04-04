add();

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

function detectOrient() {
    let orient = false;
    if ( window.innerHeight < window.innerWidth ) {
        orient = true;
    };
    return orient;
}

if ( detectOrient() ) {
    document.getElementsByClassName("next").item(0).className = "hornext";
    document.getElementsByClassName("prev").item(0).className = "horprev";
}

if ( detectMob() ) {
    window.onorientationchange = function(event) { 
        let orient = detectOrient()
        if ( orient ) {
            let slides = document.getElementsByClassName("page");
            document.getElementsByClassName("hornext").item(0).className = "next";
            document.getElementsByClassName("horprev").item(0).className = "prev";
        } else {
            let slides = document.getElementsByClassName("mobile");
            document.getElementsByClassName("next").item(0).className = "hornext";
            document.getElementsByClassName("prev").item(0).className = "horprev";
        };
        console.log(slides.length)
        for (i = 0; i < slides.length; i++) {
            let slide = slides.item(i)
            //console.log(slide.className)
            slide = slide.children.item(0)
            if ( orient ) { 
                //slide.classList.remove( "page" )
                //slide.classList.add( "mobile" )
                slide.className = "page";
            } else {
                //slide.classList.remove( "mobile" )
                //slide.classList.add( "page" )
                slide.className = "mobile";
            };
        };

    };
}

function add() {
    let core = document.getElementById('s');
    let center = document.createElement('center');
    core = core.insertBefore(center, document.getElementById("prev"));
    for (i = 1; i < 188; i++) {
        let div = document.createElement('div');
        div.className = "mySlides";
        let img = document.createElement("img");
        img.loading = "lazy";
        img.src = `imgs/jujutsu (${i}).jpg`;
        if ( detectMob() && detectOrient() ) {
            img.className = "mobile";
        } else { img.className = "page"; }
        core.appendChild(div).appendChild(img);
    }
}

