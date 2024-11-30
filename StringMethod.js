// ============================================================= String Method =============================================================

const mtr = "Chi sau bam boc";

// cắt chuỗi thành các phần tử trong mảng
const methodSplit = mtr.split(" ");

//được dùng để loại bỏ khoảng trắng ở đầu và cuối chuỗi.
const methodTrim = mtr.trim();

//đổi thành tất cả  chữ hoa
const methodToLocaleUpperCase = mtr.toLocaleUpperCase();

//đổi thành tất cả  chữ thường
const methodToLocaleLowerCase = mtr.toLocaleLowerCase();

//ép kiểu qua number
const mtr2 = "1";
const methodParseInt = +mtr2;
const methodParseInt2 = Number.parseInt(mtr2);

//thay thế phần tử
const methodReplace = mtr.replace("Chi", "bà");


///============ testMethod ============

//kiểm tra chuỗi bắt đầu
const methodStartsWith = mtr.startsWith("chi");

//kiểm tra chuỗi chứa phần tử
const methodIncludes = mtr.includes("sau");
