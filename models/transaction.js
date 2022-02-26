"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userId",
        },
      });

      transaction.hasMany(models.transactionDetail, {
        as: "transactionDetail",
        foreignKey: {
          name: "transactionId",
        },
      });
    }
  }
  transaction.init(
    {
      userId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      posCode: DataTypes.INTEGER,
      address: DataTypes.STRING,
      totalPrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transaction",
    }
  );
  return transaction;
};
