module.exports = (sequelize, DataTypes) => {
  const Klijent = sequelize.define('Klijent', {
    naziv: {
      type: DataTypes.STRING,
      unique: true
    },
    kontakt: DataTypes.STRING,
    opis: DataTypes.TEXT,
    brojProizvoda: {
      type: DataTypes.SMALLINT.UNSIGNED,
      defaultValue: 0
    }
  })

  return Klijent
}
