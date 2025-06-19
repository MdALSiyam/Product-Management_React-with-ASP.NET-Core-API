import { useEffect, useState } from "react";

export function Product() {
  const [product, setProduct] = useState([]);

  function GetProduct() {
    fetch("https://localhost:7115/ProductCategories")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to fetch products");
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        alert("Error fetching products. Please try again later.");
      });
  }

  useEffect(() => {
    GetProduct();
  }, []);

  function deleteProduct(id, name) {
    const conf = confirm(`Do you want to delete ${name}?`);
    if (conf) {
      fetch("https://localhost:7115/ProductCategories/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to delete ${name}`);
          }
          return;
        })
        .then(() => {
          GetProduct();
          alert(`${name} Deleted Successfully!`);
        })
        .catch((error) => {
          console.error(`Error deleting ${name}:`, error);
          alert(`Error deleting ${name}. Please try again.`);
        });
    }
  }

  return (
    <>
      <h2 className="text-center text-dark my-4">Product List</h2>

      <div>
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-primary">
            <tr className="text-white text-center">
              <th>Product With Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.length > 0 ? (
              product.map((p, i) => (
                <tr key={i}>
                  {/* Removed p-3 from this td */}
                  <td className="align-top text-start">
                    <strong className="mb-1">Category Name:</strong>{" "}
                    {p.name}
                    {p.products && p.products.length > 0 ? (
                      <table className="table table-striped table-bordered mt-3 shadow-sm">
                        <thead className="table-info">
                          <tr className="bg-light text-dark text-start">
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Product Number</th>
                            <th>List Price</th>
                            <th>Size</th>
                            <th>Standard Cost</th>
                            <th>Weight</th>
                          </tr>
                        </thead>
                        <tbody>
                          {p.products.map((v, o) => (
                            <tr key={o}>
                              {/* Removed p-2 from these tds */}
                              <td>{v.productID}</td>
                              <td>{v.name}</td>
                              <td>{v.color}</td>
                              <td>{v.productNumber}</td>
                              <td>{v.listPrice}</td>
                              <td>{v.size}</td>
                              <td>{v.standardCost}</td>
                              <td>{v.weight}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="text-muted mt-2">
                        No products in this category.
                      </p>
                    )}
                  </td>
                  {/* Removed p-3 from this td */}
                  <td className="text-center align-middle">
                    <button className="btn btn-primary btn-sm me-2">
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(p.productCategoryID, p.name)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center p-2 text-info">
                  No product categories available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}