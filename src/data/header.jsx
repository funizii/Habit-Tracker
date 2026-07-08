const Header = () => {
  return (
    <header className="header">
      <div className="greetings">
      <h1>Good morning, <em>Funaya</em>.</h1>
      <p className="header-paragraph">Let's make today a productive day!</p>
      </div>
      <div className="blocks">
      <div className="Header-block">
        <div className="block-percent">34%</div>
        <div className="block-text">completion</div>
      </div>
       <div className="Header-block">
        <div className="block-percent">47d</div>
        <div className="block-text">streak</div>
      </div>
       <div className="Header-block">
        <div className="block-percent">58%</div>
        <div className="block-text">tracked</div>
      </div>
      </div>
    </header>
  ) 
}

export default Header