import './App.css'

function App() {

  return (
    <>

  <details class="accordion-item">
    <summary class="accordion-header">
      <span class="icon">🎨</span> Can I customize the styling?
    </summary>
    <div class="accordion-content">
      <p>Yes! Every aspect including colors, shadows, border-radius, and icons can be easily adjusted using standard CSS variables or properties.</p>
    </div>
  </details>

  <details class="accordion-item">
    <summary class="accordion-header">
      <span class="icon">🚀</span> Does it require any JavaScript?
    </summary>
    <div class="accordion-content">
      <p>Not at all. The open and close behavior is entirely handled by the browser, making it lightweight and lightning-fast.</p>
    </div>
  </details>
    </>
  )
}

export default App
