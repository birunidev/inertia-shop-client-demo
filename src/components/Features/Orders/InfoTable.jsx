import "./InfoTable.css";

export default function InfoTable({ dataRows }) {
  return (
    <div>
      <table className="w-full info-table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>John Doe</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>0842523434</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>johndoe@inertiashop.dev</td>
          </tr>
          <tr>
            <td>Notes</td>
            <td>324234324324324</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
