

const getElement = (array, index) => {
      return array[index];
  };
  
  const myArray = [10, 20, 30, 40, 50];
  const index = 2;
  
  const result = getElement(myArray, index);
  console.log(result);
  




const weatherDescriptions = {
    SQ: 'шквал',
    PO: 'пыльный вихрь',
    FC: 'торнадо',
    BR: 'дымка (видимость от 1 до 9 км)',
    HZ: 'мгла (видимость менее 10 км)',
    FU: 'дым (видимость менее 10 км)',
    DS: 'пыльная буря (видимость менее 10 км)',
    SS: 'песчаная буря (видимость менее 10 км)',
  };
  
  function getWeatherDescription(weatherCode) {
    const description = weatherDescriptions[weatherCode];
    return description;
  }

  const weatherCode = 'SQ';
  const weatherDescription = getWeatherDescription(weatherCode);
  console.log(`Погода: ${weatherDescription}`);
  