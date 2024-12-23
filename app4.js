function ageClassification(n) {
    if (n <= 0 || n > 122) {
        return null;
    }
    else if (n <= 24) {
        return "Дитинство";
    } else if (n <= 44) {
        return "Молодість";
    } else if (n <= 65) {
        return "Зрілість";
    } else if (n <= 75) {
        return "Старість";
    } else if (n <= 90) {
        return "Довголіття";
    } else if (n <= 122) {
        return "Рекорд";
    }

}
console.log('    -1 :', ageClassification(-1));
console.log('     0 :', ageClassification(0));
 console.log('     1 :', ageClassification(1));
 console.log('    24 :', ageClassification(24));
 console.log(' 24.01 :', ageClassification(24.01));
 console.log('    44 :', ageClassification(44));
 console.log(' 44.01 :', ageClassification(44.01));
 console.log('    65 :', ageClassification(65));
 console.log('  65.1 :', ageClassification(65.1));
 console.log('    75 :', ageClassification(75));
 console.log(' 75.01 :', ageClassification(75.01));
 console.log('    90 :', ageClassification(90));
 console.log(' 90.01 :', ageClassification(90.01));
 console.log('   122 :', ageClassification(122));
 console.log('122.01 :', ageClassification(122.01));
 console.log('   150 :', ageClassification(150));