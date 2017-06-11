var assert = {

  toEqual: function(actual, expected){
    if(actual !== expected){
      throw new Error("Error: expected " + expected + ", got" + actual);
    } else {
      console.log("It passed! Well done :)");
    }
  }
};

var check = {

  toInclude: function(container, contained){
    if(!Array.isArray(container)){
      throw new Error(container + ' is not an array. Try again.');
    }
    if(container.includes(contained)){
      console.log("It passed! Well done :)");
    } else {
      throw new Error("Unlucky! " + container + " did not contain " + contained);
    }
  }
};

  var truthy = {

    isTrue: function(assertion){
      if(!assertion){
        throw new Error("Oh dear :( " +  assertion + "is not truthy. ");
      } else {
        console.log("Well done you!");
      }
    }
  };
