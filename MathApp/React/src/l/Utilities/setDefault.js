import IsEmpty from 'Components/Utilities/IsEmpty'

export default function setDefault (value, defaultValue) {
    if(IsEmpty(value)) return defaultValue
    return value
}