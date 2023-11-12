export default function ncr(n, r, text = [false, false]) {
    n = n.toString()
    r = r.toString()
    return `{}^{${text[0] === true ? `\\transt{\\text{${n}}}{${n}}`:n}} \\mathrm{\\transs{C}{ق}} _{${text[1] === true ? `\\transt{\\text{${r}}}{${r}}`:r}}`
}