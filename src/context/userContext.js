import React, { createContext, useState } from 'react';

// 1️⃣ Crear contexto
export const UserContext = createContext();

// 2️⃣ Crear proveedor de contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Aquí se guarda el usuario logueado

    const login = (userData) => {
        // Guardamos info del usuario (puede venir de login real o simulado)
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
