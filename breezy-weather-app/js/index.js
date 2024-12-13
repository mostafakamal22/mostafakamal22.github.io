// Global Variables
const API_KEY = "f64196fb2874411787b184022241012";
const API_BASE_URL = "https://api.weatherapi.com/v1/";

const locationInput = document.getElementById("location");
const locationsListGroup = document.getElementById("locations-list");
const locationListItem = document.querySelectorAll(".list-group-item");

const locationValidationContainer = document.querySelector(
  ".location-validation div"
);

const locationForecastTitle = document.querySelector("#location-forecast h2");
const locationForecastRow = document.querySelector("#location-forecast .row");

const popularCitiesTitle = document.querySelector("#popular-cities h2");
const popularCitiesRow = document.querySelector("#popular-cities .row");
const POPULAR_CITIES = [
  {
    id: 683802,
    name: "Cairo",
    country: "Egypt",
  },
  {
    id: 681570,
    name: "Alexandria",
    country: "Egypt",
  },
  {
    id: 2801268,
    name: "London",
    country: "United Kingdom",
  },
  {
    id: 2618724,
    name: "New York",
    country: "United States of America",
  },
  {
    id: 803267,
    name: "Paris",
    country: "France",
  },
  {
    id: 568120,
    name: "Berlin",
    country: "Germany",
  },
  {
    id: 2555576,
    name: "Washington",
    country: "United States of America",
  },
  {
    id: 2145091,
    name: "Moscow",
    country: "Russia",
  },
];

const loadingSpinnerModal = new bootstrap.Modal("#loadingSpinnerModal");
const spinnerModal = document.getElementById("loadingSpinnerModal");

spinnerModal.addEventListener("hide.bs.modal", function () {
  console.log("hide");
});

// Events handlers
locationInput.addEventListener("input", async function (e) {
  // check location validation
  if (isValidLocation(e.target?.value)) {
    // Hide validation check
    toggleLocationValidation(false);

    // Show Loading state
    loadingLocationsResults();

    try {
      // Show Locations results
      const locationsList = await searchLocation(e.target?.value);
      showLocationsList(locationsList);
    } catch (error) {
      // Show error message
      locationValidationErrorMessage(error?.message);

      // Show validation checks
      toggleLocationValidation(true);
    }
  } else {
    // Make sure location list is empty
    removeLocationsResults();

    // Show error message
    locationValidationErrorMessage(
      "Location must be at least 3 characters long."
    );

    // Show validation checks
    toggleLocationValidation(true);
  }
});

document.addEventListener("DOMContentLoaded", async function () {
  // Load popular cities data at first
  let popularCitiesWeatherList = [];
  try {
    // Show Loading Spinner
    await toggleLoadingSpinnerModal(true);

    for (let i = 0; i < POPULAR_CITIES.length; i++) {
      const cityID = POPULAR_CITIES[i].id;

      const cityWeatherData = await fetchLocationForecast(cityID, true);

      popularCitiesWeatherList.push(cityWeatherData);
    }

    showPopularCitiesCurrentWeather(popularCitiesWeatherList);

    // Hide Loading Spinner
    await toggleLoadingSpinnerModal(false);
  } catch (error) {
    // Hide Loading Spinner
    await toggleLoadingSpinnerModal(false);

    console.log(error?.message);
  }
});

// validation location input
function isValidLocation(location) {
  if (!location || location.length < 3) return false;

  return true;
}

// Search Location
async function searchLocation(query) {
  if (!query) return null;

  // Fetch locations Data
  const res = await fetch(
    `${API_BASE_URL}search.json?key=${API_KEY}&q=${query}`
  );

  const locationsList = await res.json();

  return locationsList;
}

// Show search locations results on UI
function showLocationsList(locationsList) {
  if (!locationsList || locationsList.length === 0) {
    // Not found location

    // Remove location results
    removeLocationsResults();

    // Show error message
    locationValidationErrorMessage(
      "Sorry, we couldn't find that location. Please try again."
    );

    // Show validation checks
    toggleLocationValidation(true);
  }

  //show locations data
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < locationsList.length; i++) {
    const locationItem = document.createElement("li");

    locationItem.innerHTML = `<span class="fw-semibold">${locationsList[i]?.name}</span> - ${locationsList[i]?.country}`;

    locationItem.classList.add("list-group-item");

    locationItem.addEventListener("click", async function () {
      // Hide location list results
      removeLocationsResults();

      try {
        // Show Loading Spinner
        await toggleLoadingSpinnerModal(true);

        // Fetch location forecast data
        const locationForecastData = await fetchLocationForecast(
          locationsList[i]?.id
        );

        // Show forecast data result on UI
        showLocationForecast(locationForecastData);
      } catch (error) {
        // Hide Loading Spinner
        await toggleLoadingSpinnerModal(false);

        // Show error message
        locationValidationErrorMessage(error?.message);

        // Show validation checks
        toggleLocationValidation(true);
      } finally {
        // Hide Loading Spinner
        await toggleLoadingSpinnerModal(false);
      }
    });

    fragment.appendChild(locationItem);
  }

  locationsListGroup.replaceChildren(fragment);
}

