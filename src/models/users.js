import bcrypt from 'bcryptjs';
import mongoose from "mongoose";
import validator from 'validator';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        
    },
    phoneNumber:{
        type:String,
        require:true,
        unique:true,
        validate: {
            validator: function(v) {
                return /^(78|77|76)\d{7}$/.test(v);
            },
            message: props => `${props.value} Not valid, le numero doit contenir 9 chiffre!`
        }

    },
    email:{
        type:String,
        require:true,
        unique:true,
        minlength:8,
        maxlength:30,
        validate:{
            validator: validator.isEmail,
            msg:"Le format de votre adress n'est pas valide"
        }
    },
    password:{
        type:String,
        // required:true,
        unique:true,
        minlength:8,
        maxlength:30,
    }

})
userSchema.pre('save', async function(){
    if(this.isModified('password')) this.password = await bcrypt.hash(this.password, 8)
});
userSchema.path('username').validate(function(value) {
    return value && value.length >= 6 && value.length <= 20;
}, "Le nom d'utilisateur doit avoir entre 6 et 20 caractères");

userSchema.statics.findUser = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) throw new Error('user not found')
    const isPassWordValid = await bcrypt.compare(password, user.password)
    if (!isPassWordValid) throw Error('conexion failed, pass word is not valid');
    return user;
}
userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  }
const User = mongoose.model('User', userSchema)

export default User ;


