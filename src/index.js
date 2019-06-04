const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
  // const task = await Task.findById('5cf4c7af4dfd5e7e73a61a5e');
  // await task.populate('owner').execPopulate();
  // console.log(task.owner);
  const user = await User.findById('5cf4c76d4dfd5e7e73a61a5c');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks)

}
