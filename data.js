db.employees.insertOne({
  name: "John Doe",
  age: 30,
  department: "Sales",
  salary: 50000,
  address: {
    city: "New York",
    country: "USA"
  },
  skills: ["communication", "negotiation", "sales"]
})

db.employees.insertOne({
  name: "Jane Smith",
  age: 35,
  department: "Marketing",
  salary: 60000,
  address: {
    city: "Los Angeles",
    country: "USA"
  },
  skills: ["marketing", "analytics", "creativity"]
})

db.employees.insertOne({
  name: "David Johnson",
  age: 28,
  department: "Engineering",
  salary: 70000,
  address: {
    city: "San Francisco",
    country: "USA"
  },
  skills: ["programming", "problem-solving", "teamwork"]
})

db.employees.insertOne({
  name: "Emily Wilson",
  age: 32,
  department: "HR",
  salary: 45000,
  address: {
    city: "Chicago",
    country: "USA"
  },
  skills: ["recruiting", "employee relations", "organizational development"]
})

db.employees.insertOne({
  name: "Michael Lee",
  age: 40,
  department: "Finance",
  salary: 80000,
  address: {
    city: "Houston",
    country: "USA"
  },
  skills: ["financial analysis", "budgeting", "risk management"]
})
