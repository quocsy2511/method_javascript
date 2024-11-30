const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};
const details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};

// lấy ra các keys tảo ra 1 mảng
const keys = Object.keys(employees);

// lấy ra các values tảo ra 1 mảng
const values = Object.values(employees);

// tạo một nested array với key/value của một Object.
const entries = Object.entries(employees);

// ============ Destructuring array

//nối obj
const spread = { ...employees, ...details };

// ============ Rest parameter

// lấy 1 parameter ra khỏi obj
const { boss, ...rest } = employees;

// thêm 1 parameter vào obj
const employees2 = { ...rest, job: "Delivery Boy" };
