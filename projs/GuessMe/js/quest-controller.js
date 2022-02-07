'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);
$('.restart').click(onRestartGame)

function init() {
    console.log('Started...');
    createQuestsTree();
}

function onStartGuessing() {
    //hide the game-start section
    $('.game-start').addClass('d-none');

    renderQuest();
    //show the quest section
    $('.quest').removeClass('d-none');
}

function renderQuest() {
    //Select the <h2> inside quest and update
    // its text by the currQuest text
    $('.quest h2').text(gCurrQuest.txt)
}

function onUserResponse(ev) {
    var res = ev.data.ans;
    console.log(res)
        // If this node has no children
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            // improve UX
            $('.quest').addClass('d-none')
            $('.game-won').removeClass('d-none')
        } else {
            // hide and show new-quest section
            $('.quest').addClass('d-none');
            $('.new-quest').removeClass('d-none');
        }
    } else {
        //update the lastRes global var
        gLastRes = res;
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess(ev) {
    ev.preventDefault();
    //Get the inputs' values
    var newGuess = $('#newGuess').val();
    var newQuest = $('#newQuest').val();
    if (!newGuess || !newQuest) return;

    //Call the service addGuess
    addGuess(newGuess, newQuest, gLastRes)
    onRestartGame();
    $('#newGuess').val('');
    $('#newQuest').val('');
}

function onRestartGame() {
    gCurrQuest = gQuestsTree;
    gLastRes = null;
    gPrevQuest = null;
    $('.new-quest').addClass('d-none');
    $('.game-won').addClass('d-none');
    $('.game-start').removeClass('d-none');
}