var text;
/*--------------------Add disabled class-------------------------*/

function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

/*--------------------Typewiter-------------------------*/

const typeSpeed = 100;
var timerId, typeTarget = $("#typer");

function type(txt, cur = 0) {
    if (cur == txt.length) {
        timerId = -1;
        return;
    }
    if (cur == 0) {
        typeTarget.html("");
        clearTimeout(timerId);
    }
    if (txt.charAt(cur) == "@") {
        var br = document.createElement('br');
        typeTarget.append(br);
    } else
        typeTarget.append(txt.charAt(cur));
    timerId = setTimeout(type, typeSpeed, txt, cur + 1);
}
// type("this is test")
type("1. Switch on the machine by clicking on switch on button@2. Set the accelerating voltage@3. Click on composite button to load composite sample on machine@4. Switch on the beam by clicking on Beam On button@5. Choose any one mode spot, line, area (for making line click on any two points in the image)@6. Click on execute button@7. Then make the spot, line, area depending upon your selection@8. At last click on calculate button to see result");

/*-----------------------volume-------------------------*/

var volFlag = 1;
$("#vol").click(function () {
    if (volFlag) {
        volFlag = 0;
        $("#vol").removeClass("fa fa-volume-up");
        $("#vol").addClass("fa fa-volume-mute");
    } else {
        volFlag = 1;
        $("#vol").removeClass("fa fa-volume-mute");
        $("#vol").addClass("fa fa-volume-up");
    }
});

var flag = 0;
var temp = 0;
var materialButton = 0,
    mode = 0;

function ModeGroup(type) {
    if (type === "enable")
        type = false
    else
        type = true
    document.getElementById("spot").disabled = type;
    document.getElementById("line").disabled = type;
    document.getElementById("area").disabled = type;
}

