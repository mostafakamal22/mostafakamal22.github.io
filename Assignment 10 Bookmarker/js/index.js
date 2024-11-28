// Global Variables
var bookmarkNameInput = document.getElementById("siteName");
var bookmarkUrlInput = document.getElementById("siteUrl");

var addBookmarkForm = document.getElementById("add-bookmark-form");
var updateBookmarkNameInput = document.getElementById("updateSiteName");
var updateBookmarkUrlInput = document.getElementById("updateSiteUrl");

var bookmarkTable = document.getElementById("bookmark-table");
var tableData = document.getElementById("tableData");
var alertContainer = document.getElementById("alert");

var BookmarksValidationModal = new bootstrap.Modal(
  document.getElementById("BookmarksValidationModal")
);

var updateBookmarkModal = new bootstrap.Modal(
  document.getElementById("updateBookmark")
);

var toast = document.getElementById("toast");
var toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
var toastBody = document.getElementById("toast-body");

var queryBookmarksForm = document.getElementById("query-bookmark-form");
var bookmarkQueryInput = document.getElementById("bookmarkQuery");

// Show Available Bookmarks at first
renderBookmarks();

// Add New Bookmark
function addNewBookmark() {
  // Get bookmarks data
  var bookmarks = getBookmarks();

  // Validate inputs values
  if (!validateBookmark(bookmarkNameInput))
    return BookmarksValidationModal.show();
  if (!validateBookmark(bookmarkUrlInput))
    return BookmarksValidationModal.show();

  // Add new bookmark to the list
  bookmarks = [
    ...bookmarks,
    {
      name: bookmarkNameInput?.value?.trim(),
      url: bookmarkUrlInput?.value?.trim(),
    },
  ];

  // Apply Changes to the local storage
  setBookmarks(bookmarks);

  // Apply Changes to the UI
  renderBookmarks();

  // Clear form
  clearForm();

  // Clear search query
  clearSearchQuery();

  // Show success Toast
  showToast("New bookmark added.");

  // Scroll to the end of the table to show the new bookmark
  bookmarkTable.scrollIntoView({ behavior: "smooth", block: "end" });

  // Animate the last row of the table
  const rows = document.querySelectorAll("#tableData tr");
  // Get the last row
  const lastRow = rows[rows.length - 1];
  if (lastRow) {
    // Select all <td> in the last row
    const cells = lastRow.querySelectorAll("td");
    cells.forEach((cell) => {
      cell.classList.add("highlight-animation");
      // Remove the animation class after the animation ends
      cell.addEventListener(
        "animationend",
        () => cell.classList.remove("highlight-animation"),
        { once: true }
      );
    });
  }
}

// Delete Bookmark
function deleteBookmark(bookmarkName) {
  // Get available bookmarks data
  var bookmarks = getBookmarks();

  // Get bookmark to delete
  var targetBookmarkIndex = bookmarks.findIndex((b) => b.name === bookmarkName);

  if (!targetBookmarkIndex < 0) return;

  // Delete bookmark from bookmarks data
  var deletedBookmark = bookmarks.splice(targetBookmarkIndex, 1);

  // Update bookmarks Data
  setBookmarks(bookmarks);

  // Check if the deleted bookmark is in the query search result
  // and exclude it if its found
  if (filteredBookmarks) {
    var updatedBookmarks = filteredBookmarks?.filter(
      (b) => b.name !== deletedBookmark[0]?.name
    );
    filteredBookmarks = [...updatedBookmarks];
  }

  // Update the UI
  renderBookmarks(filteredBookmarks ? updatedBookmarks : undefined);

  // Show success Toast
  showToast("Bookmark deleted.");
}

// Update bookmark action
var currentUpdatedBookmark;

function updateAction(bookmark) {
  // Set bookmark value to the inputs
  updateBookmarkNameInput.value = bookmark.name;
  updateBookmarkUrlInput.value = bookmark.url;

  // Set current bookmark that being updated
  currentUpdatedBookmark = bookmark.name;

  // Open update modal
  updateBookmarkModal.show();
}

// Update Bookmark
function updateBookmark() {
  // Get available bookmarks data
  var bookmarks = getBookmarks();

  // Get bookmark to update
  var targetBookmarkIndex = bookmarks.findIndex(
    (b) => b.name === currentUpdatedBookmark
  );

  if (!targetBookmarkIndex < 0) return;

  // Validate inputs values
  if (!validateBookmark(updateBookmarkNameInput))
    return BookmarksValidationModal.show();
  if (!validateBookmark(updateBookmarkUrlInput))
    return BookmarksValidationModal.show();

  //Get new values
  var newBookmarkData = {
    name: updateBookmarkNameInput?.value?.trim(),
    url: updateBookmarkUrlInput?.value?.trim(),
  };

  // Update bookmark with new bookmarks data
  bookmarks.splice(targetBookmarkIndex, 1, newBookmarkData);

  // Update bookmarks Data
  setBookmarks(bookmarks);

  // Check if the updated bookmark is in the query search result
  // and update it if its found
  if (filteredBookmarks) {
    var updatedBookmarks = filteredBookmarks?.map((b) => {
      if (b.name === currentUpdatedBookmark) {
        return {
          name: updateBookmarkNameInput?.value?.trim(),
          url: updateBookmarkUrlInput?.value?.trim(),
        };
      }
      return b;
    });

    filteredBookmarks = updatedBookmarks;
  }

  // Update the UI
  renderBookmarks(filteredBookmarks);

  // Close update modal
  updateBookmarkModal.hide();

  // Show success Toast
  showToast("Bookmark updated.");
}

