import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/sequelize';

class Film extends Model {}

Film.init({
    film_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    release_year: { type: DataTypes.STRING },
    language_id: { type: DataTypes.STRING },
    rental_duration: { type: DataTypes.STRING },
    rental_rate: { type: DataTypes.STRING },
    length: { type: DataTypes.STRING },
    replacement_cost: { type: DataTypes.STRING },
    rating: { type: DataTypes.STRING },
    last_update: { type: DataTypes.STRING },
    special_features: { type: DataTypes.ARRAY(DataTypes.STRING) },
    fulltext: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: 'film'
});

export default Film;