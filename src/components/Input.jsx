function Input({label, placeholder, id, type, minLength, icon, iconSrc, iconClass, iconId}) {
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
      />
      {icon && <img src={iconSrc} alt="icon" className={iconClass} id={iconId}/>}
    </div>
  )
}