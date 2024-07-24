let a;
const b = 10;
const e = true;
const c = "hieu";
const d = "ngo";

if (b>=10) {`g`
    console.log("hieu ngo");
}

// command + /

console.log(a);
a = null;
console.log(a);
a = 10;
// dinh nghia function nhu the nao, co nhung parameter nao, kieu tra ve function, chu no khong thuc thi
function additionCalculate(thamsoA ,thamsoB) {
    a = 11;
    console.log(a);
    console.log(thamsoA);
    console.log(thamsoB);
    return `ket qua tra ve la ${thamsoA+thamsoB}`;
}
// console.log(a);
const result = additionCalculate(10,5);
console.log(result);

const result2 = additionCalculate(100,5);
console.log(result2);

// Tinh toan phuong trinh bac 2, voi 3 tham so a,b,c. Bo qua truong hop nghiem phuc.

// ax^2+bx+c=0
