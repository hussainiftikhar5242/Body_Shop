import React from 'react';
import '../css/CustomTable.css';

function CustomTable({
  title = '',
  noOfCols = 2,
  data = [],
  headers = [],
  multipleTitles = [],
}) {
  let array = [];
  for (let index = 0; index < noOfCols - 2; index++) {
    array.push(index);
  }

  return (
    <div className="w-100">
      {title && (
        <h5 style={{ fontSize: '19px' }} className="text-orange">
          {title}
        </h5>
      )}
      {multipleTitles.length > 0 && (
        <div className="d-flex w-100">
          <h5
            style={{
              fontSize: '19px',
              backgroundColor: 'white',
              width: 'fit-content',
              margin: 0,
            }}
            className="py-2 px-3 text-orange"
          >
            {multipleTitles[0]}
          </h5>
          <h5
            style={{ fontSize: '19px', margin: 0 }}
            className="py-2 px-3 text-orange"
          >
            {multipleTitles[1]}
          </h5>
        </div>
      )}
      <div style={{ borderRadius: '12px' }}>
        <table
          className="table table1 custom-table fw-semibold"
          style={{ borderWidth: '10px  100px', margin: '0px' }}
        >
          <tbody>
            {/* Headers if any */}
            <tr>
              {headers.length > 0 &&
                headers.map((header, index) => (
                  <td
                    key={index}
                    className="table-column-text-value"
                    style={{
                      fontSize: '14px',
                      backgroundColor: '#0066ff17',
                      textAlign: 'center',
                    }}
                  >
                    {header}
                  </td>
                ))}
            </tr>

            {/* Data Values in Rows */}
            {data.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    paddingRight: '20px',
                    backgroundColor: '#0066ff17',
                  }}
                  className="table-column-key"
                >
                  {item.key}
                </td>
                <td
                  className="table-column-text-value"
                  style={{
                    paddingLeft: '30px',
                    width: noOfCols >= 3 ? '40%' : '',
                    backgroundColor: '#0066ff17',
                  }}
                >
                  {item.valueOfCol1}
                </td>
                {noOfCols >= 3 && (
                  <td
                    className="table-column-text-value"
                    style={{
                      paddingLeft: '30px',
                      width: '90%',
                      backgroundColor: '#0066ff17',
                    }}
                  >
                    {item.valueOfCol2}
                  </td>
                )}
                {noOfCols >= 4 && (
                  <td
                    className="table-column-text-value"
                    style={{
                      paddingLeft: '30px',
                      backgroundColor: '#0066ff17',
                    }}
                  >
                    {item.valueOfCol3}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomTable;
