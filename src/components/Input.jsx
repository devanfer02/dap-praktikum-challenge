function Input({label, placeholder, id, type, minLength, icon, iconSrc, iconClass, iconId}) {
  function checkRedLine() {
    const messagePassTag = 
      document.getElementById('password-message') ? document.getElementById('password-message') : document.getElementById('message-login');
    const computed = getComputedStyle(messagePassTag)
    if (computed.getPropertyValue('display') === 'block') {        
      const tags = document.getElementsByClassName('form-control-self')
      for(let i = 0; i < tags.length; i++) {
        tags[i].classList.remove('form-control-error')
      }
      messagePassTag.style.display = 'none'
      messagePassTag.style.color = 'red'
      messagePassTag.value = 'Kata Sandi Dengan Konfirmasi Sandi Tidak Sama'
    }
  }

  function toggleEye(event) {
    const inputTag = event.target.parentElement.querySelector('input')
    const buttonTag = event.target
    
    if(inputTag.getAttribute('type') === 'password') {
      inputTag.setAttribute('type', 'text')
      buttonTag.src = 'resources/icons/icon_eye_open.svg'
    } else {
      inputTag.setAttribute('type', 'password')
      buttonTag.src = 'resources/icons/icon_eye_closed.svg'
    }
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type}
        className={`form-control-self mt-2 ${type === 'password' ? 'pass-in' : ''}`}
        id={id}
        placeholder={placeholder} 
        required={true}
        autoComplete="off"
        minLength={minLength ? parseInt(minLength) : 1}
        onClick={checkRedLine}
      />
      {icon && <img src={iconSrc} alt="icon" className={iconClass} id={iconId} onClick={toggleEye}/>}
    </div>
  )
}