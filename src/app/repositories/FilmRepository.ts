import model from '../models/FilmModel';

export const getAll = () => {
    return model.findAll();
};