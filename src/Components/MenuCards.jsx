import { products } from "../assets/data/products";

function MenuCards() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="evryDayValue">
              <h2 className="menu-title mt-0">BEST SELLERS</h2>
              <div className="row">
                {products.map((prod, index) => {
                  return (
                    <>
                      <div
                        className="col-lg-3 col-md-3 col-4 px-larg-2"
                        key={index}
                      >
                        <div className="card">
                          <img
                            src={prod.image}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{prod.name} </h5>
                            <span className="badge rounded-pill bg-danger">
                              RS.{prod.price}
                            </span>
                            <div className="productDes">
                              <p className="card-text">{prod.description}</p>
                              <br />
                            </div>

                            <button className="btn btn-primary">
                              {" "}
                              <i className="fa fa-plus"></i> ADD TO BUCKET{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuCards;
