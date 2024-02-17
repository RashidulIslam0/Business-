import React from "react";
import "./video.css";

function VideoSection() {
  return (
    <>
      <div className="video-section">
        <section className="work">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img
                  src="https://i.vimeocdn.com/video/1459909987-29cf72457bd40c1735e9d7b64c6ff45b094c88a637461170ca59b0a076e05406-d?mw=600&mh=338"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 col-sm-12 work-right">
                <div className="top d-flex align-items-center p-6">
                  <img
                    src="/public/images/1f44b.svg"
                    alt=""
                    className="me-2"
                    style={{ width: "24px" }} // Adjust image width
                  />
                  <h6 className="work-head mb-0">👋 Why work with us?</h6>
                </div>

                <div className="col-md-12 col-sm-12">
                  <div className="video-right">
                    <div className="badges d-flex align-items-center ps-3 mt-2">
                      <img
                        className="imgas me-3"
                        src="https://winstarit.com/wp-content/uploads/2022/06/on-time.png"
                        alt=""
                        style={{ width: "24px" }} // Adjust image width
                      />
                      <p className="mb-0">Dedicated account manager</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="video-right">
                    <div className="badges d-flex align-items-center ps-3 mt-2">
                      <img
                        className="imgas me-3"
                        src="https://winstarit.com/wp-content/uploads/2022/06/on-time.png"
                        alt=""
                        style={{ width: "24px" }} // Adjust image width
                      />
                      <p className="mb-0">Dedicated account manager</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="video-right">
                    <div className="badges d-flex align-items-center ps-3 mt-2">
                      <img
                        className="imgas me-3"
                        src="https://winstarit.com/wp-content/uploads/2022/06/on-time.png"
                        alt=""
                        style={{ width: "24px" }} // Adjust image width
                      />
                      <p className="mb-0">Dedicated account manager</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="video-right">
                    <div className="badges d-flex align-items-center ps-3 mt-2">
                      <img
                        className="imgas me-3"
                        src="https://winstarit.com/wp-content/uploads/2022/06/on-time.png"
                        alt=""
                        style={{ width: "24px" }} // Adjust image width
                      />
                      <p className="mb-0">Dedicated account manager</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <div className="video-right  mb-4">
                    <div className="badges d-flex align-items-center ps-3 mt-2">
                      <img
                        className="imgas me-3"
                        src="https:/google.png"
                        alt=""
                        style={{ width: "24px" }} // Adjust image width
                      />
                      <p className="mb-0">Dedicated account manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default VideoSection;
