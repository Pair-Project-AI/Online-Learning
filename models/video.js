'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsToMany(models.Tag, {through: models.Catalog, foreignKey: "VideoId"});
      Video.belongsToMany(models.User, {through: models.Study, foreignKey: "VideoId"});
      Video.belongsTo(models.Subject, {foreignKey: "SubjectId"})
    }
    currency(){
      return `Rp. ${this.price.toLocaleString("id-ID")}`
    }

    capslock(){
      return `${this.title.toUpperCase()}`
    }
  };
  Video.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};