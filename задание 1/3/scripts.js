let conf = false;
do {
    let name = prompt('Введите имя');
    if (name == null || name === '') {
        continue;
    }

    conf = confirm("Ваше имя: " + name + "?");
    if (conf === true) {
        alert('Здравствуй, ' + name + "!");
    }
} while (conf === false);