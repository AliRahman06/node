// import express, { NextFunction, Request, Response } from 'express'
// const router = express.Router();

// /* GET home page. */
// router.get('/', function(req:Request, res:Response, next:NextFunction) {
//   res.json( { title: 'Express' });
// });



// export default router;

import express, { Router, Request, Response, NextFunction } from 'express';
const router = express.Router()
import Db from '../libs/db'

/* GET home page. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
  try {
    const d = await Db.query('SELECT * FROM books');
    res.json(d);
  } catch(err) {
    console.log(err);
  } finally {
    res.json({ message: process.env.DB_USER, status: true, timeStamp: 324234243 })
  }
});

router.post('/book', async function(req: Request, res: Response) {
  const input = req.body;
  try {
    await Db.query('INSERT INTO books VALUES(NULL, ?, ?, ?)', [input.title, input.author, input.year])
  } catch(err) {
    
  } finally {
    res.json({ message: 'oke' });
  }
});

export default router;
