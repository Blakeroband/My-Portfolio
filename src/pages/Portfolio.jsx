// portfolio cards that are interactable and navigate to the respective portfolio page

export default function portfolio() {
  return (
    <div>
      {/* Portfolio cards go here */}
      <h1>Your Portfolios</h1>
      <ul>
        {/* i need each of these items to be links that can navigate to another page */}
        {/* Example portfolio item */}
        <li>Portfolio 1</li>
        <li>Portfolio 2</li>
      </ul>
    </div>
  );
}