export function renderNewLines(text) {
  return text.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)
}
