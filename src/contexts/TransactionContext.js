import React from "react";

// export const TransactionContext = React.createContext(null);

// function transaxtionReducer(state, action) {
//   switch (action.type) {
//     case "set": {
//       state.data = action.data;
//     }
//   }
// }

// function TransactionProvider({ children }) {
//   const [state, dispatch] = React.useReducer(transaxtionReducer, {});
//   const value = { state, dispatch };

//   return (
//     <TransactionContext.Provider value={value}>
//       {children}
//     </TransactionContext.Provider>
//   );
// }

// function useTransaction() {
//   const context = React.useContext(TransactionContext);
// }

export { TransactionProvider };
