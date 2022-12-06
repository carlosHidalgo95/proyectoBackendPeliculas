'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.hasOne(models.user, { foreignKey: 'id' });
      order.hasOne(models.article, { foreignKey: 'id' });
    }
  }
  order.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    order_date: DataTypes.DATEONLY,
    return_date:DataTypes.DATEONLY,
    id_user:DataTypes.INTEGER,
    id_article: DataTypes.INTEGER
  },
   {
    sequelize,
    modelName: 'order',
  });
  return order;
};