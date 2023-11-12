export default function round(number, digits = 2) {
    return Math.round(number * (10 ** digits)) / (10 ** digits)
}