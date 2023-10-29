function Button({textContent, onClick, classList}) {
  return (
    <button type="button" className={classList} onClick={onClick}>{textContent}</button>
  )
}

function ButtonIcon({iconSrc, onClick, classList, style}) {
  return (
    <button type="button" className={classList} onClick={onClick} style={style}>
      <img src={iconSrc} alt="icon" width={'20px'} height={'20px'} id="icon-video"/>
    </button>
  )
}