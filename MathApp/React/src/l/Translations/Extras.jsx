import tnum from './tnum'

export function overline(content, lang, reverse = true) {
    if(lang === 'en' || reverse === false)return `\\overline{${content}}`
    return `\\overline{\\alwaysar{${content}}}`
}

export function fraction(num = 1, dom = 2, className = "", style = {}, numStyle = {}, sepStyle = {}, domStyle = {}) {
    return(
    <div style={{display: "inline-block", textAlign: "center", width: "15px", fontSize: "16px", ...style}} className={className}>
        <div style={{...numStyle}}>{tnum(num)}</div>
        <div style={{background: "black", height: "1px", ...sepStyle}}/>
        <div style={{...domStyle}}>{tnum(dom)}</div>
    </div>
    )
}

export function therefore() {
    return `∴`
}

export function because() {
    return `∵`
}