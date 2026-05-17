export default function Article({ PersoName, email, age, Content="No Content" }) {
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
        <h1>{PersoName}</h1>
        <h2>{email}</h2>
        <h3>{age}</h3>

        <hr></hr>
        <p>{Content}</p>
      </div>
    </>
  );
}
