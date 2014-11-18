var friends = [
                'Moe',
                'Larry',
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];
    
    friends.push("wyoming");

    friends.unshift("Bert");
    
    friends[6]="Liz";
    // or you can do 
    friends[friends.indexOf("Elizabeth")] = "Liz"

    friends.sort();
    
    var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";
    var array = friends.split(",");

    array.sort();   
    array.reverse();

var myFriends = [
                  'Rickon',
                  'Meera',
                  'Hodor',
                  'Jojen',
                  'Osha',
                  'Rickard',
                  'Maester',
                  'Rodrik',
                  'Jory',
                  'Septa',
                  'Jon'
                ];

var yourFriends = [
                    'Bilbo',
                    'Boromir',
                    'Elrond',
                    'Faramir',
                    'Frodo',
                    'Gandalf',
                    'Legolas',
                    'Pippin'
                  ];

 var newFriends = yourFriends.concat(myFriends);

 newFriends.sort();
 

 var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];

        var a = foods.indexOf("Pho") +1;

        var a = foods.indexOf("Donuts");

        foods.splice(foods.indexOf("Donuts"),1);

        var selects = foods.slice(4,9);

  var people = {
  'Moe' : 18,
  'Larry' : 19,
  'Curly' : 20,
  'Jane' : 20,
  'Emma' : 21,
  'Elizabeth' : 18,
  'Elinor' : 23,
  'Mary' : 25,
  'Darcy' : 24,
  'Grey' : 18,
  'Lydia' : 24,
  'Harriet' : 18
};

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

    function median(ages) {
        ages.sort( function(a,b) {return a - b;});

        var half = Math.ceil(ages.length/2);

        if(ages.length % 2)
            return ages[half];
        else
            return (ages[half-1] + ages[half]) /2.0; }

var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

console.log(median(ages));


