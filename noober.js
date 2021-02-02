async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  // console.log(json.length)
  // console..log(json[0].length)
  // console.log(json[0][0].purpleRequested)
  // console.log(json[0][0].numberOfPassengers)

  let rides = json
  // console.log(rides[0][0].passengerDetails.first)
//  🔥 start here: write code to loop through the rides
  
for (let i=0; i < rides.length; i++) {
    ride = rides[i]
  if (ride.length > 1) {
      levelofService = 'Noober Pool'
    document.querySelector(' .rides').insertAdjacentHTML('beforeEnd',`
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span> ${levelofService} </span>
    </h1>
    `)
      for (let j = 0; j< ride.length; j++){
        document.querySelector(' .rides').insertAdjacentHTML('beforeEnd',`
         <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${ride[j].passengerDetails.first} ${ride[j].passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${ride[j].passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride[j].numberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride[j].pickupLocation.address}</p>
            <p>${ride[j].pickupLocation.city}, ${ride[j].pickupLocation.state} ${ride[j].pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride[j].dropoffLocation.address}</p>
            <p>${ride[j].dropoffLocation.city}, ${ride[j].dropoffLocation.state} ${ride[j].dropoffLocation.zip}
          </div>
        </div>
      </div>
        `)

      }
      
       } else if (ride[0].purpleRequested == true){
        levelofService = 'Noober Purple'
        document.querySelector(' .rides').insertAdjacentHTML('beforeEnd',`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelofService}</span>
    </h1>

    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
          ${ride[0].numberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride[0].pickupLocation.address}</p>
          <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride[0].dropoffLocation.address}</p>
          <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
    `)
       } else if (ride[0].numberOfPassengers > 3) {
         levelofService = 'Noober XL'
         document.querySelector(' .rides').insertAdjacentHTML('beforeEnd',`
         <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
         <i class="fas fa-car-side"></i>
         <span> ${levelofService} </span>
         </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${ride[0].numberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride[0].pickupLocation.address}</p>
          <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride[0].dropoffLocation.address}</p>
          <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
         
         `)
       } else {
         levelofService = 'Noober X'
         document.querySelector(' .rides').insertAdjacentHTML('beforeEnd',`
         <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
         <i class="fas fa-car-side"></i>
         <span> ${levelofService} </span>
         </h1>
         
         <div class="border-4 border-gray-900 p-4 my-4 text-left">
         <div class="flex">
           <div class="w-1/2">
             <h2 class="text-2xl py-1">${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last}</h2>
             <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
           </div>
           <div class="w-1/2 text-right">
             <span class="rounded-xl bg-gray-600 text-white p-2">
             ${ride[0].numberOfPassengers}
             </span>
           </div>
         </div>
         <div class="mt-4 flex">
           <div class="w-1/2">
             <div class="text-sm font-bold text-gray-600">PICKUP</div>
             <p>${ride[0].pickupLocation.address}</p>
             <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
           </div>
           <div class="w-1/2">
             <div class="text-sm font-bold text-gray-600">DROPOFF</div>
             <p>${ride[0].dropoffLocation.address}</p>
             <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
           </div>
         </div>
       </div>
         
         
         `)
       }
      }  
  }

window.addEventListener('DOMContentLoaded', pageLoaded)

