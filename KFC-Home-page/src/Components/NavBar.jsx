function NavBar() {
  return (
    <>
      <div id="mynavbar">
        <div className="nav-left">
          <a href="#">
            <img src={"KfcLogo.png"} />
          </a>
        </div>
        <div className="nav-right">
          <button className=" btn loginBtn">LOGIN</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
