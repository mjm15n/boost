/**
 * Parse calls
 */

Parse.initialize("U4W4y5H3yhuV3Gw9qvMmHsuAE5l1I12W54FICvtp", "un0jkFNjoYkLfA9V88cp0LYbXRwnPFBXitV9YMef");
// appid + jid
var Drinks = Parse.Object.extend("Drinks");

var drinks_list = [];

function getDrinks(toGet) {            //how to export parse data into .js
  // parse stuff
  // return drinks object
  // 
  var query = new Parse.Query(Drinks);
  toGet.forEach(function(toGetDrink) {
    console.log(toGetDrink);  
    
    query.get(toGetDrink, {
      success: function(rdrink) {
        drinks_list.push(rdrink);
      },
      error: function(object, error) {
        console.log(toGetDrink);
      }
    });
  });

}

var parse_feelings_map = {
  happy: ['zNlm536Rpx','eHglyllbSM'],
  pickup: ['f0MUJwoqn3', 'Er91v1uGkz'],
  tired: ['076ssW24W2','YYYw75z8xr'],
  stressed: ['Bggj9vjUy1','murxy6uuyV'],
}

var parse_time_map = {
  morning: ['UG1rrqiy3D','f0MUJwOqn3','Be8K0zDa0O','Sn890OKCMT'],
  afternoon: ['Mu2jUKNTZ1', '076ssW24W2','C8s1MM0kng','RjPRvOQjeJ','YwQoBVPdGf','CLm5USkSKF'],
  evening: ['MmwfOJwgUY','ahsePRuWYs','1kkpDXkYyf','KMkEKPtoEc','Bggj9vjUy1','H01wS91LAF'],
  latenight: ['Sn890OKCMT','GjMx6QeuIk','1GHLtJ5t9y','kBbVQbwrWb','WogDMJJqIL','Be8k0xDa0O'],
}

var parse_season_map = {
  spring: ['eHglyllbSM','WtpvVtdeEb','076ssW24W2','GqUbL70hUS','1kkpDXkYyf','Mu2jUKNTZ1'],
  winter: ['ahsePRuWYs', 'Be8k0xDa0O','C8s1MM0kng','f0MUJwoqn3','CLm5USkSKF'],
  summer: ['L3Vvz9W1Bc','pg6mhvwjj0','SFWNHih1vt','WogDMJJqIL','XIpesUXF1A'],
  autumn: ['FQr1aWj63x','NWPrfuqCcT','VrzaNo65FS','ahsePRuWYs','MmwfOJwgUY'],
}

var parse_activity_map = {
  studying: ['FQr1aWj63x','r5r9UhHapm','JtCTStvufJ','H01wS91LAF','YYYw75z8xr','Oxic8tZH1x'],
  traveling: ['KK6XYOjnKe', 'L3Vvz9W1Bc','076ssW24W2','UG1rrqiy3D','pg6mhvwjj0','kBbVQbwrWb',],
  unnamed: ['KK6XYOjnKe','A1D7IsI2hw','Mu2jUKNTZ1','SFWNHih1vt','zNlm536Rpx','rwSeAeOYg1'],
  justbc: ['sEHDHak1Hd','ahsePRuWYs','CLm5USkSKF','eHglyllbSM','murxy6uuyV','EEucFUGQZA'],
}

$(".option1").click(function(e){
  e.preventDefault();
  var id= $(this).attr('id');
  var parse_ids = parse_feelings_map[id];
  
  getDrinks(parse_ids);
});
$(".option2").click(function(e){
  e.preventDefault();
  var id= $(this).attr('id');
  var parse_ids = parse_time_map[id];
  
  getDrinks(parse_ids);
});
$(".option3").click(function(e){
  e.preventDefault();
  var id= $(this).attr('id');
  var parse_ids = parse_season_map[id];
  
  getDrinks(parse_ids);
});
$(".option4").click(function(e){
  e.preventDefault();
  var id= $(this).attr('id');
  var parse_ids = parse_activity_map[id];
  
  getDrinks(parse_ids);
});


$('.serve_drink').click(function(e){
  e.preventDefault();
  var index = Math.floor((Math.random() * drinks_list.length));
  var list = $('.drink_results').append('<ul></ul>');
  var drink=drinks_list[index];
  list.append('<li>'+drink.get('drink_type')+' - '+ drink.get('drink_name') +'</li>');


  // for(var i = 0; i < drinks_list.length; i++) {
  //   list.append('<li>'+drinks_list[i].get('drink_type')+'</li>');
  // }
});



var array1 = ['happy', 'pickup', 'tired', 'stressed'];
var array2 = ['morning', 'afternoon', 'evening', 'latenight'];
var array3 = ['spring', 'winter', 'summer', 'autumn'];
var array4 = ['studying', 'traveling', 'unnamed', 'justbc'];
