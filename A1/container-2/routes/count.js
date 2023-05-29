import express from 'express';
import fs from 'fs';
import csv from 'csv-parser';

const volumePath = '/app/myDir';

const router = express.Router();

router.post('/count', async (req, res) => {
  try {
    const { file, product } = req.body;
    const filePath = `${volumePath}/${file}`;

    const data = [];

    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          const product = row.product;
          const amount = Number(row.amount);
          data.push({ product, amount });
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });

    let totalAmount = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].product === product) {
        totalAmount += Number(data[i].amount);
      }
    }

    res.status(200).json({ file, sum: totalAmount });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

export default router;
