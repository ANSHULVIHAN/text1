module.exports = function(sequelize, DataTypes) {
    var CityCategory = sequelize.define('CityCategory', {
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: true
            }
        }
    }, {
        indexes: [{
            unique: true,
            fields: ['CityId', 'CategoryId', 'year']
        }]
    });

    return CityCategory;
};

City.belongsToMany(models.Category, {
                    through: {
                        model: models.CityCategory
                    }
                });

Category.belongsToMany(models.City, {
                    through: {
                        model: models.CityCategory
                    }
                });