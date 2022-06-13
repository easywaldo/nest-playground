import { Cat, CatType } from './cats.model';
import { Router } from 'express';

const router = Router();

router.get('/cats', (req, res) => {
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
});

router.get('/cats/:id', (req, res) => {
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
});


// Create URL
router.post('/cats', (req, res) => {
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
});

export default router;