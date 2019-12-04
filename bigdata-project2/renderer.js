let form = document.getElementById('form-reg');

function formGetJson(e) {
    if (e.preventDefault) e.preventDefault();

    let data = JSON.stringify(form);
    const fs = require('fs');
    fs.writeFileSync('./users/file.json', data, alert('success'));

      console.log(form);
    
    return false;
}

if (form.attachEvent) {
    form.attachEvent("submit", formGetJson);
} else {
    form.addEventListener("submit", formGetJson);
}


