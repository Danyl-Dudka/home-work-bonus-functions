function defUpperStr(text) {
    let i = (text || "DEFAULT TEXT").toUpperCase();
    return i;
}
console.log(defUpperStr("hello"));
console.log(defUpperStr());