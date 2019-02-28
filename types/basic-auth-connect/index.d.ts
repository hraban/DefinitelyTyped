declare module 'basic-auth-connect' {
  import express from 'express';

  type AuthHandler = (username: string, password: string) => boolean;
  type AsyncAuthHandler = (username: string, password: string, cb: (err: any, user?: any) => void) =>void;

  interface BasicAuth {
    (username: string, password: string): express.RequestHandler;
    (h: AuthHandler): express.RequestHandler;
    (h: AsyncAuthHandler): express.RequestHandler;
  }

  const auth: BasicAuth;

  export = auth;
}
