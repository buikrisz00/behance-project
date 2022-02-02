let bgImgArray = ["homeBg0" ,"homeBg1", "homeBg2"]
let clickNum = 0

function changeImg(buttonId) {

    if (buttonId == "changeImageL") {
        for (let i = 0; i < bgImgArray.length; i++) {
            document.getElementById(bgImgArray[i]).style.opacity = 0  
        }
        document.getElementById(bgImgArray[clickNum]).style.opacity = 0.5
        if (clickNum > 0) {
            clickNum--
        }
        else {
            clickNum = 2
        }
        console.log(buttonId)
        console.log(clickNum)
    }

    if (buttonId == "changeImageR") {
        for (let i = 0; i < bgImgArray.length; i++) {
            document.getElementById(bgImgArray[i]).style.opacity = 0  
        }
        document.getElementById(bgImgArray[clickNum]).style.opacity = 0.5
        if (clickNum < 2) {
            clickNum++
        }
        else {
            clickNum = 0
        }
        console.log(buttonId)
        console.log(clickNum)
    }  
 }
 
 