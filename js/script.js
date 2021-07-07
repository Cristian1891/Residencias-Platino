
if (document.getElementById('propiedades')) {

    var casas = document.getElementById("cont-conjunto");
    var departamentos = document.getElementById("cont-conjunto1");
    var condominios = document.getElementById("cont-conjunto2");
    var locales = document.getElementById("cont-conjunto3");


    var btn = document.getElementById("btnClick");
    var btn1 = document.getElementById("btnClick1");
    var btn2 = document.getElementById("btnClick2");
    var btn3 = document.getElementById("btnClick3");

    btn.addEventListener("click", displayInfo);
    btn1.addEventListener("click", displayInfo1);
    btn2.addEventListener("click", displayInfo2);
    btn3.addEventListener("click", displayInfo3);


    function displayInfo(event) {
        event.preventDefault();
        casas.style.display = 'flex';
        departamentos.style.display = 'none';
        condominios.style.display = 'none';
        locales.style.display = 'none';
        btn.classList.remove('bgColorBlack');
        btn.classList.remove('colorRed');
        btn.classList.add('bgColorRed');
        btn.classList.add('colorWhite');
        btn1.classList.remove('bgColorRed');
        btn1.classList.remove('colorWhite');
        btn1.classList.add('bgColorBlack');
        btn1.classList.add('colorRed');
        btn2.classList.remove('bgColorRed');
        btn2.classList.remove('colorWhite');
        btn2.classList.add('bgColorBlack');
        btn2.classList.add('colorRed');
        btn2.classList.remove('bgColorRed');
        btn2.classList.remove('colorWhite');
        btn2.classList.add('bgColorBlack');
        btn2.classList.add('colorRed');
        btn3.classList.remove('bgColorRed');
        btn3.classList.remove('colorWhite');
        btn3.classList.add('bgColorBlack');
        btn3.classList.add('colorRed');
    }

    function displayInfo1(event) {
        event.preventDefault();
        casas.style.display = 'none';
        departamentos.style.display = 'flex';
        condominios.style.display = 'none';
        locales.style.display = 'none';
        btn.classList.remove('bgColorRed');
        btn.classList.remove('colorWhite');
        btn.classList.add('bgColorBlack');
        btn.classList.add('colorRed');
        btn1.classList.remove('bgColorBlack');
        btn1.classList.remove('colorRed');
        btn1.classList.add('bgColorRed');
        btn1.classList.add('colorWhite');
        btn2.classList.remove('bgColorRed');
        btn2.classList.remove('colorWhite');
        btn2.classList.add('bgColorBlack');
        btn2.classList.add('colorRed');
        btn2.classList.remove('bgColorRed');
        btn2.classList.remove('colorWhite');
        btn2.classList.add('bgColorBlack');
        btn2.classList.add('colorRed');
        btn3.classList.remove('bgColorRed');
        btn3.classList.remove('colorWhite');
        btn3.classList.add('bgColorBlack');
        btn3.classList.add('colorRed');
    }

    function displayInfo2(event) {
        event.preventDefault();
        casas.style.display = 'none';
        departamentos.style.display = 'none';
        condominios.style.display = 'flex';
        locales.style.display = 'none';
        btn.classList.remove('bgColorRed');
        btn.classList.remove('colorWhite');
        btn.classList.add('bgColorBlack');
        btn.classList.add('colorRed');
        btn1.classList.remove('bgColorRed');
        btn1.classList.remove('colorWhite');
        btn1.classList.add('bgColorBlack');
        btn1.classList.add('colorRed');
        btn2.classList.remove('bgColorBlack');
        btn2.classList.remove('colorRed');
        btn2.classList.add('bgColorRed');
        btn2.classList.add('colorWhite');
        btn3.classList.remove('bgColorRed');
        btn3.classList.remove('colorWhite');
        btn3.classList.add('bgColorBlack');
        btn3.classList.add('colorRed');
    }

    function displayInfo3(event) {
        event.preventDefault();
        casas.style.display = 'none';
        departamentos.style.display = 'none';
        condominios.style.display = 'none';
        locales.style.display = 'flex';
        btn.classList.remove('bgColorRed');
        btn.classList.remove('colorWhite');
        btn.classList.add('bgColorBlack');
        btn.classList.add('colorRed');
        btn1.classList.remove('bgColorRed');
        btn1.classList.remove('colorWhite');
        btn1.classList.add('bgColorBlack');
        btn1.classList.add('colorRed');
        btn2.classList.remove('bgColorRed');
        btn2.classList.remove('colorWhite');
        btn2.classList.add('bgColorBlack');
        btn2.classList.add('colorRed');
        btn3.classList.remove('bgColorBlack');
        btn3.classList.remove('colorRed');
        btn3.classList.add('bgColorRed');
        btn3.classList.add('colorWhite');
    }

}


