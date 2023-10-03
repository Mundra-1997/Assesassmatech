const express = require('express');
const router = express.Router();
const userController = require('../controllers/Usercontrollers');
const multer = require('multer');

// Configure Multer for profile picture uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Get all users
router.get('/', userController.getAllUsers);

// Search for users by name
router.get('/search', userController.searchUsers);

// Get user details by ID
router.get('/:userId', userController.getUserDetails);

// Add a new user with profile picture upload
router.post('/addUsers', upload.single('profilePicture'), userController.addUser);

module.exports = router;