function drawCanvas() {
    var stage = new Konva.Stage({
        container: 'imgSeen',
        width: 700,
        height: 500,
    });

    var layer = new Konva.Layer();
    var poly1 = new Konva.Line({
        points: canvasPolygon1,
        fill: '#000000',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly1);

    var poly2 = new Konva.Line({
        points: canvasPolygon2,
        fill: '#ebe9e6',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly2);

    var poly3 = new Konva.Line({
        points: canvasPolygon3,
        fill: '#000000',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly3);

    var poly4 = new Konva.Line({
        points: canvasPolygon4,
        fill: '#000000',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly4);

    var poly5 = new Konva.Line({
        points: canvasPolygon5,
        fill: '#ebe9e6',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly5);

    var poly6 = new Konva.Line({
        points: canvasPolygon6,
        fill: '#000000',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly6);


    var poly7 = new Konva.Line({
        points: canvasPolygon7,
        fill: '#ebe9e6',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly7);

    var poly8 = new Konva.Line({
        points: canvasPolygon8,
        fill: '#000000',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly8);

    var poly9 = new Konva.Line({
        points: canvasPolygon9,
        fill: '#ebe9e6',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly9);

    var poly10 = new Konva.Line({
        points: canvasPolygon10,
        fill: '#ebe9e6',
        stroke: 'red',
        strokeWidth: 5,
        closed: true,
    });

    // add the shape to the layer
    layer.add(poly10);
    // add the layer to the stage
    stage.add(layer);
}

/*------------------------Start config---------------------------*/

document.getElementById("exec").disabled = true;
addClass(document.getElementById("exec"), "out");
addClass(document.getElementById("load"), "out");
document.getElementById("load").disabled = true;
document.getElementById("calc").disabled = true;
addClass(document.getElementById("calc"), "out");
addClass(document.getElementById("setav"), "out");
document.getElementById("setav").disabled = true;
addClass(document.getElementById("material1"), "out");
document.getElementById("material1").disabled = true;
ModeGroup("disable");

var machineState = false;

/*------------------------material select----------------------*/

document.getElementById("material1").onclick = function () {
    addClass(document.getElementById("material1"), "out");
    document.getElementById("material1").disabled = true;
    materialButton = 1;
    showToast("Now click on Load button to load sample");
    if (volFlag)
        textToSpeech("Now click on Load button to load sample");
    flag = 1;
    if(machineState){
        removeClass(document.getElementById("load"), "out");
        document.getElementById("load").disabled = false;
    }

}

function changeClass(mode){
    if(mode){
        $("#avslider").slider("option", "disabled", false);
        removeClass(document.getElementById("setav"), "out");
        document.getElementById("setav").disabled = false;
    } else {
        addClass(document.getElementById("material1"), "out");
        document.getElementById("material1").disabled = true;
        addClass(document.getElementById("load"), "out");
        document.getElementById("load").disabled = true;
        addClass(document.getElementById("exec"), "out");
        document.getElementById("exec").disabled = true;
        addClass(document.getElementById("calc"), "out");
        document.getElementById("calc").disabled = true;
        $("#avslider").slider("option", "disabled", true);
        addClass(document.getElementById("setav"), "out");
        document.getElementById("setav").disabled = true;
        document.getElementById("spot").disabled = type;
        document.getElementById("line").disabled = type;
        document.getElementById("area").disabled = type;
    }
}
document.getElementById("switchOn").onclick = function(){
    if(machineState){
        $("#switchOn").addClass("green");
        $("#switchOn").html(`SWITCH ON`);
        $("#switchOn").removeClass("red");
        machineState = false;
        showToast("Machine is switched off");
        if(volFlag)
        textToSpeech("Machine is switched off");
    } else {
        $("#switchOn").addClass("red");
        $("#switchOn").html(`SWITCH OFF`);
        $("#switchOn").removeClass("green");
        machineState = true;
        showToast("Machine is switched on");
        if(volFlag)
        textToSpeech("Machine is switched on");
    }
    changeClass(machineState);
}
var av;
$("#setav").click(function () {
    av = $("#avslider").slider("option", "value");
    if(av || av == 0){
        removeClass(document.getElementById("material1"), "out");
        document.getElementById("material1").disabled = false;
        $("#avslider").slider("option", "disabled", true);
        addClass(document.getElementById("setav"), "out");
        document.getElementById("setav").disabled = true;
        showToast("Accelerating voltage has been set");
        if(volFlag)
        textToSpeech("Accelerating voltage has been set");
    }
  });

/*------------------------mode select----------------------*/

document.getElementById("spot").onclick = function () {
    $("#spot").addClass("btn-dark");
    $("#line").removeClass("btn-dark");
    $("#area").removeClass("btn-dark");
    mode = 1;
    document.getElementById("exec").disabled = false;
    removeClass(document.getElementById("exec"), "out");
    document.getElementById("calc").disabled = false;
    removeClass(document.getElementById("calc"), "out");
    canvas.disabled = false;
    removeClass(canvas, "out1");
    temp = 0;
}

document.getElementById("line").onclick = function () {
    $("#spot").removeClass("btn-dark");
    $("#line").addClass("btn-dark");
    $("#area").removeClass("btn-dark");
    mode = 2;
    document.getElementById("exec").disabled = false;
    removeClass(document.getElementById("exec"), "out");
    document.getElementById("calc").disabled = false;
    removeClass(document.getElementById("calc"), "out");
    canvas.disabled = false;
    removeClass(canvas, "out1");
    temp = 0;
}

document.getElementById("area").onclick = function () {
    $("#spot").removeClass("btn-dark");
    $("#line").removeClass("btn-dark");
    $("#area").addClass("btn-dark");
    mode = 3;
    document.getElementById("exec").disabled = false;
    removeClass(document.getElementById("exec"), "out");
    document.getElementById("calc").disabled = false;
    removeClass(document.getElementById("calc"), "out");
    canvas.disabled = false;
    removeClass(canvas, "out1");
    temp = 0;
}

/*--------------------execute-------------------------*/

document.getElementById("exec").onclick = function () {
    if (mode == 0) {
        showToast("Please Select The Mode");
        if (volFlag)
            textToSpeech("Please Select The Mode");
        return;
    } else if (mode == 1) {

        showToast("Please Make The Spot");
        if (volFlag)
            textToSpeech("Please Make The Spot");
    } else if (mode == 2) {
        showToast("Please Make The Line");
        if (volFlag)
            textToSpeech("Please Make The Line");
    } else if (mode == 3) {

        document.getElementById("selectMode").style.display = "block"; //blue,red,green
        if ((document.getElementById("mode").value == "") && (flag == 0)) {
            showToast("Please Enter The Area");
            if (volFlag)
                textToSpeech("Please Enter The Area");
            flag = 1;
        } else if ((document.getElementById("mode").value == "") && (flag == 1)) {
            showToast("Please Enter The Area");
            if (volFlag)
                textToSpeech("Please Enter The Area");
        } else {
            showToast("Please Make The Area");
            if (volFlag)
                textToSpeech("Please Make The Area");
            addClass(document.getElementById("exec"), "out");
            document.getElementById("exec").disabled = true;
            document.getElementById("calc").disabled = true;
            document.getElementById("myCanvas").style.display = "block";
            addClass(document.getElementById("calc"), "out");
        }
    }
    if ((mode != 0) && (mode != 3)) {
        document.getElementById("myCanvas").style.display = "block";
        document.getElementById("exec").disabled = true;
        addClass(document.getElementById("exec"), "out");
        document.getElementById("calc").disabled = true;
        addClass(document.getElementById("calc"), "out");
    }
}


/*--------------------load-------------------------*/

$(document).ready(function () {
    $(window).resize(function () {
        // document.getElementById("myCanvas").height = img.height;
        // document.getElementById("myCanvas").width = img.width;
    });
});

document.getElementById("load").onclick = function () {
    var opt = materialButton;
    if (opt == 0) {
        showToast("Please Select The Sample");
        if (volFlag)
            textToSpeech("Please Select The Sample");
        return;
    }
    if (opt != 0) {
        document.getElementById("machineImage").src = "./images/sem.gif";
        document.getElementById("sample").style.display="";
        ModeGroup("enable");
        addClass(document.getElementById("load"), "out");
        document.getElementById("load").disabled = true;
        removeClass(document.getElementById("exec"), "out");
        document.getElementById("exec").disabled = false;
        showToast("Now Select The Mode");
        if (volFlag)
            textToSpeech("Now Select The Mode");
        drawCanvas();
    }
}

var task = 1;

document.getElementById("nextTask").onclick = function(){
    if(task == 1){
        document.querySelectorAll(".labelA").forEach(element => {
            element.innerHTML = "Element C";
        });
        document.getElementById("remark").style.display="";
        task = 2;
        document.getElementById("nextTask").innerHTML = "Previous Task";
    }
    else{
        document.querySelectorAll(".labelA").forEach(element => {
            element.innerHTML = "Element A";
        });
        document.getElementById("remark").style.display="none";
        task = 1;
        document.getElementById("nextTask").innerHTML = "Next Task";
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    temp = 0;
    removeClass(document.getElementById("exec"), "out");
    document.getElementById("exec").disabled = false;
    document.getElementById("calc").disabled = false;
    removeClass(document.getElementById("calc"), "out");
    canvas.disabled = false;
    canvas.style.display = "none";
    document.getElementById("chartContainer").style.display = "none";
    removeClass(canvas, "out1");
    document.getElementById("percentage-A").value = "";
    document.getElementById("percentage-B").value = "";
}


/*--------------------draw-------------------------*/

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function getMousePos1(canvas, evt, a) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left - a / 2,
        y: evt.clientY - rect.top - a / 2
    };
}
//put this outside the event loop..
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var posprev, posnext, opt, tempPos;
var newFlag = 0;

function draw(evt) {
    if (temp == 1) {

        showToast("Now click on calculate button to show result");
        if (volFlag)
            textToSpeech("Now click on calculate button to show result");
        return;
    }
    opt = mode;
    if (opt == 1) {

        showToast("Now click on calculate button to show result");
        if (volFlag)
            textToSpeech("Now click on calculate button to show result");
        temp = 1;
        removeClass(document.getElementById("calc"), "out");
        document.getElementById("calc").disabled = false;
        var pos = getMousePos(canvas, evt);
        tempPos = pos;
        ctx.beginPath();
        ctx.fillStyle = "#fad905";
        ctx.arc(pos.x, pos.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        canvas.disabled = true;
        addClass(canvas, "out1");
    } else if (opt == 2) {
        newFlag++;
        if (newFlag == 1) {
            posprev = getMousePos(canvas, evt);
        } else {
            showToast("Now click on calculate button to show result");
            if (volFlag)
                textToSpeech("Now click on calculate button to show result");
            temp = 1;
            removeClass(document.getElementById("calc"), "out");
            document.getElementById("calc").disabled = false;
            posnext = getMousePos(canvas, evt);
            newFlag = 0;
            ctx.moveTo(posprev.x, posprev.y);
            ctx.lineTo(posnext.x, posnext.y);
            ctx.strokeStyle = "#fa0505";
            ctx.stroke();
            canvas.disabled = true;
            addClass(canvas, "out1");
        }
    } else if (opt == 3) {
        showToast("Now click on calculate button to show result");
        if (volFlag)
            textToSpeech("Now click on calculate button to show result");
        temp = 1;
        removeClass(document.getElementById("calc"), "out");
        document.getElementById("calc").disabled = false;
        var area = parseInt(document.getElementById("mode").value);
        var a;
        a = Math.sqrt(area);
        var pos = getMousePos1(canvas, evt, a);
        tempPos = pos;
        ctx.beginPath();
        ctx.fillStyle = "#fad905";
        ctx.rect(pos.x, pos.y, a, a);
        ctx.fill();
        ctx.stroke();
        canvas.disabled = true;
        addClass(canvas, "out1");
    } else if (opt == 0) {
        showToast("Please Enter the mode");
        if (volFlag)
            textToSpeech("Please Enter The Mode");
    }
}

var polygon1 = [
    [-0.4, 0.8],
    [174, 0.8],
    [166, 78],
    [80, 152],
    [2, 156]
];
var canvasPolygon1 = [-0.4, 0.8, 174, 0.8, 166, 78, 80, 152, 2, 156];
var polygon2 = [
    [133, 104],
    [166, 78],
    [173, 1.4],
    [400, 0.8],
    [426, 100],
    [332, 147],
    [246, 141],
    [165, 79]
];
var canvasPolygon2 = [133, 104, 166, 78, 173, 1.4, 400, 0.8, 426, 100, 332, 147, 246, 141, 165, 79];
var polygon3 = [
    [425, 99],
    [498, 137],
    [578, 64],
    [594, 0.8],
    [400, 0.8]
];
var canvasPolygon3 = [425, 99, 498, 137, 578, 64, 594, 0.8, 400, 0.8];
var polygon7 = [
    [683, 393],
    [505, 324],
    [553, 240],
    [578, 64],
    [594, 0.8],
    [683, 0.8]
];
var canvasPolygon7 = [683, 393, 505, 324, 553, 240, 578, 64, 594, 0.8, 683, 0.8];
var polygon4 = [
    [2, 156],
    [78, 154],
    [70, 400],
    [-0.4, 430]
];
var canvasPolygon4 = [2, 156, 78, 154, 70, 400, -0.4, 430];
var polygon8 = [
    [0, 430],
    [70, 400],
    [308, 498],
    [2, 498]
];
var canvasPolygon8 = [0, 430, 70, 400, 308, 498, 2, 498];
var polygon5 = [
    [246, 141],
    [300, 270],
    [242, 382],
    [70, 400],
    [78, 154],
    [165, 79]
];
var canvasPolygon5 = [246, 141, 300, 270, 242, 382, 70, 400, 78, 154, 165, 79];
var polygon9 = [
    [317, 500],
    [70, 400],
    [394, 359],
    [470, 388],
    [473, 498]
];
var canvasPolygon9 = [317, 500, 70, 400, 394, 359, 470, 388, 473, 498];
var polygon6 = [
    [246, 141],
    [300, 270],
    [242, 382],
    [394, 359],
    [470, 388],
    [553, 240],
    [578, 61],
    [498, 137],
    [425, 99],
    [332, 147]
];
var canvasPolygon6 = [246, 141, 300, 270, 242, 382, 394, 359, 470, 388, 553, 240, 578, 61, 498, 137, 425, 99, 332, 147];
var polygon10 = [
    [683, 496],
    [473, 498],
    [470, 388],
    [505, 324],
    [683, 393]
];
var canvasPolygon10 = [683, 496, 473, 498, 470, 388, 505, 324, 683, 393];

/*--------------------Toast-------------------------*/

var tWrapper = $("#toast-wrapper"),
    ti = 0;

function showToast(msg, type1 = 0) {
    tWrapper.append(`<div id="t${ti++}" class="toast${type1 == 1 ? ' danger' : (type1 == 2 ? ' success' : '')}" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="${type1 == 1 ? '#ff0000' : (type1 == 2 ? '#31a66a' : '#007aff')}" /></svg>
            <strong class="mr-auto">Notification</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            ${msg}
    </div>
    </div>`);
    $(`#t${ti - 1}`).toast({
        delay: 5500
    });
    $(`#t${ti - 1}`).toast('show');
}

/*--------------------graph-------------------------*/

document.getElementById("calc").onclick = function () {
    if(task == 1){

        if(opt == 2){
            document.getElementById("percentage-tab").style.display = "none";
            document.getElementById("chartContainer").style.display = "";
        } else {
            document.getElementById("percentage-tab").style.display = "";
            document.getElementById("chartContainer").style.display = "none";
        }

        if (opt == 1) {
            var pos = tempPos;
            if (inside([pos.x, pos.y], polygon1) || inside([pos.x, pos.y], polygon3) || inside([pos.x, pos.y], polygon4) || inside([pos.x, pos.y], polygon6) || inside([pos.x, pos.y], polygon8)) {
                document.getElementById("percentage-A").value = "0%";
                document.getElementById("percentage-B").value = "100%";
            } else {
                document.getElementById("percentage-A").value = "100%";
                document.getElementById("percentage-B").value = "0%";
            }
    
        } else if (opt == 2) {
            let point1 = posprev;
            let point2 = posnext;
            let prev = -1,next = -1;
            let m = (point2.y - point1.y) / (point2.x - point1.x);
            console.log("Slope : ",m);
            let countA=0,countB=0;
            let timer = 0;
            let points1 = [],points2 = [];
            for(i=(point1.x < point2.x?point1.x:point2.x);i<=(point1.x < point2.x?point2.x:point1.x);i++){
                y = m*(i - point2.x) + point2.y;
                if (inside([i, y], polygon1) || inside([i, y], polygon3) || inside([i, y], polygon4) || inside([i, y], polygon6) || inside([i, y], polygon8)) {
                    countB++;
                    prev = next;
                    next = 2;
                } else {
                    countA++;
                    prev = next;
                    next = 1;
                }
                if(timer == 0){
                    if(next == 1){
                        points1.push({x:timer,y:100});
                        points2.push({x:timer,y:0});
                    } else {
                        points2.push({x:timer,y:100});
                        points1.push({x:timer,y:0});
                    }
                }
                else if(prev != -1 && next != -1 && prev != next){
                    if(prev == 1){
                        points1.push({x:timer,y:100});
                        points2.push({x:timer,y:0});
                    } else {
                        points2.push({x:timer,y:100});
                        points1.push({x:timer,y:0});
                    }

                    if(next == 1){
                        points1.push({x:timer,y:100});
                        points2.push({x:timer,y:0});
                    } else {
                        points2.push({x:timer,y:100});
                        points1.push({x:timer,y:0});
                    }
                }
                else{
                    if(prev == 1){
                        points1.push({x:timer,y:100});
                        points2.push({x:timer,y:0});
                    } else {
                        points2.push({x:timer,y:100});
                        points1.push({x:timer,y:0});
                    }
                }
                timer += 1;
            }
            console.log(countA,countB);
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title: {
                    text: "Line Analysis"
                },
                axisY: {
                    title: "% of Element"
                },
                axisX: {
                    title: "Distance(in px)"
                },
                data: [{
                    type: "stepLine",
                    showInLegend:true,
                    legendMarkerType: "circle",
                    name : "A",
                    markerSize: 5,
                    dataPoints: points1
                },{
                    type: "stepLine",
                    showInLegend:true,
                    legendMarkerType: "circle",
                    name : "B",
                    markerSize: 5,
                    dataPoints: points2
                }]
            });
            chart.render();
            document.getElementById("percentage-A").value = `${Math.round(countA / (countA + countB) * 100)}%`;
            document.getElementById("percentage-B").value = `${Math.round(countB / (countA + countB) * 100)}%`;
            document.getElementById("percentage-tab").style.display = "none";
        } else if (opt == 3) {
            let side = Math.sqrt(parseInt(document.getElementById("mode").value));
            let center = tempPos;
            let countA=0,countB=0;
            for(y=center.y;y<=center.y+side;y++){
                for(x=center.x;x<=center.x+side;x++){
                    if (inside([x, y], polygon1) || inside([x, y], polygon3) || inside([x, y], polygon4) || inside([x, y], polygon6) || inside([x, y], polygon8)) {
                        countB++;
                    } else {
                        countA++;
                    }
                }
            }
            document.getElementById("percentage-A").value = `${Math.round(countA / (countA + countB) * 100)}%`;
            document.getElementById("percentage-B").value = `${Math.round(countB / (countA + countB) * 100)}%`;
        }
    }

    if(task == 2){

        if(opt == 2){
            document.getElementById("percentage-tab").style.display = "none";
            document.getElementById("chartContainer").style.display = "";
        } else {
            document.getElementById("percentage-tab").style.display = "";
            document.getElementById("chartContainer").style.display = "none";
        }

        if (opt == 1) {
            var pos = tempPos;
            if (inside([pos.x, pos.y], polygon1) || inside([pos.x, pos.y], polygon3) || inside([pos.x, pos.y], polygon4) || inside([pos.x, pos.y], polygon6) || inside([pos.x, pos.y], polygon8)) {
                document.getElementById("percentage-A").value = "0%";
                document.getElementById("percentage-B").value = "100%";
            } else {
                document.getElementById("percentage-A").value = "40%";
                document.getElementById("percentage-B").value = "60%";
            }
    
        } else if (opt == 2) {
            let point1 = posprev;
            let point2 = posnext;
            let prev = -1,next = -1;
            let m = (point2.y - point1.y) / (point2.x - point1.x);
            let countA=0,countB=0;
            let timer = 0;
            let points1 = [],points2 = [];
            for(i=(point1.x < point2.x?point1.x:point2.x);i<=(point1.x < point2.x?point2.x:point1.x);i++){
                y = m*(i - point2.x) + point2.y;
                if (inside([i, y], polygon1) || inside([i, y], polygon3) || inside([i, y], polygon4) || inside([i, y], polygon6) || inside([i, y], polygon8)) {
                    countB++;
                    prev = next;
                    next = 2;
                } else {
                    countA += 0.4;
                    countB += 0.6;
                    prev = next;
                    next = 3;
                }
                if(timer == 0){
                    if(next == 3){
                        points1.push({x:timer,y:40});
                        points2.push({x:timer,y:60});
                    } else {
                        points2.push({x:timer,y:100});
                        points1.push({x:timer,y:0});
                    }
                }
                else if(prev != -1 && next != -1 && prev != next){
                    if(prev == 3){
                        points1.push({x:timer,y:40});
                        points2.push({x:timer,y:60});
                    } else {
                        points2.push({x:timer,y:100});
                        points1.push({x:timer,y:0});
                    }

                    if(next == 3){
                        points1.push({x:timer,y:40});
                        points2.push({x:timer,y:60});
                    } else {
                        points2.push({x:timer,y:100});
                        points1.push({x:timer,y:0});
                    }
                }
                else{
                    if(prev == 3){
                        points1.push({x:timer,y:40});
                        points2.push({x:timer,y:60});
                    } else {
                        points2.push({x:timer,y:100});
                        points1.push({x:timer,y:0});
                    }
                }
                timer += 1;
            }
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title: {
                    text: "Line Analysis"
                },
                axisY: {
                    title: "% of Element"
                },
                axisX: {
                    title: "Distance(in px)"
                },
                data: [{
                    type: "stepLine",
                    showInLegend:true,
                    legendMarkerType: "circle",
                    name : "A",
                    markerSize: 5,
                    dataPoints: points1
                },{
                    type: "stepLine",
                    showInLegend:true,
                    legendMarkerType: "circle",
                    name : "B",
                    markerSize: 5,
                    dataPoints: points2
                }]
            });
            chart.render();
            document.getElementById("percentage-A").value = `${Math.round(countA / (countA + countB) * 100)}%`;
            document.getElementById("percentage-B").value = `${Math.round(countB / (countA + countB) * 100)}%`;
            document.getElementById("percentage-tab").style.display = "none";
        } else if (opt == 3) {
            let side = Math.sqrt(parseInt(document.getElementById("mode").value));
            let center = tempPos;
            let countA=0,countB=0;
            for(y=center.y;y<=center.y+side;y++){
                for(x=center.x;x<=center.x+side;x++){
                    if (inside([x, y], polygon1) || inside([x, y], polygon3) || inside([x, y], polygon4) || inside([x, y], polygon6) || inside([x, y], polygon8)) {
                        countB++;
                    } else {
                        countA += 0.4;
                        countB += 0.6
                    }
                }
            }
            document.getElementById("percentage-A").value = `${Math.round(countA / (countA + countB) * 100)}%`;
            document.getElementById("percentage-B").value = `${Math.round(countB / (countA + countB) * 100)}%`;
        }
    }

    if (temp == 1) {
        showToast("Now see result in output tab");
        if(volFlag)
            textToSpeech("Now see result in output tab");
        document.getElementById("calc").disabled = true;
        addClass(document.getElementById("calc"), "out");
    }
}

function inside(point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var x = point[0],
        y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0],
            yi = vs[i][1];
        var xj = vs[j][0],
            yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    console.log(inside);

    return inside;
}


/*--------------------Text to speech-------------------------*/

// list of languages is probably not loaded, wait for it
if (window.speechSynthesis.getVoices().length != 0) {
    window.speechSynthesis.addEventListener('voiceschanged', function () {
        textToSpeech(text);
    });
}

function textToSpeech(text) {
    // get all voices that browser offers
    var available_voices = window.speechSynthesis.getVoices();

    // this will hold an english voice
    var english_voice = '';

    // find voice by language locale "en-US"
    // if not then select the first voice
    for (var i = 0; i < available_voices.length; i++) {
        if (available_voices[i].lang === 'en-US') {
            english_voice = available_voices[i];
            break;
        }
    }
    if (english_voice === '')
        english_voice = available_voices[0];

    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.text = text;
    utter.voice = english_voice;


    // speak
    window.speechSynthesis.speak(utter);
}
document.getElementById("rest").onclick = function () {
    window.location.reload(true);
}