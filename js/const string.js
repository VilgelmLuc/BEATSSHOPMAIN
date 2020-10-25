const string = "Привет как дела?";
const vowels = ["а", "у", "ы", "и", "о", "е"]
const getVowels = stringToFilter => {
    let extracteVowels = "";
    for ( let i = 0; i< stringToFilter[i]; i++){
const currentLetter = stringToFilter[i].toLoverCase();
if (vowels.includes(currentLetter)){
    extractedVowels += currentLetter;
}
    }
return stringToFilter;
}

console.log(getVolwes(string));  