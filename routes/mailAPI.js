const express = require('express');
const router = express.Router();

// les API
router.post('/send-html', (req, res)=>{
    res.json({message : "E-mail send successfully!"})
});

module.exports = router;