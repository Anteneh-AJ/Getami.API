import * as KoaPassport from 'koa-passport'
import * as PassportLocal from 'passport-local'
import { Document } from 'mongoose'
import { User, } from '../models/user/User';
import { IUser, } from '../models/user/IUser';
import { compare } from "bcrypt";

// account serialization and deserialization in/from context.state.user
KoaPassport.serializeUser((user: Document & IUser, done) => {
    done(null, user._id);
});

KoaPassport.deserializeUser((_id, done) => {
    User.findById(_id, (err, user) => done(err || null, user as any));
});

// configure local strategy
KoaPassport.use(
    'local',
    new PassportLocal.Strategy({ usernameField: 'email' }, (email, password, done) => {
        User.findOne({ 'email': email }, async (err, user: IUser) => {
            if (err) return done(new Error("User not found"));
            if (!user) return done(null, false);
            console.log(user)
            if (await compare(password, user.password)) {
                done(null, user);
            } else {
                done(new Error("Incorrect email or password "));
            }
        })
    })
);