if (document.getElementById('testimoniales')) {

    var slide = document.getElementById("cont-gen");
    var slide1 = document.getElementById("cont-gen1");
    var slide2 = document.getElementById("cont-gen2");

    var btnSlide = document.getElementById("btnSlide");
    var btnSlide1 = document.getElementById("btnSlide1");
    var btnSlide2 = document.getElementById("btnSlide2");

    btnSlide.addEventListener("click", displayTest);
    btnSlide1.addEventListener("click", displayTest1);
    btnSlide2.addEventListener("click", displayTest2);

    function displayTest(event) {
        event.preventDefault();
        slide.style.display = 'flex';
        slide1.style.display = 'none';
        slide2.style.display = 'none';
    }

    function displayTest1(event) {
        event.preventDefault();
        slide.style.display = 'none';
        slide1.style.display = 'flex';
        slide2.style.display = 'none';
    }

    function displayTest2(event) {
        event.preventDefault();
        slide.style.display = 'none';
        slide1.style.display = 'none';
        slide2.style.display = 'flex';
    }

}

if (document.getElementById('servicios')) {

    var serv = document.getElementById("cont-general");
    var serv1 = document.getElementById("cont-general1");
    var serv2 = document.getElementById("cont-general2");

    var btnServ = document.getElementById("btnServ");
    var btnServ1 = document.getElementById("btnServ1");
    var btnServ2 = document.getElementById("btnServ2");

    btnServ.addEventListener("click", displayServ);
    btnServ1.addEventListener("click", displayServ1);
    btnServ2.addEventListener("click", displayServ2);

    function displayServ(event) {
        event.preventDefault();
        serv.style.display = 'flex';
        serv1.style.display = 'none';
        serv2.style.display = 'none';
    }

    function displayServ1(event) {
        event.preventDefault();
        serv.style.display = 'none';
        serv1.style.display = 'flex';
        serv2.style.display = 'none';
    }

    function displayServ2(event) {
        event.preventDefault();
        serv.style.display = 'none';
        serv1.style.display = 'none';
        serv2.style.display = 'flex';
    }

}

