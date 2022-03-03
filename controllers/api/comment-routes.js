// Import our necessary libraries and models
const router = require('express').Router();
const { Comment } = require('../../models');

// Post Route and should use WithAuth to verify that user is logged IN
    // NOTE: to test with insomnia you can delete the withAuth and test the route and add it after
router.post('/', async (req, res) => {
    try {
        if (req.body.title && req.body.description) {
            const postData = await Post.create({
                title: req.body.title,
                description: req.body.description,
                user_id: req.body.user_id,
            })
            res.status(200).json(postData)
        } else {
            res.status(400).json({ message: 'Posts must have a title and contents!' })
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// Export the routes
// and import to api index.js
module.exports = router;