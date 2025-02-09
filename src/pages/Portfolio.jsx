// portfolio cards that are interactable and navigate to the respective portfolio page
// the function portfolio() adds all of my portfolio information on the portfolio page
// by using export in the beginning of the function i do not have to have a line at the bottom to allow this function to be exported.
export default function portfolio() {
  return (
    // target="_blank" rel="noreferrer" opens the link in a new tab and prevents the page from being able to access the window.opener property. this way the user doesn't have to go back a page to find the website again. rel="noreferrer" stops the page from being able to access the window.opener property
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