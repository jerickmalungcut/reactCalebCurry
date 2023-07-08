import { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [username, setUserName] = useState("Jerick");

  return (
    <AppContext.Provider value={{ username, setUserName }}>
      <div>
        {username}
        <Child />
      </div>
    </AppContext.Provider>
  );
};

export const Child = () => {
  return <Grandchild />;
};

export const Grandchild = () => {
  const { setUserName } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          setUserName("JerickRobert");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

// import { useState, createContext, useContext } from "react";

// const AppContext = createContext(null);

// export const Parent = () => {
//   const [username, setUserName] = useState("Jerick");

//   return (
//     <AppContext.Provider value={{username, setUserName}}>
//       <div>
//         {username}
//         <Child setUserName={setUserName} />
//       </div>
//     </AppContext.Provider>
//   );
// };

// export const Child = ({ setUserName }) => {
//   return <Grandchild setUserName={setUserName} />;
// };

// export const Grandchild = ({ setUserName }) => {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setUserName("JerickRobert");
//         }}
//       >
//         Click Me
//       </button>
//     </div>
//   );
// };
