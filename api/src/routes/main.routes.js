const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        res.json(
                {error: false, message: 'Hellow Word!'}
            ) 
            next()
    } catch (err) {
        res.json(
            {error: true, message: err.message}
            )
            next()
    }
});


module.exports = router;