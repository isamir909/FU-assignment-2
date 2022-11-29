import { PropTypes } from 'prop-types';

const NavBar = (props) => {
  return (
    <div>
            <nav className=" navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand text-uppercase"  href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/register">Register</a>
     

        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">{props.aboutText}</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
NavBar.defaultProps={
    title: " set title here",
    aboutText: "About",
}
export default NavBar