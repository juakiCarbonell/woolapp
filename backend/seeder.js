import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from './config/db.js'

import products from "./data/products.js";

import Wool from "./models/wool.js";
// import Project from "./models/project";

dotenv.config()

connectDB()


const importData = async () => {
  try {
    await Wool.deleteMany()

    await Wool.insertMany(products)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}.`.red.inverse)
    process.exit(1)
  }
}


const destroyData = async () => {
  try {
    await Wool.deleteMany()


    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if(process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}