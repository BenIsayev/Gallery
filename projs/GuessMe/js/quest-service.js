var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
const STORAGE_KEY = 'questTree';

function createQuestsTree() {
    gQuestsTree = loadFromStorage(STORAGE_KEY)
    if (!gQuestsTree || gQuestsTree.length) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    }
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    //Create and Connect the 2 Quests to the quetsions tree
    var newQuest = createQuest(newGuessTxt)
    newQuest.yes = createQuest(newQuestTxt);
    newQuest.no = gCurrQuest;
    gPrevQuest[lastRes] = newQuest;
    _saveQuestsToStorage();
}


function _saveQuestsToStorage() {
    saveToStorage(STORAGE_KEY, gQuestsTree)
}


function getCurrQuest() {
    return gCurrQuest
}