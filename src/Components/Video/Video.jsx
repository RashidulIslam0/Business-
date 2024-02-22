// import React from "react";
// import "./video.css";

// function VideoSection() {
//   return (
//     <>
//       <div className="video-section p-5">
//         <section className="work">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 col-sm-12">
//                 <img
//                   src="https://i.vimeocdn.com/video/1459909987-29cf72457bd40c1735e9d7b64c6ff45b094c88a637461170ca59b0a076e05406-d?mw=600&mh=338"
//                   alt=""
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="col-md-6 col-sm-12 work-right ps-5  ">
//                 <div className="top d-flex align-items-center p-6">
//                   <img
//                     src="/public/images/1f44b.svg"
//                     alt=""
//                     className="me-2"
//                     style={{ width: "24px" }} // Adjust image width
//                   />
//                   <h6 className="work-head mb-0">👋 Why work with us?</h6>
//                 </div>

//                 <div className="col-md-12 col-sm-12 text-center">
//                   <div className="video-right">
//                     <div className="badges d-flex align-items-center ps-3 mt-2">
//                       <img
//                         className="imgas me-3"
//                         src="https://winstarit.com/wp-content/uploads/2022/06/on-time.png"
//                         alt=""
//                         style={{ width: "24px" }} // Adjust image width
//                       />
//                       <p className="mb-0">Dedicated account manager</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-12 col-sm-12">
//                   <div className="video-right">
//                     <div className="badges d-flex align-items-center ps-3 mt-2">
//                       <img
//                         className="imgas me-3"
//                         src="https://winstariczxczt.com/wp-content/uploads/2022/06/on-time.png"
//                         alt=""
//                         style={{ width: "24px" }} // Adjust image width
//                       />
//                       <p className="mb-0">Dhjgujyu account manager</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-12 col-sm-12">
//                   <div className="video-right">
//                     <div className="badges d-flex align-items-center ps-3 mt-2">
//                       <img
//                         className="imgas me-3"
//                         src="https://winstafdsfwerfrit.com/wp-content/uploads/2022/06/on-time.png"
//                         alt=""
//                         style={{ width: "24px" }} // Adjust image width
//                       />
//                       <p className="mb-0">Dsawqwefvedicated account manager</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-12 col-sm-12">
//                   <div className="video-right">
//                     <div className="badges d-flex align-items-center ps-3 mt-2">
//                       <img
//                         className="imgas me-3"
//                         src="https://winfsagretrestarit.com/wp-content/uploads/2022/06/on-time.png"
//                         alt=""
//                         style={{ width: "24px" }} // Adjust image width
//                       />
//                       <p className="mb-0">Deafwerwegvdicated account manager</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-12 col-sm-12">
//                   <div className="video-right  mb-4">
//                     <div className="badges d-flex align-items-center ps-3 mt-2">
//                       <img
//                         className="imgas me-3"
//                         src="https:/google.png"
//                         alt=""
//                         style={{ width: "24px" }} // Adjust image width
//                       />
//                       <p className="mb-0">sdfsdrtr account manager</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default VideoSection;

// import React from "react";
// import "./video.css";

// function VideoSection(props) {
//   return (
//     <>
//       <div className="video-section p-5">
//         <section className="work">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 col-sm-12">
//                 <iframe
//                   width="500"
//                   height="315"
//                   src={props.videoFile}
//                   // title="YouTube video player"
//                   frameborder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowfullscreen
//                 ></iframe>
//               </div>
//               <div className="col-md-6 col-sm-12 work-right ps-5  ">
//                 <div className="top d-flex align-items-center p-6">
//                   <img
//                     src={props.iconUrl}
//                     alt=""
//                     className="me-2"
//                     style={{ width: "24px" }}
//                   />
//                   <h6 className="work-head mb-0">{props.title}</h6>
//                 </div>

//                 {props.badges.map((badge, index) => (
//                   <div className="col-md-12 col-sm-12" key={index}>
//                     <div className="video-right">
//                       <div className="badges d-flex align-items-center ps-3 mt-2">
//                         <img
//                           className="imgas me-3"
//                           src={badge.imageUrl}
//                           alt=""
//                           style={{ width: "24px" }}
//                         />
//                         <p className="mb-0">{badge.text}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default VideoSection;

import React from "react";
import "./video.css";

function VideoSection(props) {
  return (
    <div className="video-section p-3">
      <section className="work">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
              <iframe
                width="500"
                height="315"
                src={props.videoFile}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-6 col-sm-12 ps-0">
              <div className="top d-flex ">
                <img
                  src={props.iconUrl}
                  alt=""
                  className="me-2"
                  style={{ width: "24px" }}
                />
                <h6 className="work-head mb-0">{props.title}</h6>
              </div>

              {props.badges.map((badge, index) => (
                <div className="col-6 col-md-12 mb-3" key={index}>
                  <div className="video-right">
                    <div className="col-md-12 col-sm-12 text-center">
                      <div className="t">
                        <div className="badges d-flex align-items-center ps-3 mt-2">
                          <img
                            className="imgas "
                            src={badge.imageUrl}
                            alt=""
                            style={{ width: "24px" }} // Adjust image width
                          />
                          <p className="mb-0">{badge.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoSection;
