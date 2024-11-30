let num = 4;
let num2 = 4.5;
let num3 = "1";
let num4 = 4.33333333;

// ép kiểu qua string
const methodToString = num2.toString();

//làm tròn xuống
const methodFloor = Math.floor(num2);

//làm tròn lên
const methodCeil = Math.ceil(num2);

//làm tròn 4.5 -> 5 4.4 ->4
const methodRound = Math.round(num2);

//lấy baonh số sau dấu "." (type là String)
const methodToFixed = num4.toFixed(2);
const methodToFixedNumber = parseFloat(num4.toFixed(2)); // đưa về number float

// check không phải là số
//lưu ý khi truyền "123" vô thì nó sẽ trả về false vì hàm này nó convert bên dưới là Number
const method = isNaN(num3);

