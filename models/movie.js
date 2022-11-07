'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movie.belongsTo(models.article, { foreignKey: 'id'});
    }
  }
  movie.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    rating: DataTypes.STRING,
    release_date: DataTypes.DATE,
    age_rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};