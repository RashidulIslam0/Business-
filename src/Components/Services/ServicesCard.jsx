import React from "react";
import "./servicesCard.css";
import { Link } from "react-router-dom";

function ServicesCard(props) {
  return (
    <div>
      <section className="sections services-sectionnn" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="sections-title">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Mapping through features props */}
            {props.features.map((feature, index) => (
              <div key={index} className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <Link to={feature.link}>
                    <div className="icon">
                      <i className={`fa ${feature.icon}`} />
                    </div>
                    <div className="feature-content">
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesCard;

// import React from "react";
// import "./servicesCard.css";
// import { Link } from "react-router-dom";

// function ServicesCard({ services }) {
//   return (
//     <div>
//       <section className="sections services-sectionnn" id="services">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 col-sm-6">
//               <div className="sections-title">
//                 <h2>What I Do</h2>
//                 <p>
//                   I design and develop services for customers of all sizes,
//                   specializing in creating stylish, modern websites
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {services.map((service, index) => (
//               <div key={index} className="col-sm-6 col-lg-4">
//                 <div className="feature-box-1">
//                   <Link to={service.link}>
//                     <div className="icon">
//                       <i className={`fa ${service.icon}`} />
//                     </div>
//                     <div className="feature-content">
//                       <h5>{service.title}</h5>
//                       <p>{service.description}</p>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ServicesCard;
