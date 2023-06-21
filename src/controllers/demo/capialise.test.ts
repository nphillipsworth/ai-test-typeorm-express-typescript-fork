import { expect } from 'chai';
import { NextFunction, Request, Response } from 'express';

import { capitalise } from './capitalise';

describe('capitalise', () => {
  it('should capitalise a string', async () => {
    // test the capitalise function with a string
    const req = { query: { string: 'hello world' } } as unknown as Request;
    let result: { status: number; message: string };
    const res = {
      customSuccess: (status: number, message: string) => {
        result = { status, message };
        return result;
      },
    } as unknown as Response;
    const next = () => {
      return;
    };
    await capitalise(req, res, next as NextFunction);
    expect(result?.status).to.equal(200);
    expect(result?.message).to.equal('Capitalised string is Hello World');
  });

  it('should catch missing string', async () => {
    const req = { query: {} } as unknown as Request;
    let result: { status?: number; message: string };
    const res = {
      customSuccess: (status: number, message: string) => {
        result = { status, message };
        return result;
      },
    } as unknown as Response;
    const next = (error) => {
      result = { message: error.message };
      return result;
    };
    await capitalise(req, res, next as NextFunction);
    expect(result?.message).to.equal('Missing string.');
  });
});
