import mongoose from 'mongoose'

interface SUser{
    Name:string;
    Email:string;
}
interface userModelInterface extends mongoose.Model<UserDoc> {
    build(attr: SUser): UserDoc
  }

interface UserDoc extends mongoose.Document {
    Name: string;
    email: string;
}

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    Email:{
        type:String,
        required:true
    }
})
userSchema.statics.build = (attr: SUser) => {
    return new User(attr)
  }
  const User = mongoose.model<UserDoc, userModelInterface>('User', userSchema)
User.build({
    Name:'name',
    Email:'email id'
})
    

export {User}