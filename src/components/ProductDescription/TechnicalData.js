import React from "react";
import "./TechnicalData.css";

function TechnicalData({ productDesc }) {

  return (
    <div className="compatibility-container">
      <h2>
        Fact Sheet Of {productDesc && productDesc[0]?.prod_name.slice(0, 15)}:
      </h2>
      <table className="compatibility-table-container">
        <tbody>
          <tr className="compatibility-container-row-odd">
            <td className="compatibility-container-data-key">Product Name:</td>
            <td className="compatibility-container-data">
              {productDesc && productDesc[0]?.prod_name}
            </td>
          </tr>
          {productDesc && productDesc[0]?.SKU[0] ? (
            Object.entries(productDesc[0]?.SKU[0]).map(
              ([key, value], index) => (
                <tr className="compatibility-container-row" key={index}>
                  <td className="compatibility-container-data-key">{key}:</td>
                  <td className="compatibility-container-data">{value}</td>
                </tr>
              )
            )
          ) : (
            <p>No technical data available.</p>
          )}
          {productDesc &&
            productDesc[0]?.descriptions.map((data, index) => (
              <tr className="compatibility-container-row" key={index}>
                <td className="compatibility-container-data-key">
                  {data.key}:
                </td>
                <td className="compatibility-container-data">{data.value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TechnicalData;
