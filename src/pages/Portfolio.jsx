// portfolio cards that are interactable and navigate to the respective portfolio page
export default function portfolio() {
  return (
  <>
    <div className='card-container'>
      <div className='card' id='card1'>
        <a href="https://github.com/Blakeroband/Vehicle-building-application" target="_blank" rel="noreferrer">
          <h2 className="Vehicle">Vehicle builder</h2>
        </a>
      </div>
      <div className='card' id='card2'>
        <a href="https://github.com/Blakeroband/Module7-repo" target="_blank" rel="noreferrer">
          <h2 className="ReadMe">ReadMe Generator</h2>
        </a>
      </div>
      <div className='card' id='card3'>
        <a href="https://github.com/Blakeroband/card-crush" target="_blank" rel="noreferrer">
          <h2 className="CardCrush">Card Crush</h2>
        </a>
      </div>
    </div>
  </>
  )
}