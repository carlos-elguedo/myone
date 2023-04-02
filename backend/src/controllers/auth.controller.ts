import { Request, Response } from "express";
import { generateToken } from '../auth';


export const login = (req: Request, res: Response) => {
    const username = req.body.username;
    const user = { username: username };

    const token = generateToken(user);
    res.json({ token: token });
}