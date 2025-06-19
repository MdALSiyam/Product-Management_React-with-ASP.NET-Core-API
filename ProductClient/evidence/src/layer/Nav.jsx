import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav
      style={{ backgroundColor: "DarkCyan", padding: "10px", width: "100%" }}
    >
      <menu
        style={{
          listStyleType: "none",
          padding: "0",
          margin: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li
          style={{
            margin: "0 15px",
            display: "inline-block",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "18px",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "color 0.3s, background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#333"; // Change text color on hover
              e.target.style.backgroundColor = "#fff"; // Change background on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#fff"; // Revert text color when not hovering
              e.target.style.backgroundColor = "transparent"; // Revert background when not hovering
            }}
          >
            Home
          </Link>
        </li>
        <li
          style={{
            margin: "0 15px",
            display: "inline-block",
          }}
        >
          <Link
            to="/product"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "18px",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "color 0.3s, background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#333"; // Change text color on hover
              e.target.style.backgroundColor = "#fff"; // Change background on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#fff"; // Revert text color when not hovering
              e.target.style.backgroundColor = "transparent"; // Revert background when not hovering
            }}
          >
            Product List
          </Link>
        </li>
        <li
          style={{
            margin: "0 15px",
            display: "inline-block",
          }}
        >
          <Link
            to="/product/add"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "18px",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "color 0.3s, background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#333"; // Change text color on hover
              e.target.style.backgroundColor = "#fff"; // Change background on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#fff"; // Revert text color when not hovering
              e.target.style.backgroundColor = "transparent"; // Revert background when not hovering
            }}
          >
            Create Product
          </Link>
        </li>
      </menu>
    </nav>
  );
}