if (document.getElementById('casas')) {

    var cas = document.getElementById("casa-propiet");
    var dep = document.getElementById("casa-propiet1");
    var cond = document.getElementById("casa-propiet2");
    var loc = document.getElementById("casa-propiet3");


    var btnProp = document.getElementById("btnProp");
    var btnProp1 = document.getElementById("btnProp1");
    var btnProp2 = document.getElementById("btnProp2");
    var btnProp3 = document.getElementById("btnProp3");

    btnProp.addEventListener("click", displayProp);
    btnProp1.addEventListener("click", displayProp1);
    btnProp2.addEventListener("click", displayProp2);
    btnProp3.addEventListener("click", displayProp3);

    function displayProp(event) {
        event.preventDefault();
        cas.style.display = 'grid';
        dep.style.display = 'none';
        cond.style.display = 'none';
        loc.style.display = 'none';
        btnProp.classList.remove('bgColorBlack');
        btnProp.classList.remove('colorRed');
        btnProp.classList.add('bgColorRed');
        btnProp.classList.add('colorWhite');
        btnProp1.classList.remove('bgColorRed');
        btnProp1.classList.remove('colorWhite');
        btnProp1.classList.add('bgColorBlack');
        btnProp1.classList.add('colorRed');
        btnProp2.classList.remove('bgColorRed');
        btnProp2.classList.remove('colorWhite');
        btnProp2.classList.add('bgColorBlack');
        btnProp2.classList.add('colorRed');
        btnProp2.classList.remove('bgColorRed');
        btnProp2.classList.remove('colorWhite');
        btnProp2.classList.add('bgColorBlack');
        btnProp2.classList.add('colorRed');
        btnProp3.classList.remove('bgColorRed');
        btnProp3.classList.remove('colorWhite');
        btnProp3.classList.add('bgColorBlack');
        btnProp3.classList.add('colorRed');
    }

    function displayProp1(event) {
        event.preventDefault();
        cas.style.display = 'none';
        dep.style.display = 'grid';
        cond.style.display = 'none';
        loc.style.display = 'none';
        btnProp.classList.remove('bgColorRed');
        btnProp.classList.remove('colorWhite');
        btnProp.classList.add('bgColorBlack');
        btnProp.classList.add('colorRed');
        btnProp1.classList.remove('bgColorBlack');
        btnProp1.classList.remove('colorRed');
        btnProp1.classList.add('bgColorRed');
        btnProp1.classList.add('colorWhite');
        btnProp2.classList.remove('bgColorRed');
        btnProp2.classList.remove('colorWhite');
        btnProp2.classList.add('bgColorBlack');
        btnProp2.classList.add('colorRed');
        btnProp2.classList.remove('bgColorRed');
        btnProp2.classList.remove('colorWhite');
        btnProp2.classList.add('bgColorBlack');
        btnProp2.classList.add('colorRed');
        btnProp3.classList.remove('bgColorRed');
        btnProp3.classList.remove('colorWhite');
        btnProp3.classList.add('bgColorBlack');
        btnProp3.classList.add('colorRed');
    }

    function displayProp2(event) {
        event.preventDefault();
        cas.style.display = 'none';
        dep.style.display = 'none';
        cond.style.display = 'grid';
        loc.style.display = 'none';
        btnProp.classList.remove('bgColorRed');
        btnProp.classList.remove('colorWhite');
        btnProp.classList.add('bgColorBlack');
        btnProp.classList.add('colorRed');
        btnProp1.classList.remove('bgColorRed');
        btnProp1.classList.remove('colorWhite');
        btnProp1.classList.add('bgColorBlack');
        btnProp1.classList.add('colorRed');
        btnProp2.classList.remove('bgColorBlack');
        btnProp2.classList.remove('colorRed');
        btnProp2.classList.add('bgColorRed');
        btnProp2.classList.add('colorWhite');
        btnProp3.classList.remove('bgColorRed');
        btnProp3.classList.remove('colorWhite');
        btnProp3.classList.add('bgColorBlack');
        btnProp3.classList.add('colorRed');
    }

    function displayProp3(event) {
        event.preventDefault();
        cas.style.display = 'none';
        dep.style.display = 'none';
        cond.style.display = 'none';
        loc.style.display = 'grid';
        btnProp.classList.remove('bgColorRed');
        btnProp.classList.remove('colorWhite');
        btnProp.classList.add('bgColorBlack');
        btnProp.classList.add('colorRed');
        btnProp1.classList.remove('bgColorRed');
        btnProp1.classList.remove('colorWhite');
        btnProp1.classList.add('bgColorBlack');
        btnProp1.classList.add('colorRed');
        btnProp2.classList.remove('bgColorRed');
        btnProp2.classList.remove('colorWhite');
        btnProp2.classList.add('bgColorBlack');
        btnProp2.classList.add('colorRed');
        btnProp3.classList.remove('bgColorBlack');
        btnProp3.classList.remove('colorRed');
        btnProp3.classList.add('bgColorRed');
        btnProp3.classList.add('colorWhite');

    }
}
/*
if (document.getElementById('contentHeader')) {

    var casa = document.getElementById("casa-propiet");
    var depto = document.getElementById("casa-propiet1");
    var condo = document.getElementById("casa-propiet2");
    var local = document.getElementById("casa-propiet3");

    var btnCasa = document.getElementById("btnCasa");
    var btnDep = document.getElementById("btnDep");
    var btnCond = document.getElementById("btnCond");
    var btnLoc = document.getElementById("btnLoc");

    btnCasa.addEventListener("click", displayCasa);
    btnDep.addEventListener("click", displayDep);
    btnCond.addEventListener("click", displayCond);
    btnLoc.addEventListener("click", displayLoc);

    if (document.getElementById('casas')){

        function displayCasa(event) {
            event.preventDefault();
            casa.style.display = 'grid';
            depto.style.display = 'none';
            condo.style.display = 'none';
            local.style.display = 'none';
            btnProp.classList.remove('bgColorBlack');
            btnProp.classList.remove('colorRed');
            btnProp.classList.add('bgColorRed');
            btnProp.classList.add('colorWhite');
            btnProp1.classList.remove('bgColorRed');
            btnProp1.classList.remove('colorWhite');
            btnProp1.classList.add('bgColorBlack');
            btnProp1.classList.add('colorRed');
            btnProp2.classList.remove('bgColorRed');
            btnProp2.classList.remove('colorWhite');
            btnProp2.classList.add('bgColorBlack');
            btnProp2.classList.add('colorRed');
            btnProp2.classList.remove('bgColorRed');
            btnProp2.classList.remove('colorWhite');
            btnProp2.classList.add('bgColorBlack');
            btnProp2.classList.add('colorRed');
            btnProp3.classList.remove('bgColorRed');
            btnProp3.classList.remove('colorWhite');
            btnProp3.classList.add('bgColorBlack');
            btnProp3.classList.add('colorRed');
        }
    
        function displayDep(event) {
            event.preventDefault();
            casa.style.display = 'none';
            depto.style.display = 'grid';
            condo.style.display = 'none';
            local.style.display = 'none';
            btnProp.classList.remove('bgColorRed');
            btnProp.classList.remove('colorWhite');
            btnProp.classList.add('bgColorBlack');
            btnProp.classList.add('colorRed');
            btnProp1.classList.remove('bgColorBlack');
            btnProp1.classList.remove('colorRed');
            btnProp1.classList.add('bgColorRed');
            btnProp1.classList.add('colorWhite');
            btnProp2.classList.remove('bgColorRed');
            btnProp2.classList.remove('colorWhite');
            btnProp2.classList.add('bgColorBlack');
            btnProp2.classList.add('colorRed');
            btnProp2.classList.remove('bgColorRed');
            btnProp2.classList.remove('colorWhite');
            btnProp2.classList.add('bgColorBlack');
            btnProp2.classList.add('colorRed');
            btnProp3.classList.remove('bgColorRed');
            btnProp3.classList.remove('colorWhite');
            btnProp3.classList.add('bgColorBlack');
            btnProp3.classList.add('colorRed');
        }
    
        function displayCond(event) {
            event.preventDefault();
            casa.style.display = 'none';
            depto.style.display = 'none';
            condo.style.display = 'grid';
            local.style.display = 'none';
            btnProp.classList.remove('bgColorRed');
            btnProp.classList.remove('colorWhite');
            btnProp.classList.add('bgColorBlack');
            btnProp.classList.add('colorRed');
            btnProp1.classList.remove('bgColorRed');
            btnProp1.classList.remove('colorWhite');
            btnProp1.classList.add('bgColorBlack');
            btnProp1.classList.add('colorRed');
            btnProp2.classList.remove('bgColorBlack');
            btnProp2.classList.remove('colorRed');
            btnProp2.classList.add('bgColorRed');
            btnProp2.classList.add('colorWhite');
            btnProp3.classList.remove('bgColorRed');
            btnProp3.classList.remove('colorWhite');
            btnProp3.classList.add('bgColorBlack');
            btnProp3.classList.add('colorRed');
        }
    
        function displayLoc(event) {
            event.preventDefault();
            casa.style.display = 'none';
            depto.style.display = 'none';
            condo.style.display = 'none';
            local.style.display = 'grid';
            btnProp.classList.remove('bgColorRed');
            btnProp.classList.remove('colorWhite');
            btnProp.classList.add('bgColorBlack');
            btnProp.classList.add('colorRed');
            btnProp1.classList.remove('bgColorRed');
            btnProp1.classList.remove('colorWhite');
            btnProp1.classList.add('bgColorBlack');
            btnProp1.classList.add('colorRed');
            btnProp2.classList.remove('bgColorRed');
            btnProp2.classList.remove('colorWhite');
            btnProp2.classList.add('bgColorBlack');
            btnProp2.classList.add('colorRed');
            btnProp3.classList.remove('bgColorBlack');
            btnProp3.classList.remove('colorRed');
            btnProp3.classList.add('bgColorRed');
            btnProp3.classList.add('colorWhite');
    
        }

    }

    

}*/