let input_string = "";
let input_array = [];
do {
    input_string = prompt("Введите строку, разделяя слова точкой с запятой (;)");
} while (input_string == null || input_string === "" || input_string.indexOf(";") === -1);

// input_string = input_string.split(" ").join("");
input_array = input_string.split(";");

for (let i of input_array){
    if (i !== '') {
        document.write(i + '<br>');
    }
}
