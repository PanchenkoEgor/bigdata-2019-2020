//терен

var generateCar = function() {
  var collection = [
      '12345678', 
      '87654321', 
      '23465432', 
      '98768976', 
      '12354227'
  ];

  var index = Math.floor((Math.random() * (5 -1) + 1));

  return "BMV / " +  collection[index]
}

var getPeople = function () {
  var collection = ["шофьор и един пътник", " шофьор"]

  var index = Math.floor((Math.random() * (3 -1)));

  return  collection[index]
}

for(i = 0; i < 5; i++) {
  db.cars.insert({
    model : generateCar(),
    people : getPeople()
  })
}

//Зеленчуци

var getVegetables = function () {

  var collection = ["домат", "краставица", "тиква", "зеля", "лук"]

  var index = Math.floor((Math.random() * (5 -1) + 1));

  return collection[index]
}

for(i = 0; i < 5; i++) {
  db.vegetables.insert({
    vegetables : getVegetables(),
    car : generateCar(),
    category : "vegetables",
    count : " 100 килограма"
  })
}

// db.vegetables.find().pretty()


