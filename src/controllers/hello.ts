import { Request, Response } from "express";

export const helloWorld = async (req: Request, res: Response) => {
  const data: string = "Hello";
  res.send(data);
  res.end();
};
