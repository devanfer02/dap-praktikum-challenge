function Button({textContent, onClick, classList}) {
  return (
    <button type="button" className={classList} onClick={onClick}>{textContent}</button>
  )
}

function ButtonIcon({iconSrc, onClick, classList, style}) {
  return (
    <button type="button" className={classList} onClick={onClick} style={style}>
      &nbsp;
      <img src={iconSrc} alt="icon" width={'18px'} height={'18px'} id="icon-video"/>
      &nbsp;
    </button>
  )
}