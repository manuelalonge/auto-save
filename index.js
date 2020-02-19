function getEditor() {
    var elems = document.getElementsByTagName('textarea');

    if (elems.length <= 0)
        return null;

    return elems[0];
}

var autoSave = document.querySelector('#autoSaveText');

autoSave.addEventListener('input', () => {
    var key = document.location;
    var editor = getEditor();
    var text = editor.value;
    window.localStorage.setItem(key, text);
});

function restore() {

    var saved = localStorage.getItem(document.location)
    var editor = getEditor();
    if (saved && editor) {

        editor.value = saved;
    }
}

/*
var clearButton = document.querySelector('#clearButton');

clearButton.addEventListener('click', () => {
    window.localStorage.removeItem(key);
});
*/