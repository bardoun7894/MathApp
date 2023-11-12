export default function npk(n, k, text = [false, false]) {
    n = n.toString()
    k = k.toString()
    return `{}^{${text[0] === true ? `\\transt{\\text{${n}}}{${n}}`:n}} \\mathrm{\\transs{P}{ل}}_{${text[1] === true ? `\\transt{\\text{${k}}}{${k}}`:k}}`
}