const WIDGET = document.getElementById('mcaptcha-widget__iframe');
const HOST = WIDGET.dataset.mcaptcha_host;

const createInput = val => {
  const INPUT_ID = 'mcaptcha__hidden-input';
  const INPUT_NAME = 'mcaptcha__toekn';
  const input = document.createElement('input');
  input.id = INPUT_ID;
  input.name = INPUT_NAME;
  input.value = val;
  input.hidden = true;
  return input;
};

const handle = e => {
  console.log(e);
  if (e.origin !== HOST) {
    return;
  }
  const token = e.data.token;
  const input = createInput(token);
  console.log(input);

  WIDGET.parentElement.appendChild(input);
};

window.addEventListener('message', e => handle(e));
