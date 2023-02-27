"use strict";
const start = document.querySelector(".start");
const main = document.querySelector(".main");
const dropdown = document.querySelector(".dropdown");
const iconImages = document.querySelector(".iconImages");
const iconVideo = document.querySelector(".iconVideo");
const iconAudio = document.querySelector(".iconAudio");
const images = document.querySelector(".images");
const video = document.querySelector(".video");
const audio = document.querySelector(".audio");
const body = document.querySelector("body");
const times = document.querySelector(".time");
const toolbars = document.querySelector(".toolbar");
const imagesMove = document.getElementById("imagesMove");
const imagesUp = document.getElementById("imagesUp");
const videoMove = document.getElementById("videoMove");
const videoUp = document.getElementById("videoUp");
const audioMove = document.getElementById("audioMove");
const audioUp = document.getElementById("audioUp");
let drop = true;
let imagesShowTrigger = true;
let videoShowTrigger = true;
let audioShowTrigger = true;
// The current position of mouse
let arr = ["images", "video", "audio", ""];
function showUp(str) {
    if (str === "images") {
        images.style.zIndex = "12";
        video.style.zIndex = "11";
        audio.style.zIndex = "11";
    }
    if (str === "video") {
        images.style.zIndex = "11";
        video.style.zIndex = "12";
        audio.style.zIndex = "11";
    }
    if (str === "audio") {
        images.style.zIndex = "11";
        video.style.zIndex = "11";
        audio.style.zIndex = "12";
    }
}
function dragElement(elmnt, moveSnap, state) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (moveSnap) {
        // if present, the header is where you move the DIV from:
        moveSnap.onmousedown = dragMouseDown;
    }
    else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(event) {
        event = event || window.event;
        event.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = event.clientX;
        pos4 = event.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    function elementDrag(event) {
        showUp(state);
        event = event || window.event;
        event.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement(event) {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
function resizeRight(ele, variant, what) {
    ele.style.top = "0";
    ele.style.left = "0";
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        showUp(what);
        // Get the current mouse position
        x = e.clientX;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        w = parseInt(styles.width, 10);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        const dx = e.clientX - x;
        // const dy = e.clientY - y;
        // Adjust the dimension of element
        ele.style.width = `${w + dx}px`;
        // move.style.height = `${h + dy}px`;
        variant.style.right = `${e.clientX}px`;
    }
    ;
    function mouseUpHandler() {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerR = document.querySelector('.resizer-r');
    resizerR.addEventListener('mousedown', mouseDownHandler);
}
function resizeBottom(ele, variant, what) {
    ele.style.top = "0";
    ele.style.left = "0";
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        showUp(what);
        // Get the current mouse position
        // x = e.clientX;
        y = e.clientY;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        // w = parseInt(styles.width, 10);
        h = parseInt(styles.height, 10);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        // const dx = e.clientX - x;
        const dy = e.clientY - y;
        // Adjust the dimension of element
        // ele.style.width = `${w + dx}px`;
        ele.style.height = `${h + dy}px`;
        variant.style.bottom = `${e.clientY}px`;
    }
    ;
    function mouseUpHandler() {
        // Remove the handlers of `mousemove` and `mouseup`
        console.log(x);
        console.log(y);
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerB = document.querySelector('.resizer-b');
    resizerB.addEventListener('mousedown', mouseDownHandler);
}
function resizeLeft(ele, variant, what) {
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        // Get the current mouse position
        showUp(what);
        x = e.clientX;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        w = parseInt(styles.width, 10);
        console.log(w);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        dxx = x - e.clientX;
        // const dy = e.clientY - y;
        // Adjust the dimension of element
        ele.style.width = `${w + dxx}px`;
        // move.style.height = `${h + dy}px`;
        if ((w + dxx) >= 100) {
            variant.style.left = `${e.clientX}px`;
            ele.style.left = "0";
        }
    }
    ;
    function mouseUpHandler(e) {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerL = document.querySelector('.resizer-l');
    resizerL.addEventListener('mousedown', mouseDownHandler);
}
function resizeTop(ele, variant, what) {
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        // Get the current mouse position
        y = e.clientY;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        h = parseInt(styles.height, 10);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        showUp(what);
        // How far the mouse has been moved
        dyy = y - e.clientY;
        // const dy = e.clientY - y;
        // Adjust the dimension of element
        ele.style.height = `${h + dyy}px`;
        // move.style.height = `${h + dy}px`;
        if ((h + dyy) >= 150) {
            variant.style.top = `${e.clientY}px`;
            ele.style.top = "0";
        }
    }
    ;
    function mouseUpHandler() {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerT = document.querySelector('.resizer-t');
    resizerT.addEventListener('mousedown', mouseDownHandler);
}
function resizeRightV(ele, variant, what) {
    ele.style.top = "0";
    ele.style.left = "0";
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        showUp(what);
        // Get the current mouse position
        x = e.clientX;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        w = parseInt(styles.width, 10);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        const dx = e.clientX - x;
        // const dy = e.clientY - y;
        // Adjust the dimension of element
        ele.style.width = `${w + dx}px`;
        // move.style.height = `${h + dy}px`;
        variant.style.right = `${e.clientX}px`;
    }
    ;
    function mouseUpHandler() {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerRV = document.querySelector('.resizer-rv');
    resizerRV.addEventListener('mousedown', mouseDownHandler);
}
function resizeBottomV(ele, variant, what) {
    ele.style.top = "0";
    ele.style.left = "0";
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        showUp(what);
        // Get the current mouse position
        // x = e.clientX;
        y = e.clientY;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        // w = parseInt(styles.width, 10);
        h = parseInt(styles.height, 10);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        // const dx = e.clientX - x;
        const dy = e.clientY - y;
        // Adjust the dimension of element
        // ele.style.width = `${w + dx}px`;
        ele.style.height = `${h + dy}px`;
        variant.style.bottom = `${e.clientY}px`;
    }
    ;
    function mouseUpHandler() {
        // Remove the handlers of `mousemove` and `mouseup`
        console.log(x);
        console.log(y);
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerBV = document.querySelector('.resizer-bv');
    resizerBV.addEventListener('mousedown', mouseDownHandler);
}
function resizeLeftV(ele, variant, what) {
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        // Get the current mouse position
        showUp(what);
        x = e.clientX;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        w = parseInt(styles.width, 10);
        console.log(w);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        dxx = x - e.clientX;
        // const dy = e.clientY - y;
        // Adjust the dimension of element
        ele.style.width = `${w + dxx}px`;
        // move.style.height = `${h + dy}px`;
        if ((w + dxx) >= 100) {
            variant.style.left = `${e.clientX}px`;
            ele.style.left = "0";
        }
    }
    ;
    function mouseUpHandler(e) {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerLV = document.querySelector('.resizer-lv');
    resizerLV.addEventListener('mousedown', mouseDownHandler);
}
function resizeTopV(ele, variant, what) {
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        // Get the current mouse position
        showUp(what);
        y = e.clientY;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        h = parseInt(styles.height, 10);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        dyy = y - e.clientY;
        // const dy = e.clientY - y;
        // Adjust the dimension of element
        ele.style.height = `${h + dyy}px`;
        // move.style.height = `${h + dy}px`;
        if ((h + dyy) >= 150) {
            variant.style.top = `${e.clientY}px`;
            ele.style.top = "0";
        }
    }
    ;
    function mouseUpHandler() {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerTV = document.querySelector('.resizer-tv');
    resizerTV.addEventListener('mousedown', mouseDownHandler);
}
function resizeRightA(ele, variant, what) {
    ele.style.top = "0";
    ele.style.left = "0";
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        showUp(what);
        // Get the current mouse position
        x = e.clientX;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        w = parseInt(styles.width, 10);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        const dx = e.clientX - x;
        // const dy = e.clientY - y;
        // Adjust the dimension of element
        ele.style.width = `${w + dx}px`;
        // move.style.height = `${h + dy}px`;
        variant.style.right = `${e.clientX}px`;
    }
    ;
    function mouseUpHandler() {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerRA = document.querySelector('.resizer-ra');
    resizerRA.addEventListener('mousedown', mouseDownHandler);
}
function resizeBottomA(ele, variant, what) {
    ele.style.top = "0";
    ele.style.left = "0";
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        showUp(what);
        // Get the current mouse position
        // x = e.clientX;
        y = e.clientY;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        // w = parseInt(styles.width, 10);
        h = parseInt(styles.height, 10);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        // const dx = e.clientX - x;
        const dy = e.clientY - y;
        // Adjust the dimension of element
        // ele.style.width = `${w + dx}px`;
        ele.style.height = `${h + dy}px`;
        variant.style.bottom = `${e.clientY}px`;
    }
    ;
    function mouseUpHandler() {
        // Remove the handlers of `mousemove` and `mouseup`
        console.log(x);
        console.log(y);
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerBA = document.querySelector('.resizer-ba');
    resizerBA.addEventListener('mousedown', mouseDownHandler);
}
function resizeLeftA(ele, variant, what) {
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        showUp(what);
        // Get the current mouse position
        x = e.clientX;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        w = parseInt(styles.width, 10);
        console.log(w);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        dxx = x - e.clientX;
        // const dy = e.clientY - y;
        // Adjust the dimension of element
        ele.style.width = `${w + dxx}px`;
        // move.style.height = `${h + dy}px`;
        if ((w + dxx) >= 100) {
            variant.style.left = `${e.clientX}px`;
            ele.style.left = "0";
        }
    }
    ;
    function mouseUpHandler(e) {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerLA = document.querySelector('.resizer-la');
    resizerLA.addEventListener('mousedown', mouseDownHandler);
}
function resizeTopA(ele, variant, what) {
    let x = 0;
    let y = 0;
    // The dimension of the element
    let w = 0;
    let h = 0;
    let dxx = 0;
    let dyy = 0;
    function mouseDownHandler(e) {
        showUp(what);
        // Get the current mouse position
        y = e.clientY;
        // Calculate the dimension of element
        const styles = window.getComputedStyle(ele);
        h = parseInt(styles.height, 10);
        // Attach the listeners to `document`
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }
    ;
    function mouseMoveHandler(e) {
        // How far the mouse has been moved
        dyy = y - e.clientY;
        // const dy = e.clientY - y;
        // Adjust the dimension of element
        ele.style.height = `${h + dyy}px`;
        // move.style.height = `${h + dy}px`;
        if ((h + dyy) >= 150) {
            variant.style.top = `${e.clientY}px`;
            ele.style.top = "0";
        }
    }
    ;
    function mouseUpHandler() {
        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
    ;
    const resizerTA = document.querySelector('.resizer-ta');
    resizerTA.addEventListener('mousedown', mouseDownHandler);
}
dragElement(imagesMove, imagesUp, arr[3]);
dragElement(videoMove, videoUp, arr[3]);
dragElement(audioMove, audioUp, arr[3]);
function showImages() {
    if (imagesShowTrigger) {
        images.innerHTML = `
        <div class="images1 border resizable d-flex flex-column" id="mover">
                <div class="resizer resizer-l"></div>
                <div class="resizer resizer-r"></div>
                <div class="resizer resizer-b"></div>
                <div class="resizer resizer-t"></div>

                <div class="p10 d-flex j-end borderb" id="moverSnap">
                    <div class="close">X</div>
                </div>
                <div class="d-flex p10 gap wrap">
                    <div class="first"><img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/275c594a-Sarangkot-Sunrise-View/SarangkotSunriseView-KlookUnitedStates.jpg" alt=""></div>
                    <div class="first"><img src="https://images.photowall.com/products/72354/window-bay-view.jpg?h=699&q=85" alt=""></div>
                    <div class="first"><img src="https://media.istockphoto.com/id/1065043970/photo/young-woman-sitting-on-edge-looks-out-at-view.jpg?s=170667a&w=0&k=20&c=4mzfaxtIM4P58cF4DPTe5mc2Qu9xtQPOmwmbuZBztQc=" alt=""></div>
                </div>
        </div>
    `;
        const close = document.querySelector(".close");
        imagesShowTrigger = false;
        close.onclick = () => {
            images.innerHTML = ``;
            imagesShowTrigger = true;
        };
        const changeBackground = document.querySelectorAll(".first");
        changeBackground.forEach(item => item.onclick = (event) => {
            let adres = event.target.src;
            body.style.backgroundImage = `url("${adres}")`;
            console.log(event.target.src);
        });
        const move = document.getElementById("mover");
        const moveSnap = document.getElementById("moverSnap");
        dragElement(move, moveSnap, arr[0]);
        resizeRight(move, images, arr[0]);
        resizeBottom(move, images, arr[0]);
        resizeLeft(move, images, arr[0]);
        resizeTop(move, images, arr[0]);
        showUp(arr[0]);
    }
    else {
        images.innerHTML = ``;
        imagesShowTrigger = true;
    }
}
function showVideo() {
    if (videoShowTrigger) {
        video.innerHTML = `
        <div class="video1 border resizable d-flex flex-column" id="mover2">
            <div class="resizer resizer-lv"></div>
            <div class="resizer resizer-rv"></div>
            <div class="resizer resizer-bv"></div>
            <div class="resizer resizer-tv"></div>
            <div class="p10 d-flex j-end borderb" id="moverSnap2">
                <div class="close1">X</div>
            </div>
            <div class="d-flex p10 gap">
                <div class="findVideo">
                <video width="320" height="240" controls>
                  <source src="FC%20Baseball%20-%20Gyvenimas%20(video).mp4" type="video/mp4">
                  <source src="FC%20Baseball%20-%20Gyvenimas%20(video).mp4" type="video/ogg">
                </video>
</div>
            </div>
        </div>
    `;
        const close1 = document.querySelector(".close1");
        videoShowTrigger = false;
        close1.onclick = () => {
            video.innerHTML = ``;
            videoShowTrigger = true;
        };
        const findVideo = document.querySelector(".findVideo");
        findVideo.onclick = () => {
        };
        const move2 = document.getElementById("mover2");
        const moveSnap2 = document.getElementById("moverSnap2");
        dragElement(move2, moveSnap2, arr[1]);
        resizeRightV(move2, video, arr[1]);
        resizeBottomV(move2, video, arr[1]);
        resizeLeftV(move2, video, arr[1]);
        resizeTopV(move2, video, arr[1]);
        showUp(arr[1]);
    }
    else {
        video.innerHTML = ``;
        videoShowTrigger = true;
    }
}
function showAudio() {
    if (audioShowTrigger) {
        audio.innerHTML = `
        <div class="audio1 border resizable d-flex flex-column" id="mover3">
            <div class="resizer resizer-la"></div>
            <div class="resizer resizer-ra"></div>
            <div class="resizer resizer-ba"></div>
            <div class="resizer resizer-ta"></div>
            <div class="p10 d-flex j-end borderb" id="moverSnap3">
                <div class="close2">X</div>
            </div>
            <div class="d-flex p10 gap">
                <div class="findAudio">
                    <audio controls>
                        <source src="dfsdf.mp3" type="audio/ogg">
                        <source src="dfsdf.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        </div>
    `;
        const close2 = document.querySelector(".close2");
        audioShowTrigger = false;
        close2.onclick = () => {
            audio.innerHTML = ``;
            audioShowTrigger = true;
        };
        const move3 = document.getElementById("mover3");
        const moveSnap3 = document.getElementById("moverSnap3");
        dragElement(move3, moveSnap3, arr[2]);
        resizeRightA(move3, audio, arr[2]);
        resizeBottomA(move3, audio, arr[2]);
        resizeLeftA(move3, audio, arr[2]);
        resizeTopA(move3, audio, arr[2]);
        showUp(arr[2]);
    }
    else {
        audio.innerHTML = ``;
        audioShowTrigger = true;
    }
}
start.onclick = (event) => {
    if (drop) {
        dropdown.innerHTML = `
        <div class="dropdown1 border d-flex flex-column j-btw">
            <div>
                <div class="divImages p10 border">Images</div>
                <div class="divVideo p10 border">Video</div>
                <div class="divAudio p10 border">Audio</div>
            </div>
            <div>
                <div class="divShutdown p10 border">Shut down</div>
            </div>
        </div>
        `;
        drop = false;
        const divImages = document.querySelector(".divImages");
        const divVideo = document.querySelector(".divVideo");
        const divAudio = document.querySelector(".divAudio");
        divImages.onclick = () => {
            showImages();
        };
        divVideo.onclick = () => {
            showVideo();
        };
        divAudio.onclick = () => {
            showAudio();
        };
        const divShutdown = document.querySelector(".divShutdown");
        divShutdown.onclick = () => {
            window.close();
        };
    }
    else {
        dropdown.innerHTML = ``;
        drop = true;
    }
};
iconImages.ondblclick = () => {
    showImages();
};
iconVideo.ondblclick = () => {
    showVideo();
};
iconAudio.ondblclick = () => {
    showAudio();
};
setInterval(() => {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    times.innerHTML = dateTime;
}), 1000;
