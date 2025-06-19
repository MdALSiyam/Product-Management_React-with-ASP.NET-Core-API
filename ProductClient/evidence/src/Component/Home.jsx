export function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h2
        style={{
          color: "#333",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Welcome to Product Management
      </h2>
    </div>
  );
}
