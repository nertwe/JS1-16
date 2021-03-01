function isPalindrome() {
    // Вводим фразу и записываем ее в переменную
    let palindrome = prompt("Введите фразу:");
    // Приводим всю фразу к нижнему регистру, убираем пробелы и запятые
    let _palindrome = palindrome.toLowerCase().split(" ").join("").split(",").join("");
    // Реверсируем полученную строку
    let revPalindrome = _palindrome.split("").reverse().join("");
    // Сравниваем это строки
    if (_palindrome === revPalindrome) {
        return "Это палиндром.";
    } else {
        return "Это не палиндром."
    }
}
console.log(isPalindrome());
