if (document.getElementById('propiedades')) {

    var casas = document.getElementById("casas");
    var departamentos = document.getElementById("departamentos");
    var condominios = document.getElementById("condominios");
    var locales = document.getElementById("locales");


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
        departamentos.style.display = 'none';
        condominios.style.display = 'none';
        locales.style.display = 'none';
        casas.style.display = 'flex';
        btn.classList.remove('bgColorBlack','colorRed');
        btn.classList.add('bgColorRed', 'colorWhite');
        btn1.classList.remove('bgColorRed','colorWhite');
        btn1.classList.add('bgColorBlack','colorRed');
        btn2.classList.remove('bgColorRed','colorWhite');
        btn2.classList.add('bgColorBlack','colorRed');
        btn3.classList.remove('bgColorRed','colorWhite');
        btn3.classList.add('bgColorBlack','colorRed');
    }

    function displayInfo1(event) {
        event.preventDefault();
        casas.style.display = 'none';
        condominios.style.display = 'none';
        locales.style.display = 'none';
        departamentos.style.cssText = "display: flex; flex-direction: row; justify-content: space-evenly; margin: 5em 0;";
        btn.classList.remove('bgColorRed','colorWhite');
        btn.classList.add('bgColorBlack','colorRed');
        btn1.classList.remove('bgColorBlack','colorRed');
        btn1.classList.add('bgColorRed','colorWhite');
        btn2.classList.remove('bgColorRed','colorWhite');
        btn2.classList.add('bgColorBlack','colorRed');
        btn3.classList.remove('bgColorRed','colorWhite');
        btn3.classList.add('bgColorBlack','colorRed');
    }

    function displayInfo2(event) {
        event.preventDefault();
        casas.style.display = 'none';
        departamentos.style.display = 'none';
        locales.style.display = 'none';
        condominios.style.cssText = "display: flex; flex-direction: row; justify-content: space-evenly; margin: 5em 0;";
        btn.classList.remove('bgColorRed','colorWhite');
        btn.classList.add('bgColorBlack','colorRed');
        btn1.classList.remove('bgColorRed','colorWhite');
        btn1.classList.add('bgColorBlack','colorRed');
        btn2.classList.remove('bgColorBlack','colorRed');
        btn2.classList.add('bgColorRed','colorWhite');
        btn3.classList.remove('bgColorRed','colorWhite');
        btn3.classList.add('bgColorBlack','colorRed');
    }

    function displayInfo3(event) {
        event.preventDefault();
        casas.style.display = 'none';
        departamentos.style.display = 'none';
        condominios.style.display = 'none';
        locales.style.cssText = "display: flex; flex-direction: row; justify-content: space-evenly; margin: 5em 0;";
        btn.classList.remove('bgColorRed','colorWhite');
        btn.classList.add('bgColorBlack','colorRed');
        btn1.classList.remove('bgColorRed','colorWhite');
        btn1.classList.add('bgColorBlack','colorRed');
        btn2.classList.remove('bgColorRed','colorWhite');
        btn2.classList.add('bgColorBlack','colorRed');
        btn3.classList.remove('bgColorBlack','colorRed');
        btn3.classList.add('bgColorRed','colorWhite');
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
        serv1.style.display = 'none';
        serv2.style.display = 'none';
        serv.style.display = 'flex';
        btnServ.classList.remove('colorBlack');
        btnServ.classList.add('colorYellow');
        btnServ1.classList.remove('colorYellow');
        btnServ1.classList.add('colorBlack');
        btnServ2.classList.remove('colorYellow');
        btnServ2.classList.add('colorBlack');
    }

    function displayServ1(event) {
        event.preventDefault();
        serv.style.display = 'none';
        serv2.style.display = 'none';
        serv1.style.cssText = "display: flex; flex-direction: row; justify-content: space-between; flex-wrap: no-wrap;";
        btnServ.classList.remove('colorYellow');
        btnServ.classList.add('colorBlack');
        btnServ1.classList.remove('colorBlack');
        btnServ1.classList.add('colorYellow');
        btnServ2.classList.remove('colorYellow');
        btnServ2.classList.add('colorBlack');
    }

    function displayServ2(event) {
        event.preventDefault();
        serv.style.display = 'none';
        serv1.style.display = 'none';
        serv2.style.cssText = "display: flex; flex-direction: row; justify-content: center; flex-wrap: no-wrap;";
        btnServ.classList.remove('colorYellow');
        btnServ.classList.add('colorBlack');
        btnServ1.classList.remove('colorYellow');
        btnServ1.classList.add('colorBlack');
        btnServ2.classList.remove('colorBlack');
        btnServ2.classList.add('colorYellow');
    }

}

if (document.getElementById('agentes')) {

    var agentes = document.getElementById("contenido-cajas");
    var agentes1 = document.getElementById("contenido-cajas1");

    var btnAgent = document.getElementById("btnAgent");
    var btnAgent1 = document.getElementById("btnAgent1");

    btnAgent.addEventListener("click", displayAgent);
    btnAgent1.addEventListener("click", displayAgent1);
    
    function displayAgent(event) {
        event.preventDefault();
        agentes1.style.display = 'none';
        agentes.style.display = 'flex';
        btnAgent.classList.remove('colorWhite');
        btnAgent.classList.add('colorYellow');
        btnAgent1.classList.remove('colorYellow');
        btnAgent1.classList.add('colorWhite');
    }

    function displayAgent1(event) {
        event.preventDefault();
        agentes.style.display = 'none';
        agentes1.style.cssText = "display: flex; flex-flow: row nowrap; justify-content: space-evenly; padding-bottom: 4rem; font-size: 20px;";
        btnAgent.classList.remove('colorYellow');
        btnAgent.classList.add('colorWhite');
        btnAgent1.classList.remove('colorWhite');
        btnAgent1.classList.add('colorYellow');
    }


}

