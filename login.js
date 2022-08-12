

const HIDDEN   = 'hidden';
const NAME_KEY = 'name';

const $loginForm   = document.querySelector('#login-form');
const $loginInput  = $loginForm.querySelector('input');

const setTitle = (title) => {
  if(!title) {
    title = 'JEHEO';
  }

  const $loginWrap = document.querySelector('.login-wrap');
  $loginWrap.classList.add(HIDDEN);

  const $title = document.querySelector('h1');
  $title.innerHTML = `${title}'S PAGE`;
  $title.classList.remove(HIDDEN);

  document.title = `${title}'S PAGE`;
}

const loginSubmit = (event) => {
  event.preventDefault();

  const name = $loginInput.value;
  
  if(name === '') {
    alert(`이름을 입력해주세요!`);
    $loginInput.focus();
    return;
  } else if(name.length > 8) {
    alert(`이름이 너무 길어요...`);
    $loginInput.focus();
    return;
  }
  
  setTitle(name);
  localStorage.setItem(NAME_KEY, name);
};

$loginForm.addEventListener('submit', loginSubmit)

const loginName = localStorage.getItem(NAME_KEY);
if(loginName) {
  setTitle(loginName);
}