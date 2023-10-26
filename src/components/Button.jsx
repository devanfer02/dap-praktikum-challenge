function Button({textContent, onClick, classList}) {
  return (
    <button type="button" className={classList} onClick={onClick}>{textContent}</button>
  )
}