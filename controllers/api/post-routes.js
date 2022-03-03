// Import our necessary libraries and models
const router = require('express').Router();
const { Post } = require('../../models');

// Create a NEW POST Post Route uses WithAuth to verify that user is logged IN
    // NOTE: to test with insomnia you have to delete the withAuth and test the route and add it after
    // Use withAuth middleware to prevent access to route
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
});

// Update a POST Put route also with withAuth
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id
            },
        });
        if (!postData) {
            res.status(400).json({ message: 'There is no post with such id!' })
            return
        }
        res.status(200).json({ message: `Post #${req.params.id} has been updated` })
    } catch (err) {
        res.status(500).json(err)
    }
});

// Delete a POST Delete Route also with withAuth

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!postData) {
            res.status(400).json({ message: 'There is no post with such id' })
        } else {
            res.status(200).json({ message: `Post #${req.params.id} has been deleted` })
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

// Display ALL POSTS get route


// Display SPECIFIC POST get route


// Export the routes
// and import to api index.js
module.exports = router;