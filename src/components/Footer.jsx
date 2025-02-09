// this works the same way as the header except it renders the information at the bottom of the page inside the "footer" element

export default function Footer() {
  return (
    <footer>
      <div id="footerContent">
        <span>
          &copy; 2025 Blake Anderson
        </span>
        <a href="https://github.com/blakeroband" target="_blank" rel="noopener noreferrer">
        <img className="git" src="src\assets\images\github-logo.png" alt="GitHub"/>
        </a>
      </div>
    </footer>
  );
}