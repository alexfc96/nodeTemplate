const Task = require('../models/Task');

export const getTasks = async (req, res) => {
    try {
        const getTasks = await Task.find();
        if(getTasks.length > 0){
          return res.json(getTasks);
        }}
      catch (error) {
        console.log(error);
      }
}

export const getTask = async (req, res) => {
    const { idTask } = req.params;
    console.log("Lo que se envía por params", req.params);
    try {
      const getTask = await Task.findById(idTask);
      return res.json(getTask);
    } catch (error) {
      console.log(error);
    }
}

// export const getTaskCount = (req, res) => {
//     res.send('Hello world')
// }

export const saveTask = async (req, res) => {
    const { title, description } = req.body;
    try {
      const newTask = await Task.create({
        title, 
        description
      });
      return res.json(newTask);
    } catch (error) {
      console.log(error);
    }
}

export const updateTask = async (req, res) => {
    const { idTask } = req.params;
    const { title, description } = req.body;
    try {
      const modifyTask = await Task.findByIdAndUpdate(
        { _id: idTask }, { title, description },
      );
      return res.json(modifyTask);
    } catch (error) {
      console.log(error);
    }
}

export const deleteTask = async (req, res) => {
    const { idTask } = req.params;
    try {
        const deleteTask = await Task.findByIdAndDelete(idTask);
        return res.json(deleteTask);
      } catch (error) {
        console.log(error);
      }
}