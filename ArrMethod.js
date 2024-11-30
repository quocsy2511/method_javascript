// ============================================================= Array Method =============================================================

let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8];

// thêm 1 phần tử vào cuối mảng
const methodPush = arrNumber.push(4);

//thêm 1 phần tử vào đầu mảng hả
const methodUnshift = arrNumber.unshift(5);

//xoá đi 1 phần tử đầu tiên
const methodShift = arrNumber.shift();

//xoá đi 1 phần tử cuối
const methodPop = arrNumber.pop();

// đảo mảng
const methodReverse = arrNumber.reverse();

//nối mảng phải truyền thêm separator nếu không sẽ tự đống lấy thêm dấu ","
const myName = ["Nguyen", "Quoc", "Sy"];
const methodJoin = myName.join(" ");

//a - b: Sắp xếp tăng dần.
//b - a: Sắp xếp giảm dần.
let arrNumber2 = [8, 2, 5, 1];
const methodSort = arrNumber2.sort((a, b) => {
  return b - a;
});

// nối mảng
const methodConcat = arrNumber.concat(arrNumber2);

// lấy ra vị trí của phần tử trong mảng
let arrNumber4 = [1, 3, 4, 5, 2];
const indexValue = arrNumber4.indexOf(5);

// ============ Destructuring array

// nối mảng
const spread = [...arrNumber];
const spread2 = [...arrNumber, ...arrNumber2];

// ============ Rest parameter

//nó sẽ lấy ra theo index
let arrNumber3 = [9, 8, 7, 5];
const [first, second, ...rest] = arrNumber3;

///============ testMethod ============

//Dùng để kiểm tra nếu ít nhất một phần tử trong mảng thỏa mãn điều kiện được xác định bởi hàm callback.
const methodSome = arrNumber.some((item) => {
  return item >= 2;
});

//Trái ngược với Some  Dùng để kiểm tra nếu tất cả phần tử trong mảng thỏa mãn điều kiện được xác định bởi hàm callback.
const methodEvery = arrNumber.every((item) => {
  return item >= 1;
});

//Dùng để kiểm tra xem trong mảng có chứa phần tử này không
const methodIncludes = arrNumber.includes(5);

//kiểm tra có phải là mảng không
const isArray = Array.isArray(arrNumber);

///============ hàm lọc mảng ============

//Dùng để tìm kiếm 1 phần tử gần nhất thoả điều kiện bắt đầu từ index = 0 => (không trả về mảng)
const methodFind = arrNumber.find((item) => item >= 2);

//Dùng để tìm kiếm các phần tử  thoả điều kiện bắt đầu từ index = 0  => trả ra mảng
const methodFilter = arrNumber.filter((item) => item >= 2);

// Method này sử dụng để xóa các phần tử trong mảng và sẽ trả về các phần tử đã xóa
// 2 tham số là index và count number
const methodSplice = arrNumber.splice(0, 2);

// Method này sử dụng để lấy các phần tử trong mảng (không lấy phần tử ở vị trí end)
// 2 tham số là start và end
const methodSlice = arrNumber.slice(0, 1);

///============ tính toán

//Đây là method dùng để tính toán từ các phần tử của mảng (theo thứ tự từ trái sang phải).
const methodReduce = arrNumber.reduce((total, item) => {
  const x = total + item;
  const y = x * 2;
  return y;
}, 0);
