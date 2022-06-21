
import { Router } from 'express';
import { Cat, CatType } from './cats.model';
import { Request, Response } from 'express';

export const readAllcat = (req: Request, res: Response) => {
    try {
        const cats = Cat;
        res.status(200).send({
            success: true,
            data: { cats,}
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
};

export const readCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const cats = Cat.find((cat) => {
            return cat.id === params.id;
        });
        res.status(200).send({
            success: true,
            data: cats
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
};


// Create URL
export const createCat = (req: Request, res: Response) => {
    try {
        const data = req.body;
        console.log(data);
        Cat.push(data);
        console.log(data);
        res.status(200).send({
            success: true,
            data: { data },
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};

// Update Cat
export const updateCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body;
                result = cat;
            }
        });

        res.status(200).send({
            success: true,
            data: { 
                cat: result
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};

// Patch Cat
export const updatePartialCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = {...cat, ...body}
                result = cat;
            }
        });

        res.status(200).send({
            success: true,
            data: { 
                cat: result
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};

// Delete Cat
export const deleteCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const newCat = Cat.filter((cat) => cat.id !== params.id)

        res.status(200).send({
            success: true,
            data: { 
                data: newCat
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};