const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

// Traveler has many locations
// Traveler has many trips

// Trips has many locations?
// Location has many trips?

// Reader.hasOne(LibraryCard, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// Reader.hasMany(Book, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// Book.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

// LibraryCard.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

// module.exports = { Reader, Book, LibraryCard };