if (document.getElementById('testimoniales')) {

    var slide = document.getElementById("cont-gen");
    var slide1 = document.getElementById("cont-gen1");
    var slide2 = document.getElementById("cont-gen2");

    var btnTest = document.getElementById("btnTest");
    var btnTest1 = document.getElementById("btnTest1");
    var btnTest2 = document.getElementById("btnTest2");

    btnTest.addEventListener("click", displayTest);
    btnTest1.addEventListener("click", displayTest1);
    btnTest2.addEventListener("click", displayTest2);

    function displayTest(event) {
        event.preventDefault();
        slide1.style.display = 'none';
        slide2.style.display = 'none';
        slide.style.display = 'flex';
        btnTest.classList.remove('colorWhite');
        btnTest.classList.add('colorYellow');
        btnTest1.classList.remove('colorYellow');
        btnTest1.classList.add('colorWhite');
        btnTest2.classList.remove('colorYellow');
        btnTest2.classList.add('colorWhite');
    }

    function displayTest1(event) {
        event.preventDefault();
        slide.style.display = 'none';
        slide2.style.display = 'none';
        slide1.style.cssText = "display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;";
        btnTest.classList.remove('colorYellow');
        btnTest.classList.add('colorWhite');
        btnTest1.classList.remove('colorWhite');
        btnTest1.classList.add('colorYellow');
        btnTest2.classList.remove('colorYellow');
        btnTest2.classList.add('colorWhite');
    }

    function displayTest2(event) {
        event.preventDefault();
        slide.style.display = 'none';
        slide1.style.display = 'none';
        slide2.style.cssText = "display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;";
        btnTest.classList.remove('colorYellow');
        btnTest.classList.add('colorWhite');
        btnTest1.classList.remove('colorYellow');
        btnTest1.classList.add('colorWhite');
        btnTest2.classList.remove('colorWhite');
        btnTest2.classList.add('colorYellow');
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
        dep.style.display = 'none';
        cond.style.display = 'none';
        loc.style.display = 'none';
        cas.style.display = 'grid';
        btnProp.classList.remove('bgColorBlack','colorRed');
        btnProp.classList.add('bgColorRed','colorWhite');
        btnProp1.classList.remove('bgColorRed','colorWhite');
        btnProp1.classList.add('bgColorBlack','colorRed');
        btnProp2.classList.remove('bgColorRed','colorWhite');
        btnProp2.classList.add('bgColorBlack','colorRed');
        btnProp2.classList.remove('bgColorRed','colorWhite');
        btnProp3.classList.remove('bgColorRed','colorWhite');
        btnProp3.classList.add('bgColorBlack','colorRed');
    }

    function displayProp1(event) {
        event.preventDefault();
        cas.style.display = 'none';
        cond.style.display = 'none';
        loc.style.display = 'none';
        dep.style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(4, 1fr); grid-column-gap: 2rem; margin: 2em 7rem;";
        btnProp.classList.remove('bgColorRed','colorWhite');
        btnProp.classList.add('bgColorBlack','colorRed');
        btnProp1.classList.remove('bgColorBlack','colorRed');
        btnProp1.classList.add('bgColorRed','colorWhite');
        btnProp2.classList.remove('bgColorRed','colorWhite');
        btnProp2.classList.add('bgColorBlack','colorRed');
        btnProp3.classList.remove('bgColorRed','colorWhite');
        btnProp3.classList.add('bgColorBlack','colorRed');
    }

    function displayProp2(event) {
        event.preventDefault();
        cas.style.display = 'none';
        dep.style.display = 'none';
        loc.style.display = 'none';
        cond.style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(4, 1fr); grid-column-gap: 2rem; margin: 2em 7rem;";
        btnProp.classList.remove('bgColorRed','colorWhite');
        btnProp.classList.add('bgColorBlack','colorRed');
        btnProp1.classList.remove('bgColorRed','colorWhite');
        btnProp1.classList.add('bgColorBlack','colorRed');
        btnProp2.classList.remove('bgColorBlack','colorRed');
        btnProp2.classList.add('bgColorRed','colorWhite');
        btnProp3.classList.remove('bgColorRed','colorWhite');
        btnProp3.classList.add('bgColorBlack','colorRed');
    }

    function displayProp3(event) {
        event.preventDefault();
        cas.style.display = 'none';
        dep.style.display = 'none';
        cond.style.display = 'none';
        loc.style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(4, 1fr); grid-column-gap: 2rem; margin: 2em 7rem; ";
        btnProp.classList.remove('bgColorRed','colorWhite');
        btnProp.classList.add('bgColorBlack','colorRed');
        btnProp1.classList.remove('bgColorRed','colorWhite');
        btnProp1.classList.add('bgColorBlack','colorRed');
        btnProp2.classList.remove('bgColorRed','colorWhite');
        btnProp2.classList.add('bgColorBlack','colorRed');
        btnProp3.classList.remove('bgColorBlack','colorRed');
        btnProp3.classList.add('bgColorRed','colorWhite');
    }
}

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

    

}