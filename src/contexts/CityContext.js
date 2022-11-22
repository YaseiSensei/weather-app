import { createContext, useContext, useEffect, useState } from 'react'

const CityContext = createContext();

export const CityProvider = ({ children }) => {
    const [currentCity, setCurrentCity] = useState({ key: 41, text: "Kocaeli", lat: 40.8533, lon: 29.8815, value: 41 })
    useEffect(() => {
    }, [])
    const values = {
        currentCity,
        setCurrentCity
    }
    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}
export const useCity = () => useContext(CityContext);
