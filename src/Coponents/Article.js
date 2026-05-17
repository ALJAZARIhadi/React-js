export default function Article({
  PersonName,
  email,
  age,
  Content = "No Content",
  children,
}) {
  return (
    <>
      {/* This means <div><div/> */}
      <div
        style={{
          background: "white",
          boxShadow: "0px 10px 10px gray",
          color: "black",
          marginBottom: "10px",
        }}
      >
        <h1>{PersonName}</h1>
        <h2>{email}</h2>
        <h3>{age}</h3>

        <hr></hr>
        <p>{children}</p>
      </div>
    </>
  );
}
