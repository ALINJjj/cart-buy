const SmallTable = ({marke,price}) => {
  return (
    <div className="col-md-6 mb-3">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Servces</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{marke}</td>
            <td>{price}L.L</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SmallTable;
