const {User} = require("./models");

User.create({
    name: "Admin",
    email: "smkTB@gmail.com",
    password: "123456",
    level: "admin"
})