// Query(search) bookmarks
var filteredBookmarks;

function queryBookmarks(input) {
  // Get search query
  var query = input?.value?.trim();

  // Get available bookmarks
  var bookmarks = getBookmarks();

  // Filter bookmarks based on query
  filteredBookmarks =
    query !== ""
      ? bookmarks.filter((b) =>
          b.name.toLowerCase().includes(query.toLowerCase())
        )
      : undefined;

  // Show query results
  renderBookmarks(filteredBookmarks);
}

// Show Bookmarks Data to the UI
function renderBookmarks(bookmarks = getBookmarks()) {
  //Hide table & search query and show message bookmarks list is empty
  if (bookmarks?.length === 0) {
    if (bookmarks?.length === 0 && !filteredBookmarks) {
      queryBookmarksForm.classList.add("d-none");
    }

    bookmarkTable.classList.add("d-none");

    alertContainer.innerHTML = `
      <div
        class="alert alert-warning d-flex align-items-center my-4"
        role="alert"
      >
       <i class="fa-solid fa-triangle-exclamation me-2"></i>
        <div>there're no bookmarks data to show.</div>
      </div>
`;
  } else {
    // Make sure table & search query form is visible
    queryBookmarksForm.classList.remove("d-none");
    bookmarkTable.classList.remove("d-none");

    // and the alert content is not visible
    alertContainer.innerHTML = "";

    // Show Bookmarks data to the table body UI
    var bodyData = "";
    for (var i = 0; i < bookmarks.length; i++) {
      var bookmark = bookmarks[i];

      bodyData += `
      <tr>
    <td>${i + 1}</td>
    <td>${bookmark.name}</td>
    <td>
      <a
        href="${addWWWIfNeeded(bookmark.url)}"
        target="_blank"
        style="width: fit-content;"
        class="btn btn-sm d-flex gap-1 justify-content-center align-items-center btn-success text-white mx-auto"
        >
        <i class="fa-solid fa-eye"></i>
        Visit</a
      >
    </td>
    <td>
       <button
         onClick='updateAction(${JSON.stringify(bookmark)})'
        type="button"
        class="btn btn-sm d-flex gap-1 justify-content-center align-items-center btn-warning text-white  mx-auto"
      >
      <i class="fa-solid fa-pen-to-square"></i>
        Update
      </button>
    </td>
    <td>
      <button
        onClick='deleteBookmark("${bookmark.name}")'
        type="button"
        class="btn btn-sm d-flex gap-1 justify-content-center align-items-center btn-danger text-white mx-auto"
      >
      <i class="fa-solid fa-trash-can"></i>
        Delete
      </button>
    </td>
  </tr>
       `;
    }

    tableData.innerHTML = bodyData;
  }
}

// Get Bookmarks from local storage
function getBookmarks() {
  var bookmarkList = localStorage.getItem("bookmarks");

  if (bookmarkList) {
    return JSON.parse(bookmarkList);
  }

  return [];
}

// Validate Bookmark data inputs
function validateBookmark(input) {
  // Get bookmarks data
  var bookmarks = getBookmarks();

  // validate bookmark name
  if (input.id === "siteName" || input.id === "updateSiteName") {
    if (!input?.value || input?.value?.trim()?.length < 3) {
      input.classList.add("is-invalid");
      input.classList.remove("invalid");
      return false;
    }

    // Validate bookmark name already exists
    // in case of updating :- allow having the same old name of the bookmark
    var isDuplicatedBookmarkName =
      input.id === "siteName"
        ? bookmarks.find(
            (b) => b.name.toLowerCase() === input?.value?.trim()?.toLowerCase()
          )
        : Boolean(
            input?.value?.trim()?.toLowerCase() !==
              currentUpdatedBookmark?.toLowerCase()
          ) &&
          bookmarks
            .filter(
              (b) =>
                b.name.toLowerCase() !== currentUpdatedBookmark?.toLowerCase()
            )
            .find(
              (b) =>
                b.name.toLowerCase() === input?.value?.trim()?.toLowerCase()
            );

    if (isDuplicatedBookmarkName) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      return false;
    }
  } else {
    // Validate bookmark URL
    if (!input?.value || !isValidURL(input?.value?.trim())) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      return false;
    }
  }

  // if the input value is valid
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
  return true;
}

// Set Bookmarks data to local storage
function setBookmarks(bookmarks) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

// Validate URL
function isValidURL(url) {
  var urlPattern =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s?#]*)?(\?[\w=&%-]*)?(#[\w-]*)?$/;
  return urlPattern.test(url);
}

// Force www Prefix When Missing
function addWWWIfNeeded(url) {
  // Ensure the URL starts with http:// or https://
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }

  const urlObject = new URL(url);

  // Add www. if the hostname doesn't already have it
  if (!urlObject.hostname.startsWith("www.")) {
    urlObject.hostname = `www.${urlObject.hostname}`;
  }

  return urlObject.href;
}

// Clear add bookmark form
function clearForm() {
  addBookmarkForm.reset();
}

// Clear search query
function clearSearchQuery() {
  bookmarkQueryInput.value = null;
}

// Show custom toast
function showToast(message) {
  toastBody.innerHTML = message;
  toastBootstrap.show();
}
