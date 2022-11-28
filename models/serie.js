'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      serie.belongsTo(models.article, { foreignKey: 'id'});
    
    }
  }
  serie.init({
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
    age_rating: DataTypes.STRING,
    theater_release: DataTypes.BOOLEAN,
    id_article:DataTypes.INTEGER,
    synopsis: DataTypes.TEXT,
    url_img: DataTypes.STRING,
    actors: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'serie',
  });
  return serie;
};