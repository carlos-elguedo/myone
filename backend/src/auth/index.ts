import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { TOKEN_EXPIRATION, TOKEN_SECRET } from '../config'


export function generateToken(payload: any): string {
  return jwt.sign(payload, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRATION });
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, TOKEN_SECRET, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.body.user = user;
    next();
  });
}
