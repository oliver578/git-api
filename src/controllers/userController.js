import User from "../models/users.js";

const userController = {

  getAllUsers: async (req, res) =>{
    try {
      const users = await User.find({})
      console.log(users);
      res.status(201).json(users)
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  },

  getUser: async (req, res) => {
    const userId = req.params.id
    try {
      const users = await User.findById(userId)
      res.status(201).json(users)
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  creatUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      return res.json(newUser); 
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  },

  updateUser : async (req, res) => {
    const updatedInfo = Object.keys(req.body)
    const userId = req.params.id
    try {
      const user = await User.findById(userId)
      if(!user) return res.status(404).send('User Not Found')
      updatedInfo.forEach(update => user[update] = req.body[update])
      await user.save();
      res.status(201).json(user)
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  
    deleteUser: async (req, res) => {
    const userId = req.params.id
    try {
      const user = await User.findByIdAndDelete(userId)
      if(!user) return res.status(404).send('User Not Found')
      res.status(201).send(`${user} \n Supression succes`)
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
  }
  

  export default userController;
  