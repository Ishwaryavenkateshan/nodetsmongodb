import express, { Request, Response } from 'express'
import {User} from '../model/user'

const router = express.Router()

router.get('/api/user', async (req: Request, res: Response) =>{
    // return res.send("hi user")
    const user = await User.find({})
  return res.status(200).send(user)
    
})

router.post('/api/user', async (req: Request, res: Response) =>{
    const { 
        Name, 
        Email } = req.body;
    
    const user = User.build({ Name, Email })
    await user.save()
    return res.status(201).send(user)
})
// router.put('/api/user', async (req: Request, res: Response) =>{
//     const user = User.build({ Name, Email })

// if (userUpdated === true) {
//     return res.send("user updated");
// }
// else {
//     return res.send("invalid user");
// }
// }
// )


export { router as userRouter }
