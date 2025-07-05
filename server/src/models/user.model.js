import { Schema } from "mongoose";


const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true // // ensures no extra spaces around the value.
        },
        email:{
            type: String,
            required: true,
            unique: true,
            trim: true, 
            lowercase: true, // ensures email is stored in lowercase
        },
        fullName: {
            type: String,
            required: true,
            trim: true 
        },
        password: {
            type: String,
            required: [true, 'Password is required'], // ensures password is provided
            minlength: 6 // ensures password is at least 6 characters long
        },
        // a token used for authentication -> it is used when the user logs in
        refreshToken: {
            type: String,
            default: null // allows refreshToken to be null if not set
        },
    },
    {
        timestamps: true, // automatically adds createdAt and updatedAt fields
    }
)



export const USer = moongoose.model('User', userSchema);