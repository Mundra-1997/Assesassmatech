const User = require('../schemas/Userschemas');
const cloudinary = require('../utils/cloudinary')

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.searchUsers = async (req, res) => {
  const { query } = req.query;
  try {
    const users = await User.find({ fullName: { $regex: query, $options: 'i' } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getUserDetails = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.find({_id:userId});
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.addUser = async (req, res) => {
  try {
    
    const result = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = result.url;

    
    const newUser = new User({
      fullName: req.body.fullName,
      profilePicture: imageUrl,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      jobTitle: req.body.jobTitle,
      department: req.body.department,
      location: req.body.location,
      shortBio: req.body.shortBio,
    });

    
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
