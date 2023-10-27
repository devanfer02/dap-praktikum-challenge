function dataExist(list, email, username) {
  return list.some(user => user.email === email) || list.some(user => user.username === username)
}

function validEmail(input) {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return pattern.test(String(input))
}

function toggle(inputTag, buttonTag) {
  if(inputTag.getAttribute('type') === 'password') {
    inputTag.setAttribute('type', 'text')
    buttonTag.src = 'resources/icons/icon_eye_open.svg'
  } else {
    inputTag.setAttribute('type', 'password')
    buttonTag.src = 'resources/icons/icon_eye_closed.svg'
  }
}

function domAdd(tag, attribute, value) {
  tag.setAttribute(attribute, value)
}

function checkMessage(tags) {
  const messagePassTag = 
    document.getElementById('password-message') ? document.getElementById('password-message') : document.getElementById('message-login');
  const computed = getComputedStyle(messagePassTag)
  if (computed.getPropertyValue('display') === 'block') {        
    for(let i = 0; i < tags.length; i++) {
      tags[i].classList.remove('form-control-error')
    }
    messagePassTag.style.display = 'none'
    messagePassTag.style.color = 'red'
    messagePassTag.value = 'Kata Sandi Dengan Konfirmasi Sandi Tidak Sama'
  }
}