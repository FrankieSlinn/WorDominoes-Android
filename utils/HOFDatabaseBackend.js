const express = require ('express')

//Require Mongoose MOdel for Score
const Minimum = require('../models/minimum')

//Instantiate a Router
const router = express.Router()

router.get('/minimums', (req, res)=>{
  Minimum.find()
  .then((min)=>{
      res.json({minvalue: min})

  })
  .catch((error)=>{
      res.status(500).json({error: error})
  })
})

// // PUT request handler to update a Minimum document by ID
// router.put("/minimums/:id", async (req, res) => {
//   try {
//       const { id } = req.params;
//       const { minvalue } = req.body;

//       // Find the document by ID and update it
//       const updatedMinimum = await Minimum.findByIdAndUpdate(id, req.body, { new: true });

//       if (!updatedMinimum) {
//           return res.status(404).json({ message: 'Minimum not found' });
//       }

//       return res.json(updatedMinimum);
//   } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Server error' });
//   }
// });


// router.post('/minimums', async (req, res) => 
// {
//   try{
//     console.log(req.body)
//     const {minvalue} = req.body;
  
//   const newMin = new Minimum({ minvalue});
//   const savedMin = await newMin.save();

  
//       // Respond with the saved score data
//       res.status(201).json(savedMin);
//     } catch (err) {
//       // If there's an error, respond with an error message
//       res.status(500).json({ error: 'Could not save the minimum.' });
//     }
//   });
  module.exports=router
