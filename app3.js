function weekFn(n) {
    switch (n) {
        case 1:
            return "Понеділок";
        case 2:
            return "Вівторок";
        case 3:
            return "Середа";
        case 4:
            return "Четвер";
        case 5:
            return "Пʼятниця";
        case 6:
            return "Субота";
        case 7:
            return "Неділя";
        default:
            return null;
    }
}
console.log(weekFn(5));
console.log(weekFn(5.1));