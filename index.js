document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    var key = 'key';
    var autoSave = document.querySelector('#autoSaveText');

    autoSave.addEventListener('input', () => {
        var text = autoSave.value;
        window.localStorage.setItem(key, text);
    });

    function restore() {
        var saved = window.localStorage.getItem(key);

        if (saved && text) {
            text = saved;
        }
    }

    restore();

    var clearButton = document.querySelector('#clearButton');

    clearButton.addEventListener('click', () => {
        window.localStorage.removeItem(key);
        text = '';
    });


});


