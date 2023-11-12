import English from './en.json'
import Arabic from './ar.json'
import IsEmpty from '../../Utilities/IsEmpty'

export function tserver() {
    let language = localStorage.getItem("language");
    if(IsEmpty(language)) language = "en";
    return language === "en" ? English : Arabic;
}