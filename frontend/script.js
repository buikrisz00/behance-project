let bgImgArray = ["homeBg0" ,"homeBg1", "homeBg2"];
let clickNumL = 0;
let clickNumR = 2;

function changeImg(buttonId) {

    if (buttonId === "changeImageL") {
        for (let i = 0; i < bgImgArray.length; i++) {
            document.getElementById(bgImgArray[i]).style.opacity = 0;
        }
        document.getElementById(bgImgArray[clickNumL]).style.opacity = 0.5;
        if (clickNumL > 0) {
            clickNumL--;
            clickNumR = clickNumL + 1;
            console.log(clickNumL + "<- ->" + clickNumR);
        }
        else {
            clickNumL = 2;
            clickNumR = 1;
            console.log(clickNumL + "<- ->" + clickNumR);
        }
    }

    if (buttonId === "changeImageR") {
        for (let i = 0; i < bgImgArray.length; i++) {
            document.getElementById(bgImgArray[i]).style.opacity = 0;
        }
        document.getElementById(bgImgArray[clickNumR]).style.opacity = 0.5;
        if (clickNumR < 2) {
            clickNumR++;
            clickNumL = clickNumR - 1;
            console.log(clickNumL + "<- ->" + clickNumR);
        }
        else {
            clickNumR = 0;
            clickNumL = 1;
            console.log(clickNumL + "<- ->" + clickNumR);
        }
    }  
 }
 
 