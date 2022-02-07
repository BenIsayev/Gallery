'use strict'

var gNums;
var gNextNum = 1;
var gCount;
var gLastNum;
var gInterval

function init() {
    clearInterval(gInterval);
}

function cellClicked(elClickedNum) {
    var nextNumStr = '' + gNextNum;
    var elTimer = document.querySelector('.timer')
    if (elClickedNum.innerText === nextNumStr) {
        gNextNum++;
        elClickedNum.style.backgroundColor = 'gold';
    }
    if (elClickedNum.innerText === '1') {
        elTimer.style.display = 'block'
        var startTime = Date.now();
        gInterval = setInterval(setTime, 100, startTime);
    }
    if (elClickedNum.innerText === gLastNum + '' && gLastNum === gNextNum - 1) {
        alert('You have won the game!!!')
        clearInterval(gInterval)
    }
}

function selectDiff(elBtn) {
    var elButtons = document.querySelectorAll('.myButton')
    var diff = elBtn.innerText;
    console.log(diff)
    if (diff === 'Easy') {
        gCount = 16;
    } else if (diff === 'Hard') {
        gCount = 25;
    } else if (diff === 'Pro') {
        gCount = 36;
    } else if (diff === 'Insane') {
        gCount = 49;
    }
    gNums = genNums(gCount);
    gLastNum = gCount;
    shuffle(gNums)
    renderBoard(gNums, gCount)
    for (var i = 0; i < elButtons.length; i++) {
        var currButton = elButtons[i];
        currButton.style.display = 'none';
    }
}

function genNums(count) {
    var nums = [];
    for (var i = 1; i < count + 1; i++) {
        nums.push(i);
    }
    return nums;
}

/* <td onclick="cellClicked((0,0),this)" class="cell">a</td> */
function renderBoard(nums, count) {
    var countSqrt = Math.sqrt(count);
    var strHTML = '';
    for (var i = 0; i < countSqrt; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < countSqrt; j++) {
            var currNum = nums.pop();
            strHTML += `<td onclick="cellClicked(this)" class="cell">${currNum}</td>`
        }
        strHTML += '</tr>';
    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}




function setTime(startTime) {
    var elTimer = document.querySelector(".timer")
    var currTime = Date.now()
    var diff = ((currTime - startTime) / 1000).toFixed(3)
        // ++totalSeconds;
    elTimer.innerText = diff;

}