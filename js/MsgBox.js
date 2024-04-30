// Loading style sheet related to the MsgBox
var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "../css/MsgBox.css";
head.appendChild(link);

/**
 * `MsgBox` is a function that creates and displays a custom message box on the webpage.
 *
 * @param {string} [prompt="This is a default message. Please provide a custom message."] - The message to be displayed in the message box.
 * @param {string} [buttons="btnOkCancel"] - The type of buttons to be displayed. Options include: "btnOkOnly", "btnCancelOnly", "btnOkCancel", "btnYesNo", "btnYesNoCancel", "btnRetryCancel".
 * @param {string} [title="Default Title"] - The title to be displayed on the message box.
 * @param {string} [modes="_info"] - The mode of the message box which determines the icon and color. Options include: "info", "excl", "crit".
 *
 * @returns {string} This function returns the value of the button that the user clicked. The value is a string and depends on the `buttons` parameter.
 *
 * @example
 * // creates a message box with the default settings and returns the value of the clicked button
 * var result = MsgBox();
 *
 * @example
 * // creates a message box with custom settings and returns the value of the clicked button
 * var result = MsgBox("This is a custom message.", "btnOkCancel", "Custom Title", "info");
 */
// Main callable MsgBox function
function MsgBox(prompt, buttons, title, modes) {
  var MsgBoxContainer = document.createElement("div");
  MsgBoxContainer.className = "MsgBoxContainer";

  var TitleBox = document.createElement("div");
  TitleBox.className = "TitleBox";
  MsgBoxContainer.appendChild(TitleBox);

  var Icon = document.createElement("img");
  Icon.className = "Icon";

  var icon_size = "25x25";
  var info_color = "44ff44";
  var excl_color = "ff8822";
  var crit_color = "ff2222";
  var default_color = "124816";
  var icon_url = "https://singlecolorimage.com/get/";

  switch (modes) {
    case "info":
      Icon.src = `${icon_url}${info_color}/${icon_size}`;
      Icon.alt = "Info_icon";
      break;
    case "excl":
      Icon.src = `${icon_url}${excl_color}/${icon_size}`;
      Icon.alt = "Excl_icon";
      break;
    case "crit":
      Icon.src = `${icon_url}${crit_color}/${icon_size}`;
      Icon.alt = "Crit_icon";
      break;
    default:
      Icon.src = `${icon_url}${default_color}/${icon_size}`;
      Icon.alt = "Default_icon";
      break;
  }
  TitleBox.appendChild(Icon);

  var TitleText = document.createElement("p");
  TitleText.className = "TitleText";
  TitleText.textContent = title;
  TitleBox.appendChild(TitleText);

  var PromptText = document.createElement("p");
  PromptText.className = "PromptText";
  PromptText.textContent = prompt;
  MsgBoxContainer.appendChild(PromptText);

  var ButtonBox = document.createElement("div");
  ButtonBox.className = "ButtonBox";

  var buttonConfigs = {
    btnOkOnly: [{ text: "Ok", value: "btnOk" }],
    btnCancelOnly: [{ text: "Cancel", value: "btnCancel" }],
    btnOkCancel: [
      { text: "Ok", value: "btnOk" },
      { text: "Cancel", value: "btnCancel" },
    ],
    btnYesNo: [
      { text: "Yes", value: "btnYes" },
      { text: "No", value: "btnNo" },
    ],
    btnYesNoCancel: [
      { text: "Yes", value: "btnYes" },
      { text: "No", value: "btnNo" },
      { text: "Cancel", value: "btnCancel" },
    ],
    btnRetryCancel: [
      { text: "Retry", value: "btnRetry" },
      { text: "Cancel", value: "btnCancel" },
    ],
    btnIgnore: [{ text: "Ignore", value: "btnIgnore" }],
  };

  var buttonLabels = buttonConfigs[buttons];
  for (var i = 0; i < buttonLabels.length; i++) {
    var btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = buttonLabels[i].text;
    btn.onclick = function () {
      document.body.removeChild(MsgBoxContainer);
      return this.value;
    };
    btn.value = buttonLabels[i].value;
    ButtonBox.appendChild(btn);
  }

  MsgBoxContainer.appendChild(ButtonBox);

  document.body.appendChild(MsgBoxContainer);
}