// Show location results loading state
function loadingLocationsResults() {
  const fragment = document.createDocumentFragment();

  const locationItem = document.createElement("li");

  locationItem.innerHTML = `<span class="spinner-border spinner-border-sm text-primary-emphasis" aria-hidden="true"></span>
  <span role="status">Loading...</span>
`;

  locationItem.classList.add("list-group-item");

  fragment.appendChild(locationItem);

  locationsListGroup.replaceChildren(fragment);
}

// Fetch location forecast
async function fetchLocationForecast(locationID, isCurrentWeatherOnly) {
  if (!locationID) return null;

  const URL = isCurrentWeatherOnly
    ? `${API_BASE_URL}current.json?key=${API_KEY}&q=id:${locationID}&aqi=no`
    : `${API_BASE_URL}forecast.json?key=${API_KEY}&q=id:${locationID}&days=3&aqi=no&alerts=no`;

  const res = await fetch(URL);

  const locationWeatherData = await res.json();

  return locationWeatherData;
}

// Show location forecast
function showLocationForecast(locationForecastData) {
  //Get needed data from the location forecast object
  const { current, forecast, location } = locationForecastData;

  if (!forecast || !location || !current) return;

  // Show forecast data on UI
  const { forecastday } = forecast;
  const { name, country } = location;

  const fragment = document.createDocumentFragment();
  // Current weather
  const day = "Now";
  const humidity = current?.humidity;
  const temp_c = current?.temp_c;
  const wind_kph = current?.wind_kph;
  const cloud = current?.cloud;
  const condition_text = current?.condition?.text;
  const condition_icon = current?.condition?.icon;

  const currentWeatherCol = document.createElement("div");
  currentWeatherCol.classList.add("col-md-4");
  currentWeatherCol.innerHTML = ` 
          <div style='--icon-src: url("https:${condition_icon}")' class="card bg-glass rounded-4 text-white user-select-none">
            <div class="card-body">
            <div class="d-flex gap-2 justify-content-between">
                <div class="w-50">
                  <h2
                    class="card-title fw-semibold d-flex align-items-center"
                  >
                    ${temp_c}&deg;<span class="fs-6 text-primary-emphasis">C</span>
                  </h2>
                  <p class="card-text">${day}</p>
                </div>

                <h3 class="fw-bold fs-5 text-capitalize text-primary-emphasis main-title">${condition_text}</h3>
              </div>

              <div
                class="w-75 d-flex gap-3 fs-6 fw-semibold mt-4 pt-4 border-top border-primary-subtle"
              >
              <div><i class="fa-solid fa-cloud text-primary-emphasis me-1"></i>${cloud}%</div>
                <div><i class="fa-solid fa-droplet text-primary-emphasis"></i> ${humidity}%</div>
                <div><i class="fa-solid fa-wind text-primary-emphasis"></i> ${wind_kph}<span class="fs-6">Km&sol;h</span></div>
              </div>
            </div>
          </div>
         `;

  fragment.appendChild(currentWeatherCol);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Forecast weather
  for (let i = 0; i < forecastday.length; i++) {
    const d = new Date(forecastday[i]?.date);
    const day = weekday[d.getUTCDay()];
    const avghumidity = forecastday[i]?.day?.avghumidity;
    const avgtemp_c = forecastday[i]?.day?.avgtemp_c;
    const maxwind_kph = forecastday[i]?.day?.maxwind_kph;
    const daily_chance_of_rain = forecastday[i]?.day?.daily_chance_of_rain;
    const condition_text = forecastday[i]?.day?.condition?.text;
    const condition_icon = forecastday[i]?.day?.condition?.icon;

    const forecastCol = document.createElement("div");
    forecastCol.classList.add("col-md-4");
    forecastCol.innerHTML = ` 
            <div style='--icon-src: url("https:${condition_icon}")' class="card bg-glass rounded-4 text-white user-select-none">
              <div class="card-body">
              <div class="d-flex gap-2 justify-content-between">
                  <div class="w-50">
                    <h2
                      class="card-title fw-semibold d-flex align-items-center"
                    >
                      ${avgtemp_c}&deg;<span class="fs-6 text-primary-emphasis">C</span>
                    </h2>
                    <p class="card-text">${day}</p>
                  </div>

                  <h3 class="fw-bold fs-5 text-capitalize text-primary-emphasis main-title">${condition_text}</h3>
                </div>

                <div
                  class="w-75 d-flex gap-3 fs-6 fw-semibold mt-4 pt-4 border-top border-primary-subtle"
                >
                <div><i class="fa-solid fa-cloud-rain text-primary-emphasis me-1"></i>${daily_chance_of_rain}%</div>
                  <div><i class="fa-solid fa-droplet text-primary-emphasis"></i> ${avghumidity}%</div>
                  <div><i class="fa-solid fa-wind text-primary-emphasis"></i> ${maxwind_kph}<span class="fs-6">Km&sol;h</span></div>
                </div>
              </div>
            </div>
           `;

    fragment.appendChild(forecastCol);
  }

  locationForecastTitle.innerHTML = `[${name}, ${country}] Forecast`;
  locationForecastRow.replaceChildren(fragment);
}

