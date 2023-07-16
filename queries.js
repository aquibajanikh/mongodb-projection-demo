// Queries:

// Find all employees with only their name and department displayed
// db.employees.find({}, { name: 1, department: 1, _id: 0 })

// Find employees earning a salary greater than $60,000 with only their name and salary displayed
// db.employees.find({ salary: { $gt: 60000 } }, { name: 1, salary: 1, _id: 0 })

// Find employees with their name and age displayed, sorted by age in descending order
// db.employees.find({}, { name: 1, age: 1, _id: 0 }).sort({ age: -1 })

// Find employees who possess the skill "programming" with their name and department displayed
// db.employees.find({ skills: "programming" }, { name: 1, department: 1, _id: 0 })


// Find employees with their name and the first skill in their skills array displayed
// db.employees.find({}, { name: 1, firstSkill: { $arrayElemAt: ["$skills", 0] }, _id: 0 })

