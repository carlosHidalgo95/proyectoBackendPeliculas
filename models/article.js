'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      article.hasOne(models.movie,{ foreignKey: 'id'});
      article.hasOne(models.serie,{ foreignKey: 'id'});
    }
  }
  article.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    rating: DataTypes.STRING,
    age_rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};