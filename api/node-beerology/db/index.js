import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("beers_db", "root", "|c>Z6VjQbXf", {
    dialect: "mysql",
    host: "localhost"
});
