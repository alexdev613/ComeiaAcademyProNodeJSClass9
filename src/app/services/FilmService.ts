import * as repository from '../repositories/FilmRepository'; // p/poder chamar todos os métodos

export const getAll = () => {
    return repository.getAll();
};