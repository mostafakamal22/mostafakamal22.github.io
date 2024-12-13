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

// Events handlers
locationInput.addEventListener("input", async function (e) {
  // check location validation
  if (isValidLocation(e.target?.value)) {
    // Hide validation check
    toggleLocationValidation(false);

    // Show Loading state
    loadingLocationsResults();

    // Show Locations results
    const locationsList = await searchLocation(e.target?.value);
    showLocationsList(locationsList);
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

// validation location input
function isValidLocation(location) {
  if (!location || location.length < 3) return false;

  return true;
}

// Search Location
async function searchLocation(query) {
  if (!query) return null;

  try {
    // Fetch locations Data
    const res = await fetch(
      `${API_BASE_URL}search.json?key=${API_KEY}&q=${query}`
    );

    const locationsList = await res.json();

    return locationsList;
  } catch (error) {
    // Show error message
    locationValidationErrorMessage(error?.message);

    // Show validation checks
    toggleLocationValidation(true);
  }
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

      // Fetch location forecast data
      const locationForecastData = await fetchLocationForecast(
        locationsList[i]?.id
      );

      // Show forecast data result on UI
      showLocationForecast(locationForecastData);
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
async function fetchLocationForecast(locationID) {
  if (!locationID) return null;

  try {
    const res = await fetch(
      `${API_BASE_URL}forecast.json?key=${API_KEY}&q=id:${locationID}&days=3&aqi=no&alerts=no`
    );

    const locationWeatherData = await res.json();

    console.log(locationWeatherData);
    return locationWeatherData;
  } catch (error) {
    // Show error message
    locationValidationErrorMessage(error?.message);

    // Show validation checks
    toggleLocationValidation(true);
  }
}

// Show location forecast
function showLocationForecast(locationForecastData) {
  //Get needed data from the location forecast object
  const { forecast, location } = locationForecastData;

  if (!forecast || !location) return;

  // Show forecast data on UI
  const { forecastday } = forecast;
  const { name, country } = location;

  const fragment = document.createDocumentFragment();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 0; i < forecastday.length; i++) {
    const d = new Date(forecastday[i]?.date);
    const day = weekday[d.getUTCDay()];
    const avghumidity = forecastday[i]?.day?.avghumidity;
    const avgtemp_c = forecastday[i]?.day?.avgtemp_c;
    const avgvis_km = forecastday[i]?.day?.avgvis_km;
    const daily_chance_of_rain = forecastday[i]?.day?.daily_chance_of_rain;
    const condition_text = forecastday[i]?.day?.condition?.text;
    const condition_icon = forecastday[i]?.day?.condition?.icon;

    const forecastCol = document.createElement("div");
    forecastCol.classList.add("col-md-4");
    forecastCol.innerHTML = ` 
            <div style='--icon-src: url("https:${condition_icon}")' class="card bg-glass rounded-4 text-white">
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
                  <div><i class="fa-solid fa-wind text-primary-emphasis"></i> ${avgvis_km}<span class="fs-6">Km&sol;h</span></div>
                </div>
              </div>
            </div>
           `;

    fragment.appendChild(forecastCol);
  }

  locationForecastTitle.innerHTML = `[${name}, ${country}] Forecast`;
  locationForecastRow.replaceChildren(fragment);
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
