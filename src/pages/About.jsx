// export default function About() lets us use the About component in other files


export default function About() {
  return (
  <>
    <div className="homeContainer">
      <h1 className="About">About Me</h1>
    </div>
    <div className="AvatarContainer">
      <img className="Avatar" src="src\assets\images\avatar.png" alt="Portfolio" />
    </div>
    <div className="PContainer">
      <p>
        I am a full-stack web developer student with experience in HTML, CSS, JavaScript, Node.js, TypeScript and React. I am currently honing my skills in these areas to become a junior developer. Most of my previous job experience comes from manual labor positions. I am very new to the world of computer language and am excited to learn more about it. I am a quick learner and am eager to learn more about the world of web development.
      </p>
    </div>
  </>  
  );
}