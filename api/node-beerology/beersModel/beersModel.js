import {Sequelize} from "sequelize";
import { sequelize } from "../db/index.js";

export const Beer = sequelize.define("beers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    image_url: {
        type: Sequelize.STRING,
        allowNull: false
    },

    tagline: {
        type: Sequelize.STRING,
        allowNull: false
    },
})