// Navigation function
function navigate(src_path, target) {
  var main_iframe = parent.document.getElementById('main-iframe');
  var loading_bar = document.getElementById('loading-bar');

  switch (target) {
    case '_main_iframe':
      loading_bar.style.opacity = '100%';
      loading_bar.style.width = '100%';
      main_iframe.src = src_path;
      main_iframe.onload = function() {
        loading_bar.style.opacity = '0%';
        loading_bar.style.width = '0';
      };
      break;
    case '_blank':
      window.open(src_path, target);
      break;
    case '_parent':
      parent.location.href = src_path;
      break;
    case '_self':
      window.location.href = src_path;
      break;
    case '_top':
      top.location.href = src_path;
      break;
    default:
      console.log('Invalid target specified.');
  }
}

// User communication function
function MsgBox(modes, buttons, title, prompt, callback) {
  // Create a new div for the message box
  var msgBox = document.createElement('div');
  msgBox.className = 'MsgBox';

  // Add the title
  var titleElement = document.createElement('h2');
  titleElement.innerText = title;
  msgBox.appendChild(titleElement);

  // Add the prompt
  var promptElement = document.createElement('h4');
  promptElement.innerText = prompt;
  msgBox.appendChild(promptElement);

  // Add the appropriate icon based on the mode
  var iconElement = document.createElement('span');
  switch (modes) {
    case 0:
      iconElement.innerText = 'ℹ️'; // Information icon
      break;
    case 1:
      iconElement.innerText = '⚠️'; // Warning icon
      break;
    case 2:
      iconElement.innerText = '❌'; // Critical icon
      break;
    default:
      console.error(`MsgBox : ${modes} - invalid mode parameter`);
  }
  msgBox.appendChild(iconElement);

  // Add the appropriate buttons
  var buttonsElement = document.createElement('div');
  buttonsElement.className = 'buttons';
  switch (buttons) {
    case 3:
      buttonsElement.innerHTML = '<button onclick="handleButtonClick(\'OK\', ' + callback + ')">OK</button>';
      break;
    case 4:
      buttonsElement.innerHTML = '<button onclick="handleButtonClick(\'Cancel\', ' + callback + ')">Cancel</button>';
      break;
    case 5:
      buttonsElement.innerHTML = '<button onclick="handleButtonClick(\'OK\', ' + callback + ')">OK</button><button onclick="handleButtonClick(\'Cancel\', ' + callback + ')">Cancel</button>';
      break;
    case 6:
      buttonsElement.innerHTML = '<button onclick="handleButtonClick(\'Yes\', ' + callback + ')">Yes</button><button onclick="handleButtonClick(\'No\', ' + callback + ')">No</button>';
      break;
    case 7:
      buttonsElement.innerHTML = '<button onclick="handleButtonClick(\'Yes\', ' + callback + ')">Yes</button><button onclick="handleButtonClick(\'No\', ' + callback + ')">No</button><button onclick="handleButtonClick(\'Cancel\', ' + callback + ')">Cancel</button>';
      break;
    case 8:
      buttonsElement.innerHTML = '<button onclick="handleButtonClick(\'Retry\', ' + callback + ')">Retry</button><button onclick="handleButtonClick(\'Cancel\', ' + callback + ')">Cancel</button>';
      break;
    default:
      console.error(`MsgBox : ${buttons} - invalid button parameter`);
      break;
  }
  msgBox.appendChild(buttonsElement);

  // Add the message box to the body
  parent.document.body.appendChild(msgBox);
}

// Function to handle button clicks
function handleButtonClick(value, callback) {
  // Remove the message box from the document
  var msgBox = document.querySelector('.MsgBox');
  if (msgBox) {
    msgBox.parentNode.removeChild(msgBox);
  }
  // Call the callback function with the value of the clicked button
  if (typeof callback === 'function') {
    callback(value);
  }
}
