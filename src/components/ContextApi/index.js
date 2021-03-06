import React, { Component, createContext, useState, useEffect } from "react";
import { Manager } from "socket.io-client";
var socket = window.io.connect("https://almondfxsocketapi.digixhub.com", {
  transports: ["websocket"],
});
export const Contx = createContext();

// export class ConProvider extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       socketData: [],
//     };
//   }
//   componentDidMount() {
//     this.socketCall();
//   }
//   componentDidUpdate() {
//     this.socketCall()
//   }
//   socketCall = async () => {
//     await socket.on("deals20211001", (data) => {
//       console.log(data);
//       this.setState({
//         socketData: data,
//       });
//     });
//   };
//   render() {
//     return (
//       <Contx.Provider
//         value={{
//           ...this.state,
//           socketData: this.state.socketData.dealsData,
//         }}>
//         {this.props.children}
//       </Contx.Provider>
//     );
//   }
// }

export const ConProvider = (props) => {
  const [socketData, setSocketData] = useState([]);
  let managerId = localStorage.getItem("managerId");
  useEffect(() => {
    socketCall();
  });
  const socketCall = () => {
    socket.on("deals2021" + managerId, (data) => {
      // console.log(data);
      setSocketData(data);
    });
  };
  return (
    <>
      <Contx.Provider
        value={{
          socketData: socketData.dealsData,
        }}>
        {props.children}
      </Contx.Provider>
    </>
  );
};
