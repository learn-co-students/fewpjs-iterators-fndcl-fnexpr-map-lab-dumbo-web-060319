const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  let final = tutorials.map(function(stuff)
  {
    let splitted = stuff.split(" ");
  
  
    splitted.forEach(function(data, index)
    {
      let finalWord = data[0].toUpperCase() + data.slice(1);
      splitted[index] = finalWord;
    })
    stuff = splitted.join(" ");
    // console.log(stuff)
    return stuff;
    

  });
  console.log(final)
  return final;
}

titleCased();