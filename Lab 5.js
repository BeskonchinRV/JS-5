var list = [];
for (i = 0; i < 10; i++)
{
    list.push(7);
}
console.log(list);

var str = ("stroke");
var mas = str.split(' ');
mas[0] = "Human React";
str = mas.join(' ');
console.log(str);

var originalText = "Шерлок Холмс - великий сыщик и лучший друг доктора Ватсона.";
console.log("Исходный текст: " + originalText);
var mas = originalText.split(' ');
var encryptedWords = [];
for (let i = 1; i < mas.length; i += 2)
{
    encryptedWords.push(mas[i]);
}
var encryptedText = encryptedWords.join(' ');
console.log("Зашифрованный текст: " + encryptedText);

var mas = [2, 4, 6, 2];
console.log(Math.sqrt((Math.pow((mas[2] - mas[0]), 2) + Math.pow((mas[3] - mas[1]), 2))))

var v = prompt("Хочешь я выберу за тебя место, которое ты посетишь? (да/нет)");
if (v.toLowerCase() === "да")
{
    var mas = ["Кольский полуостров", "Куршская коса", "Северное Урал", "Терский берег", "Саяны", "Хакассия", "Алтайские горы"];
    var fortune = Math.floor(Math.random() * mas.length);
    console.log(mas[fortune]);
}
else if (v.toLowerCase() === "нет")
{
    console.log("Ну как хочешь");
}
else
{
    console.log("Только 'да' или 'нет'");
}

var v =("my little dog");
v.toLowerCase();
var mas = v.split(' ' || '');
var result = [];
var count = 0;
var words = [["my","моя"],["name","имя"],["is","это"],["how","как"],["butterfly","бабочка"],["beautiful","красивый"],["i","я"],["little","маленький"],["dog","пес"],["very","очень"]];
for(let i = 0; i < mas.length; i++)
{
    for(let j = 0; j < words.length; j++)
    {
        count++;
        if (mas[i] === words[j][0])
        {
            result.push(words[j][1]);
        }
        else
        {
            result[i - count]="?";
        }
    }
}
var reresult= result.join(' ');
console.log(reresult);
