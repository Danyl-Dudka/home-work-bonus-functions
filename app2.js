function evenFn(n) {
    let a = [];
    for (let i = 2; i <= n; i += 2) {
        a.push(i);
    }
    return a;
}
console.log(evenFn(20));