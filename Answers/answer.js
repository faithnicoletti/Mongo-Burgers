// Create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
    { meat: 'beef', cheese: true, toppings: ['ketchup', 'onions'] },
    { meat: 'beef', cheese: true, toppings: ['ketchup', 'tomatoes'] },
    { meat: 'beef', cheese: false, toppings: ['mayo', 'tomatoes'] },
    { meat: 'vegan', cheese: false, toppings: ['ketchup', 'mayo', 'tomatoes'] },
    { meat: 'turkey', cheese: false, toppings: ['mayo', 'onions'] }
]);
// Find all the burgers
db.burgers.find();
// Show just the meat of each burger
db.burgers.find({}, { meat: 1 });
// Show just the toppings of each burger
db.burgers.find({}, { toppings: 1 });
// Show everything but the cheese
db.burgers.find({}, { cheese: false });
// Find all the burgers with beef
db.burgers.find({ meat: 'beef' });
// Find all the burgers that are not beef
db.burgers.find({ meat: { $ne: 'beef' } });
// Find the first burger with cheese
db.burgers.findOne({ cheese: true });
// Find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.findOneAndUpdate(
    { cheese: true },
    { $set: { cheese: 'double cheese' } }
);
// Find the burger you updated to have double cheese
db.burgers.findOne({ cheese: 'double cheese' });
// Find and update all the beef burgers to be 'veggie'
db.burgers.updateMany(
    { meat: 'beef' },
    { $set: { meat: 'veggie' } }
);
// Delete one of your veggie burgers
db.burgers.deleteOne({ meat: 'veggie' });
// Drop the collection
db.burgers.drop();
// Drop the database
db.dropDatabase();














