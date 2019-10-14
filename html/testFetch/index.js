fetch("https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json")
   .then(r => r.json())
   .then(data => {
      let countries = document.getElementById('countries'),
         cities = document.getElementById('cities')
      
      const countriesFragment = document.createDocumentFragment(),
         citiesFragment = document.createDocumentFragment()
      for (let key in data) { 
         var options = document.createElement('option')
         options.innerText = key
         countriesFragment.appendChild(options);
      }
      countries.addEventListener('change', (e) => { 
         data[e.target.value].forEach(el => {  
            let option = document.createElement('option');
            option.innerText = el;
            citiesFragment.appendChild(option)
         })
         cities.appendChild(citiesFragment)
      })
      countries.appendChild(countriesFragment)
   })

   
  
   

