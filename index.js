class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, ''); //A-Za-z0-9-'\s remains, others replaced with nothing
  }
  static titleize(string){
    const array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newArray = [];
    let arrayOfString = string.split(" ");
    newArray.push(this.capitalize(arrayOfString[0]));
    for(let i = 1; i < arrayOfString.length; i++ ){
      debugger
      console.log("i = ", i)
      let match = 0;
      for(let j = 0; j < array.length; j++){
        debugger
        if(arrayOfString[i] === array[j]){
          debugger
          newArray.push(arrayOfString[i])
          match = 1;
          break;
        }
      }
      if (match === 0) {
        newArray.push(this.capitalize(arrayOfString[i]));
      }
    }
    return newArray.join(" ")
  }
}