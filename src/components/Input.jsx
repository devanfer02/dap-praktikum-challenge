function Input({label, placeholder, id, type, icon, iconClass, iconId}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type}
        className="form-control-self mt-2"
        id={id}
        placeholder={placeholder} 
        required
        autoComplete="off"
      />
      {icon && <i className={iconClass} id={iconId} ></i>}
    </div>
  )
}