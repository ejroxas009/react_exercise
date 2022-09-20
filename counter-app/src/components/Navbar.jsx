const Navbar = (props) => {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <span className="navbar-brand">
          <span className="m-1">Navbar</span>
          {props.totalCount > 0 && (
            <span className="badge bg-secondary">{props.totalCount}</span>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
