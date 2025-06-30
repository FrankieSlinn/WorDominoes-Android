const localDB = 'mongodb+srv://FranKissling:Franziska1@cluster0.imr1g2z.mongodb.net/WorDominoesHOF2025'

const currentDB = process.env.MONGODB_URI || localDB
module.exports = currentDB