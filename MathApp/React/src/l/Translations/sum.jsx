export default function sum(up, down, concated = true) {
    let lang = localStorage.getItem("language");
    return `${lang === "ar" && !concated ? "\\alwaysar{":""}\\sum${lang === "ar" && !concated ? "}":""}\\limits_{{${lang === "ar" && !concated ? "\\alwaysar{":""}${down}${lang === "ar" && !concated ?"}":""}}}^{${lang === "ar" && !concated ? "\\alwaysar{":""}${up}${lang === "ar" && !concated ?"}":""}}`
}