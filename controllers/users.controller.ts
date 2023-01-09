import { Request, Response } from "express";
import User from "../models/user.model";
import Usuario from '../models/user.model';

export const getUsers = async( req: Request, res: Response ) =>{
    const users = await Usuario.findAll();

    res.json({
        users
    })
}

export const getUser = async( req: Request, res: Response ) =>{
    const { id } = req.params;

    const user = await User.findByPk(id);

    if(user){
        res.json( user );
    }else{
        res.status(400).json({
            msg: `No existe un usuario con el id: ${ id }`
        })
    }
}

export const postUser = ( req: Request, res: Response ) =>{
    const { body } = req;

    res.json({
        msg: 'postUser',
        body
    })
}

export const putUser = ( req: Request, res: Response ) =>{
    const { id } = req.params;
    const { body } = req;    

    res.json({
        msg: 'putUser',
        id,
        body
    })
}

export const deleteUser = ( req: Request, res: Response ) =>{
    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id
    })
}