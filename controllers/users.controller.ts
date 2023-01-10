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

export const postUser = async( req: Request, res: Response ) =>{
    const { body } = req;

    try{
        const existEmail = await User.findOne({
            where: {
                email: body.email
            }
        });
        
        if(existEmail){
            return res.status(400).json({
                msg: `Ya existe un usuario con el email: ${body.email}`
            })
        }
        const user = User.build(body);
        await user.save();

        res.json(user);
    }catch (error:any){
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

    res.json({
        msg: 'postUser',
        body
    })
}

export const putUser = async( req: Request, res: Response ) =>{
    const { id } = req.params;
    const { body } = req;    

    try{
        const user = await User.findByPk( id );
        if(!user){
            return res.status(500).json({
                msg: `No existe un usuario con el id ${id}`
            })
        }
        //await user.destroy(); eliminacion fisica
        await user.update( { state: false } );
        res.json(user);
    }catch (error:any){
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteUser = async( req: Request, res: Response ) =>{
    const { id } = req.params;

    try{
        const user = await User.findByPk( id );
        if(!user){
            return res.status(500).json({
                msg: `No existe un usuario con el id ${id}`
            })
        }
        await user.update( state );
        res.json(user);
    }catch (error:any){
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}