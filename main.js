// Declare interval, runCheck, and searchString variables.
// interval will be defined based on what radio button the user clicks.
// runCheck is used to know whether the run button is set to on or off.
// searchString is the search value that the user wants to detect changes for on the webpage.
let interval;
let runCheck = false;
let searchString = "";

// Clicking the radio buttons will change the value for interval.
$('#15s').on('click', () => {
  interval = 15000;
});

$('#30s').on('click', () => {
  interval = 30000;
});

$('#45s').on('click', () => {
  interval = 45000;
});

$('#60s').on('click', () => {
  interval = 60000;
});

// When the run button is clicked, a function will be executed.
$('#run').on('click', () => {
  // If runCheck is true (or on), it will...
  if (runCheck === true) {
    // turn off,
    runCheck = false;
    // change the color of the button to red,
    $('#run').css('background-color') = 'red';
    // and reset searchString to an empty string.
    searchString = "";
    // Nothing else.
    return;
  // If runCheck is false (or off), it will...
  } else {
    // turn on,
    runCheck = true;
    // set searchString to the value that is currently in the textbox,
    searchString = $('#searcher').val();
    // change the color of the button to green,
    $('#run').css('background-color') = 'green';
    // and reload the page in intervals of whatever was selected.
    setTimeout(() => {
      // The page will reload.
      location.reload();
      // If the HTML no longer contains the searchString,
      if (!$(`html:contains('${searchString}')`)) {
        // it will alert the user that a change was detected.
        alert('Change detected. Please check webpage.');
      }
    }, interval);
  };
});