import React, { useEffect } from 'react'
import { Checkbox, Dropdown, Icon, Menu, Sticky } from 'semantic-ui-react'

import { useTheme } from '../contexts/ThemeContext'
import { cities } from '../services/Cities.js'
import { useCity } from '../contexts/CityContext'
import { useWeather } from '../contexts/WeatherContext'

export default function Navi() {

    const { currentCity, setCurrentCity } = useCity()
    const { theme, setTheme } = useTheme()
    const { weather, loding,  } = useWeather()


    useEffect(() => {


    }, [currentCity])

    const handleCatch = (event, { value }) => {

        var result = cities.find(x => x.value === value)

        setCurrentCity(result)

    }



    return (
        <Sticky >
            <Menu  className={`ui ${theme} menu`} style={{ paddingLeft: "240px", borderRadius: "0px", }}>
                    
              

                {loding && <Menu.Item>
                    <img alt="logo" src={`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`} />
                    {Math.floor(weather.data[0].min_temp)}°  :  {Math.floor(weather.data[0].max_temp)}° {currentCity?.text}
                </Menu.Item>}

                <Menu.Item position='right'>
                    <Dropdown
                        placeholder='Select City'
                        search
                        selection
                        options={cities}

                        onChange={handleCatch}
                    />
                </Menu.Item>
                <Menu.Item style={{ paddingRight: "240px" }}>
                    <Checkbox slider onChange={() => setTheme(theme === "inverted" ? "secondary" : "inverted")} />
                    {theme === "inverted" ? <Icon name="moon" size='large' style={{ marginLeft: "11px" }} /> : <Icon name="sun" color="yellow" size='large' style={{ marginLeft: "11px" }} />}

                </Menu.Item>
                </Menu>
           </Sticky> 
           

       

    )
}
