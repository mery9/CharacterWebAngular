import { Router } from 'express';
import { sample_users } from '../data';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import bcrypt from 'bcryptjs';
import { HTTP_BAD_REQUEST } from '../constants/http_status';

const router = Router();                                                                // create an instance of an Express router

router.get("/seed", asyncHandler(                                                       // set up a GET endpoint at the "/seed" path
    async (req, res) => {                                                               // define a function to handle the request
        const usersCount = await UserModel.countDocuments();
        if(usersCount > 0){                                                             // if there are already users in the database, send a response and exit the function
            res.send("Seed is already done")
            return;
        }
        await UserModel.create(sample_users);                                           // add sample users to the database
        res.send("Seed Is Done!");                                                      // send a response indicating that the seeding is complete
    }
))

router.post("/login", asyncHandler(                                                     // set up a POST endpoint at the "/login" path
    async (req, res) => {                                                               // define a function to handle the request
        const {email, password} = req.body;                                             // extract the email and password from the request body
        const user = await UserModel.findOne({email});                                  // look up the user in the database based on their email

        //const user = sample_users.find(user => user.email === email && user.password === password) // this no problem but not going to use this line

        if(user && (await bcrypt.compare(password,user.password))) {                    // if a user is found and the password matches, generate a token and send it in the response
            res.send(generateTokenResponse(user));
        }
        else{                                                                           // if the user is not found or the password is incorrect, send an error response
            res.status(HTTP_BAD_REQUEST).send("Username or Password is Invalid!");
        }
    }
))

router.post('/register', asyncHandler(
    async (req, res) => {
        // Get user details from the request body
        const {name, email, password, address, avatarhead, avatarbody, avatarleg} = req.body;

        // Check if user already exists in the database
        const user = await UserModel.findOne({email});
        if(user){
            res.status(HTTP_BAD_REQUEST).send('User is already exist!');
            return;
        }

        // Encrypt the user's password
        const encryptedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser:User = {
            id: '',
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address,
            isAdmin: false,
            avatarhead: '1',
            avatarbody: '1',
            avatarleg: '1',
            description: 'Please edit your description!'
        }

        // Add the new user to the database
        const dbUser = await UserModel.create(newUser);

        // Send a token as a response
        res.send(generateTokenResponse(dbUser));     
    }
))

// Generate a login token for a user
const generateTokenResponse = (user:any) => {
    const token = jwt.sign({email:user.email, isAdmin:user.isAdmin}, "yOU ARe AdMIn??!!", {expiresIn:"1h"});
    
    // Add the token to the user object
    user.token = token;
    return user;
}

// Export the router
export default router;