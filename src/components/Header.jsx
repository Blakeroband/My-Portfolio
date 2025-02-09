import NavTabs from "./NavTabs";

// by wrapping the NavTabs compenent in the header elements this ensures that the navtabs are displayed at the top of the page
export default function Header() {
  return (
    <header className='header'>
      <NavTabs />
    </header>
  );
}