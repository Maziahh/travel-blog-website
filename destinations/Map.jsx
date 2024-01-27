// // map.jsx

// import React, { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// const continents = [
//   { name: 'Singapore', lat: 1.3521, lng: 103.8198, page: '/Singapore',icon: '/singaporeflag.png' },
//   { name: 'Indonesia', lat: -0.7893, lng: 113.9213, page: '/Indonesia' },
//   { name: 'China (Shenzhen)', lat: 22.5431, lng: 114.0579, page: '/China/Shenzhen' },
//   { name: 'Perth (Australia)', lat: -31.9505, lng: 115.8605, page: '/Australia/Perth' },
//   { name: 'Malaysia', lat: 4.2105, lng: 101.9758, page: '/Malaysia' },
//   { name: 'Dubai', lat: 25.276987, lng: 55.296249, page: '/UnitedArabEmirates/Dubai' },
//   { name: 'United States (California)', lat: 36.7783, lng: -119.4179, page: '/UnitedStates/California' },


// ];

// const Map = () => {
//   const { push: pushRoute } = require('next/router');
  
//   useEffect(() => {
//     const loader = new Loader({
//       apiKey: "AIzaSyCF6qnWrpRpTUcr6Y3LJZA5luW4easKOos",
//       version: "weekly",
//     });

//     loader.load().then(() => {
//       const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 0, lng: 0 }, // Center of the world
//         zoom: 2,
//       });

//       continents.forEach(continent => {
//         const marker = new google.maps.Marker({
//           position: { lat: continent.lat, lng: continent.lng },
//           map,
//           title: continent.name,
//           icon: continent.icon ? {
//             url: continent.icon,
//             scaledSize: new google.maps.Size(40, 40), // Adjust the size of the custom icon
//           } : null, // Use the provided icon or default to the standard marker
//         });

//         const infowindow = new google.maps.InfoWindow({
//           content: `<div>${continent.name}</div>`,
//         });

//         marker.addListener("mouseover", () => {
//           infowindow.open(map, marker);
//         });

//         marker.addListener("mouseout", () => {
//           infowindow.close();
//         });

//         marker.addListener("click", () => {
//           // Use the router only on the client-side
//           if (typeof window !== 'undefined') {
//             pushRoute(continent.page);
//           }
//         });
//       });
//     });
//   }, []);

//   return (
//     <div
//       id="map"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "600px",
//         width: "80%", // Adjust the width as needed
//         margin: "0 auto", // Center horizontally
//         padding: "20px", // Add padding for a rectangular appearance
//         overflow: "auto",
//       }}
//     ></div>
//   );
// };

// export default Map;

// // map.jsx
// // import React, { useEffect } from "react";
// // import { Loader } from "@googlemaps/js-api-loader";
// // import { useRouter } from "next/router";

// // const continents = [
// //   { name: 'Singapore', lat: 1.3521, lng: 103.8198, page: '/Singapore', icon: '/singaporeflag.png' },
// //   { name: 'Indonesia', lat: -0.7893, lng: 113.9213, page: '/Indonesia' },
// //   { name: 'China (Shenzhen)', lat: 22.5431, lng: 114.0579, page: '/China/Shenzhen' },
// //   { name: 'Perth (Australia)', lat: -31.9505, lng: 115.8605, page: '/Australia/Perth' },
// //   { name: 'Malaysia', lat: 4.2105, lng: 101.9758, page: '/Malaysia' },
// //   { name: 'Dubai', lat: 25.276987, lng: 55.296249, page: '/UnitedArabEmirates/Dubai' },
// //   { name: 'United States (California)', lat: 36.7783, lng: -119.4179, page: '/UnitedStates/California' },
// // ];

// // const Map = () => {
// //   const router = useRouter();

// //   useEffect(() => {
// //     const loader = new Loader({
// //       apiKey: "AIzaSyCF6qnWrpRpTUcr6Y3LJZA5luW4easKOos",
// //       version: "weekly",
// //     });

// //     loader.load().then(() => {
// //       const map = new google.maps.Map(document.getElementById("map"), {
// //         center: { lat: 0, lng: 0 }, // Center of the world
// //         zoom: 2,
// //       });

// //       continents.forEach(continent => {
// //         const marker = new google.maps.Marker({
// //           position: { lat: continent.lat, lng: continent.lng },
// //           map,
// //           title: continent.name,
// //           icon: continent.icon ? {
// //             url: continent.icon,
// //             scaledSize: new google.maps.Size(40, 40), // Adjust the size of the custom icon
// //           } : null, // Use the provided icon or default to the standard marker
// //         });

// //         const infowindow = new google.maps.InfoWindow({
// //           content: `<div>${continent.name}</div>`,
// //         });

// //         marker.addListener("mouseover", () => {
// //           infowindow.open(map, marker);
// //         });

// //         marker.addListener("mouseout", () => {
// //           infowindow.close();
// //         });

// //         marker.addListener("click", () => {
// //           router.push(continent.page);
// //         });
// //       });
// //     });
// //   }, [router]);

// //   return (
// //     <div
// //       id="map"
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: "600px",
// //         width: "80%", // Adjust the width as needed
// //         margin: "0 auto", // Center horizontally
// //         padding: "20px", // Add padding for a rectangular appearance
// //         overflow: "auto",
// //       }}
// //     ></div>
// //   );
// // };

// // export default Map;

// map.jsx
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const continents = [
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, page: '/singapore', icon: '/singaporeflag.png' },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213, page: '/indonesia' },
  { name: 'China (Shenzhen)', lat: 22.5431, lng: 114.0579, page: '/china/shenzhen' },
  { name: 'Perth (Australia)', lat: -31.9505, lng: 115.8605, page: '/australia/perth' },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758, page: '/malaysia' },
  { name: 'Dubai', lat: 25.276987, lng: 55.296249, page: '/UnitedArabEmirates/Dubai' },
  { name: 'United States (California)', lat: 36.7783, lng: -119.4179, page: '/unitedStates/California' },
];

const Map = () => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCF6qnWrpRpTUcr6Y3LJZA5luW4easKOos",
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
      });

      continents.forEach(continent => {
        const marker = new google.maps.Marker({
          position: { lat: continent.lat, lng: continent.lng },
          map,
          title: continent.name,
        });

        const infowindow = new google.maps.InfoWindow({
          content: `<div>${continent.name}</div>`,
        });

        marker.addListener("mouseover", () => {
          infowindow.open(map, marker);
        });

        marker.addListener("mouseout", () => {
          infowindow.close();
        });

        marker.addListener("click", () => {
          window.location.href = continent.page; // Redirect to the specified page
        });
      });
    });
  }, []);

  return (
    <div
      id="map"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        width: "80%",
        margin: "0 auto",
        padding: "20px",
        overflow: "auto",
      }}
    ></div>
  );
};

export default Map;
