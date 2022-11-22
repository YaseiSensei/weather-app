import React, { useEffect, useState } from 'react'
import { Card, Grid, Icon, Image, Segment, Dimmer, GridColumn } from 'semantic-ui-react'
import { useTheme } from '../contexts/ThemeContext'
import { useWeather } from '../contexts/WeatherContext'


export default function Dashboard() {

    const { theme } = useTheme()
    const { weather, loding, setLoding } = useWeather()




    useEffect(() => {
        setTimeout(() => {
            console.log(weather);
            setLoding(true)
        }, 2500);
    }, [weather])






    return (

        <Segment className={`ui  ${theme} `} style={{ paddingLeft: "200px", paddingRight: "200px", marginTop: "-1px", paddingTop: "110px", height: "400px", borderRadius: "0px" }}>
            <Grid   >
                <Grid.Row columns={7}>

                    {loding && weather.data.map((x, i) => <Grid.Column style={{ paddingRight: "0px", }}> <Card color='red'> <Card.Content extra>
                        {x.datetime}  </Card.Content> <Image style={{ backgroundColor: "teal" }} src={`https://www.weatherbit.io/static/img/icons/${x.weather.icon}.png`} wrapped ui={true} />
                        <Card.Content> <Card.Header>{Math.floor(x.min_temp)}°  :  {Math.floor(x.max_temp)}° <Icon color='red' disabled name='thermometer' />  </Card.Header>

                            <Card.Description textAlign='right'  >
                                {x.weather.description}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    </Grid.Column>)}



                </Grid.Row>
            </Grid>
        </Segment>
    )
}
