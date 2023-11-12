import IsEmpty from '../IsEmpty'

export function GetLanguage() {
    let language = localStorage.getItem("language");
    if(IsEmpty(language)) language = "en"
    return language;
}