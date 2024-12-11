// Global Variables
const API_KEY = "f64196fb2874411787b184022241012";
const API_BASE_URL = "https://api.weatherapi.com/v1/";

const locationInput = document.getElementById("location");
const locationsListGroup = document.getElementById("locations-list");
const locationListItem = document.querySelectorAll(".list-group-item");

const locationValidationContainer = document.querySelector(
  ".location-validation div"
);

// Events handlers
locationInput.addEventListener("input", async function (e) {
  // check location validation
  if (isValidLocation(e.target?.value)) {
    // Hide validation check
    toggleLocationValidation(false);

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

    locationItem.addEventListener("click", function () {
      fetchLocationForecast(locationsList[i]?.id);
    });

    fragment.appendChild(locationItem);
  }

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
