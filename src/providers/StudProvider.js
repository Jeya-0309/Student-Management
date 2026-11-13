import { createContext, useState } from "react";

const StudContext = createContext();

function StudProvider({ children }) {

    const [studList, setStudList] = useState([
        { id: 1, studName: "Jeya priya", favStud: false },
        { id: 2, studName: "Krishna Veni", favStud: false },
        { id: 3, studName: "Poorni", favStud: false },
        { id: 4, studName: "Padmavathi", favStud: false },
        { id: 5, studName: "Deepa", favStud: false },
         { id: 6, studName: "Apoorva", favStud: false },
    ]);

    return (
        <StudContext.Provider value={{ studList, setStudList }}>
            {children}
        </StudContext.Provider>
    );
}

export default StudProvider;
export { StudContext };