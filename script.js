"use strict";

/*
  04 AUGUST – EVENT BEHAVIOUR
  The HTML event attributes call the functions in this file. The event
  attribute identifies the trigger; these functions contain the behaviour.
*/

/* This function shows or hides the announcement that uses the hidden attribute. */
function toggleAnnouncement() {
  const announcement = document.getElementById("extra-announcement");
  announcement.hidden = !announcement.hidden;
}

/* This function adds the selected class to the active filter button. */
function selectFilterButton(button) {
  const buttons = document.querySelectorAll(".filter-row button");

  buttons.forEach(function (currentButton) {
    currentButton.classList.remove("selected");
  });

  button.classList.add("selected");
}

/*
  04 AUGUST – DATA ATTRIBUTES
  This function reads each card's data-level value through card.dataset.level.
  It then uses the global hidden property to show or hide matching cards.
*/
function filterProgrammes(level, button) {
  const programmeCards = document.querySelectorAll(".workshop-card");

  programmeCards.forEach(function (card) {
    const cardLevel = card.dataset.level;
    card.hidden = level !== "all" && cardLevel !== level;
  });

  selectFilterButton(button);
}

/* This function displays a simple message instead of sending the demonstration form. */
function submitEnquiry(event) {
  event.preventDefault();

  const nameInput = document.getElementById("full-name");
  const formMessage = document.getElementById("form-message");

  formMessage.textContent =
    "Thank you, " + nameInput.value + ". Your demonstration enquiry has been recorded.";
  formMessage.hidden = false;
}

/* This function updates the character count while the visitor types. */
function countCharacters(textArea) {
  const countDisplay = document.getElementById("character-count");
  countDisplay.textContent = textArea.value.length + "/250 characters";
}
