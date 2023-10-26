
const ItemListContainer = ({ greeting }) => {

  <ItemListContainer greeting="Encuentra los mejores productos aquí." />
  
  return (
  
     <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Bienvenido a nuestra tienda en línea</h2>
              <p className="card-text">{greeting}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;

