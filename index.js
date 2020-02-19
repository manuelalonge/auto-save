function getEditor() {
    var elems = document.getElementsByTagName('textarea');

    if (elems.length <= 0){
        return null;
    }        
    return elems[0];
}

var key = 'key';
var autoSave = document.querySelector('#autoSaveText');

autoSave.addEventListener('input', () => {
    var editor = getEditor();
    var text = editor.value;
    window.localStorage.setItem(key, text);
});

function restore() {
    var saved = window.localStorage.getItem(key);
    var editor = getEditor();
    if (saved && editor) {
        editor.value = saved;
    }
}

restore();

var clearButton = document.querySelector('#clearButton');

clearButton.addEventListener('click', () => {
    window.localStorage.removeItem(key);
    var editor = getEditor();
    editor.value = '';
});
