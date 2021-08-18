"use strict";
// import express, { NextFunction, Request, Response } from 'express'
// const router = express.Router();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /* GET home page. */
// router.get('/', function(req:Request, res:Response, next:NextFunction) {
//   res.json( { title: 'Express' });
// });
// export default router;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const db_1 = __importDefault(require("../libs/db"));
/* GET home page. */
router.get('/', async function (req, res, next) {
    try {
        const d = await db_1.default.query('SELECT * FROM books');
        res.json(d);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        res.json({ message: process.env.DB_USER, status: true, timeStamp: 324234243 });
    }
});
router.post('/book', async function (req, res) {
    const input = req.body;
    try {
        await db_1.default.query('INSERT INTO books VALUES(NULL, ?, ?, ?)', [input.title, input.author, input.year]);
    }
    catch (err) {
    }
    finally {
        res.json({ message: 'oke' });
    }
});
exports.default = router;
