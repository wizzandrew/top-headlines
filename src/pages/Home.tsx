import Tab from "../components/HomeTabComponent";

export default function Home() {
  return (
    <>
      <div className="holder" style={{ backgroundColor: "#B80000" }}>
        <div className="container">
          <div className="row">
            <Tab />
          </div>
        </div>
      </div>
      <div style={{ minHeight: "80vh" }}></div>
    </>
  );
}
