const Pricing = ({data}) => {

  return (
    <table className="table table-sm table-dark">
      <thead>
        <tr>
         
          <th scope="col">Service</th>
          <th scope="col">Code</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
       {data.map(item => {
        return (
          <tr key={item.code}>
          
          <td>{item.servise}</td>
          <td>{item.code}</td>
          <td>{item.price}</td>
        </tr>
        )
       })}
          
      </tbody>
    </table>
  );
};

export default Pricing;