// Show popular cities current weather
function showPopularCitiesCurrentWeather(popularCitiesWeather) {
  if (!popularCitiesWeather) return;

  // Show popular cities current weather data on UI
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < popularCitiesWeather.length; i++) {
    const {
      current,
      location: { name },
    } = popularCitiesWeather[i];

    const humidity = current?.humidity;
    const temp_c = current?.temp_c;
    const wind_kph = current?.wind_kph;
    const cloud = current?.cloud;
    const condition_text = current?.condition?.text;
    const condition_icon = current?.condition?.icon;

    const currentWeatherCol = document.createElement("div");
    currentWeatherCol.classList.add("col-md-4");
    currentWeatherCol.innerHTML = ` 
           <div style='--icon-src: url("https:${condition_icon}")' class="card bg-glass rounded-4 text-white user-select-none">
             <div class="card-body">
             <div class="d-flex gap-2 justify-content-between">
                 <div class="w-50">
                   <h2
                     class="card-title fw-semibold d-flex align-items-center"
                   >
                     ${temp_c}&deg;<span class="fs-6 text-primary-emphasis">C</span>
                   </h2>
                   <p class="card-text">${name}</p>
                 </div>
 
                 <h3 class="fw-bold fs-5 text-capitalize text-primary-emphasis main-title">${condition_text}</h3>
               </div>
 
               <div
                 class="w-75 d-flex gap-3 fs-6 fw-semibold mt-4 pt-4 border-top border-primary-subtle"
               >
               <div><i class="fa-solid fa-cloud text-primary-emphasis me-1"></i>${cloud}%</div>
                 <div><i class="fa-solid fa-droplet text-primary-emphasis"></i> ${humidity}%</div>
                 <div><i class="fa-solid fa-wind text-primary-emphasis"></i> ${wind_kph}<span class="fs-6">Km&sol;h</span></div>
               </div>
             </div>
           </div>
          `;

    fragment.appendChild(currentWeatherCol);
  }

  popularCitiesTitle.innerHTML = `Popular Cities Now`;
  popularCitiesRow.replaceChildren(fragment);
}

// Remove locations list results
function removeLocationsResults() {
  locationsListGroup.replaceChildren();
}

// Hide/Show location validation checks
function toggleLocationValidation(showValidation) {
  if (showValidation) {
    locationValidationContainer.classList.remove("d-none");
    return;
  }

  locationValidationContainer.classList.add("d-none");
}

// Control location validation check message
function locationValidationErrorMessage(message) {
  locationValidationContainer.innerHTML = `<i class="fa-solid fa-circle-xmark me-2"></i><span>${message}</span>`;
}

// Hide/Show loading spinner modal
async function toggleLoadingSpinnerModal(showLoadingSpinnerModal) {
  console.log(showLoadingSpinnerModal);
  if (showLoadingSpinnerModal) {
    await loadingSpinnerModal.show();
    return;
  }

  await loadingSpinnerModal.hide();

  console.log("last");
}
