import { Error, Sequelize } from 'sequelize';

export const sequelize = new Sequelize('dvdrental', 'postgres', '1987', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false
    }, // para não dar problema em relação a pluralidade do nome da tabela e colunas padrão
    logging: false
});

export default () => {
    sequelize.authenticate().then(() => {
        console.log('Conexão com o postgres realizada com sucesso');
    }).catch((error: Error) => {
        console.log(`Conexão com o postgres não foi bem sucedida. ${error}`);
    });
};