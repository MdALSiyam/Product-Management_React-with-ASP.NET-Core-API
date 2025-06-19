import { useState } from "react";

export const Create = () => {
  const [category, setCategory] = useState({
    name: "",
    products: [],
  });

  const [newProduct, setNewProduct] = useState({
    color: "",
    listPrice: 0,
    name: "",
    productNumber: "",
    size: 0,
    standardCost: 0,
    weight: 0,
  });

  const addProduct = () => {
    if (!newProduct.name || !newProduct.productNumber) {
      alert("Please fill out Product Name and Product Number.");
      return;
    }

    setCategory({
      ...category,
      products: [...category.products, newProduct],
    });

    setNewProduct({
      color: "",
      listPrice: 0,
      name: "",
      productNumber: "",
      size: 0,
      standardCost: 0,
      weight: 0,
    });
  };

  const handleCategoryChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const createCategory = (e) => {
    e.preventDefault();

    if (!category.name) {
      alert("Please fill out the category name.");
      return;
    }

    if (category.products.length > 0 && category.products.some((p) => !p.name || !p.productNumber)) {
      alert("Please ensure all added products have a name and product number.");
      return;
    }

    fetch("https://localhost:7115/ProductCategories", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(category),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(errorData => { throw new Error(errorData.message || `HTTP error! status: ${res.status}`); });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Category created successfully");
        clearAll();
      })
      .catch((error) => {
        alert("Error creating category: " + error.message);
      });
  };

  const clearAll = () => {
    setCategory({
      name: "",
      products: [],
    });
    setNewProduct({
      color: "",
      listPrice: 0,
      name: "",
      productNumber: "",
      size: 0,
      standardCost: 0,
      weight: 0,
    });
  };

  function editPro(o) {
    const productToEdit = category.products[o];
    setNewProduct(productToEdit);
    delPro(o);
  }

  function delPro(o) {
    const updatedProducts = category.products.filter((_, i) => i !== o);
    setCategory({
      ...category,
      products: updatedProducts,
    });
  }

  return (
    <div className="container my-4">
      <h1 className="text-center text-success mb-4">
        Create Product
      </h1>
      <form onSubmit={createCategory} className="p-4 bg-light shadow-sm rounded">
        <div className="row mb-3 align-items-end">
          <div className="col-md-8">
            <label htmlFor="categoryName" className="form-label fw-bold fs-6">
              Category Name
            </label>
            <input
              type="text"
              name="name"
              id="categoryName"
              value={category.name}
              onChange={handleCategoryChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Create Category
            </button>
          </div>
        </div>

        <h2 className="text-success mb-3 fs-5 text-center mt-4">
          Add New Product
        </h2>

        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="newProductNumber" className="form-label fw-bold fs-6">
              Product Number
            </label>
            <input
              type="text"
              id="newProductNumber"
              name="productNumber"
              value={newProduct.productNumber}
              onChange={handleNewProductChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="newSize" className="form-label fw-bold fs-6">
              Size
            </label>
            <input
              type="number"
              id="newSize"
              name="size"
              value={newProduct.size}
              onChange={handleNewProductChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="newWeight" className="form-label fw-bold fs-6">
              Weight
            </label>
            <input
              type="number"
              id="newWeight"
              name="weight"
              value={newProduct.weight}
              onChange={handleNewProductChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4">
            <label htmlFor="newColor" className="form-label fw-bold fs-6">
              Color
            </label>
            <input
              type="text"
              id="newColor"
              name="color"
              value={newProduct.color}
              onChange={handleNewProductChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="newListPrice" className="form-label fw-bold fs-6">
              List Price
            </label>
            <input
              type="number"
              id="newListPrice"
              name="listPrice"
              value={newProduct.listPrice}
              onChange={handleNewProductChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="newStandardCost" className="form-label fw-bold fs-6">
              Standard Cost
            </label>
            <input
              type="number"
              id="newStandardCost"
              name="standardCost"
              value={newProduct.standardCost}
              onChange={handleNewProductChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-4 align-items-end">
          <div className="col-md-8">
            <label htmlFor="newProductName" className="form-label fw-bold fs-6">
              Product Name
            </label>
            <input
              type="text"
              id="newProductName"
              name="name"
              value={newProduct.name}
              onChange={handleNewProductChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <button
              type="button"
              onClick={addProduct}
              className="btn btn-success w-100"
            >
              Add Product
            </button>
          </div>
        </div>

        {category.products.length > 0 ? (
          <div>
            <h3 className="text-center text-primary mb-3">Products in Category</h3>
            <div className="table-responsive">
              <table className="table table-bordered table-hover shadow-sm">
                <thead className="table-primary text-white text-center">
                  <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Product Number</th>
                    <th>List Price</th>
                    <th>Size</th>
                    <th>Standard Cost</th>
                    <th>Weight</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {category.products.map((v, o) => (
                    <tr key={o}>
                      <td className="text-center">{o + 1}</td>
                      <td className="text-center">{v.name}</td>
                      <td className="text-center">{v.color}</td>
                      <td className="text-center">{v.productNumber}</td>
                      <td className="text-center">{v.listPrice}</td>
                      <td className="text-center">{v.size}</td>
                      <td className="text-center">{v.standardCost}</td>
                      <td className="text-center">{v.weight}</td>
                      <td className="text-center">
                        <button
                          onClick={() => editPro(o)}
                          className="btn btn-primary btn-sm me-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => delPro(o)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-center text-muted fst-italic">
            Add products using the form above to see the list.
          </p>
        )}
      </form>
    </div>
  );
};