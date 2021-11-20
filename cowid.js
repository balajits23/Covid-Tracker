let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');

searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
        let countries = e.target.value;
        covidcase(countries);
    }
})


async function covidcase(searchValue){
    let URL = 'https://api.covid19api.com/country';
    let DATA = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await DATA.json();
    let {Deaths,Country,Confirmed,Active,Date} = JSON[JSON.length-1];
        templete.innerHTML =`
         <section class="candc">
              
              <div class="country">
                <h2> ${Country} </h2>
               </div>

               <div class="confirm">
               <h2>${Confirmed} </h2><p> Positive</p>
              </div>
             </section>
             
             <section class="dad">
               <div class="Death">
                 <h2>${Deaths}</h2><p>Deaths</p>
                </div>

                <div class="active">
                   <h2>${Active}</h2><p>Active cases</p>
                </div>

                <div class="date">
                <h2>${Date}</h2><p>Date</p>
                 </div>
                 </section>
            </main>
             `
             }