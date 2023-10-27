function Input({label, placeholder, id, type, icon, iconSrc, iconClass, iconId}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type}
        className={`form-control-self mt-2 ${type === 'password' ? 'pass-in' : ''}`}
        id={id}
        placeholder={placeholder} 
        required
        autoComplete="off"
      />
      {icon && <img src={iconSrc} alt="icon" className={iconClass} id={iconId}/>}
    </div>
  )
}