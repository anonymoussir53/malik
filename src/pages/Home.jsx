import React from "react";
import { Link } from "react-router-dom";
import test from "../assets/mainlogo.png";
import { useNavigate } from "react-router-dom";
import url from "../assets/config"
const Home = () => {
  const navigate = useNavigate();
  




 
  

  const handleClick = () => {
  
    navigate("/validation");
  };
  return (
    <>
      <div
        className="container-fluid border-0 p-0"
        style={{ background: "#F5F6F6" }}
      >
        <div className="container border-0 py-1 p-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/contactvehicleapp-7d7a0.appspot.com/o/svg-image-1.svg?alt=media&token=fd376762-b836-495d-abdf-71b58a2cecae"
            
            alt="logo"
            style={{ width: "6rem", height: "6rem" }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="col-sm-6 mt-5 ms-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/contactvehicleapp-7d7a0.appspot.com/o/secondtick.png?alt=media&token=72a304b3-4767-4306-917d-4181f6b576af"

            alt="meta"
            style={{ width: "4rem", height: "4rem" }}
          />
          <h1 className="my-3 fs-1">
            Become <br /> Meta Verified
          </h1>

          {/* Add 3 more spaces (adjust the marginBottom value as needed) */}
          <div style={{ marginBottom: "30px" }}></div>

          <button
            style={{
              background: "#0064e0",
              borderRadius: "100px",
              padding: "10px 35px",
              color:"white",
              border:"none"
            }}
            onClick={handleClick}
          >
            Apply
          </button>

          {/* <Link
            // to={{
            //   pathname: "/validation", // URL to navigate to
            //   state: { data: dataToSend}, // Data to pass
            // }}
            onClick={handleClick}
            className="border-0 text-white text-decoration-none"
            style={{
              background: "#0064e0",
              borderRadius: "100px",
              padding: "10px 35px",
            }}
          >
            Apply
          </Link> */}

          <p style={{ fontSize: "18px" }} className="mt-4">
            Grow your social presence with Meta Verified – a new subscription{" "}
            <br />
            bundle available for creators and businesses on Instagram and <br />
            Facebook.
          </p>

          <p className="py-3" style={{ fontSize: "17px" }}>
            Sign up now for creators
          </p>

          <p className="mt-4 mb-0">
            <span className="fw-semibold">Are you a business?</span> Get more
            information on
          </p>
          <Link style={{ fontSize: "14px" }}>Meta verified for businesses</Link>

          <p className="mt-4 font-italic" style={{ fontSize: "13px" }}>
            Features, availability, and pricing may vary by region.
          </p>
        </div>

        <div
          className="col-sm-5 d-none d-sm-block img-smal order-2 img-fluid"
          /* Show on larger screens */
          style={{
            backgroundImage: `url(${test})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
