// =============================
//  Task 1
// =============================

function timer(ms){
  return new Promise((resolve, reject) => {
    if(ms >= 30000) reject(new Error('Too much'))
    setTimeout(resolve, ms);
  });
}

let delay = 3000;
timer(delay).then(
  () => console.log(`Delay: ${delay / 1000}s`),
  error => console.log(error));

// =============================
//  Task 2
// =============================

function getCities(url){
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.addEventListener('load', function(){
      if(this.status == 200) resolve(this.response)
      else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    })

    xhr.addEventListener('error', function(){
      reject(new Error('Connection Error'));
    })

    xhr.send();
  });
}

getCities('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
  .then(response => {
    let cities = JSON.parse(response),
      cityNames = [];

    cities.forEach(city => cityNames.push(city.name) );
    cityNames.sort();
    cityNames.forEach(city => {
      let cityWrapper = document.createElement('h2');
      cityWrapper.textContent = city;
      document.body.appendChild(cityWrapper);
    })
  },
  error => console.log(error));