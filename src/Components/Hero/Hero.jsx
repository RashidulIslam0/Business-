import React, { useState } from "react";
import "./hero.css";
import { Link } from "react-router-dom";
function Hero() {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with:", { name, countryCode, phoneNumber });
  };

  return (
    <>
      <section className="hero m-lg-5 p-5">
        <div className="container overflow-hidden">
          <div className="row  align-items-lg-center justify-content-lg-between">
            <div className="col-12 col-lg-6 pt-5  ">
              <h2 className="display-3 fw-bold mb-3">Art of Design</h2>
              <p className="fs-4 mb-5">
                Powerful, extensible, and feature-packed frontend toolkit. Build
                and customize with Sass, utilize prebuilt grid system and
                components, and bring projects to life with powerful JavaScript
                plugins.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <Link
                  to="/book"
                  type="button"
                  className="btn btn-primary bsb-btn-xl rounded-pill"
                >
                  Book A Call
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="container-fluid">
                <form className="mx-auto mt-5" onSubmit={handleSubmit}>
                  <h4 className="text-center">Login</h4>
                  <div className="">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="countryCode" className="form-label">
                      Country code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="countryCode"
                      placeholder="Enter Country code"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Enter Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary mt-5">
                    Find Out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
