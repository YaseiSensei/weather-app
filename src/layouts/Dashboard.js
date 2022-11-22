import React, { useEffect } from 'react'
import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react'
import { useTheme } from '../contexts/ThemeContext'
import { useWeather } from '../contexts/WeatherContext'
import dateFormat, { masks } from "dateformat";


export default function Dashboard() {

    const { theme } = useTheme()
    const { weather, loding, setLoding } = useWeather()

    
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    
   const date=new Date()
     const currentDate=dateFormat(date,"yyyy-mm-dd")
    useEffect(() => {
        setTimeout(() => {
           
            
            setLoding(true)
        }, 2500);
    }, [weather])






    return (

        <Segment className={`ui  ${theme} `} style={{ paddingLeft: "200px", paddingRight: "200px", marginTop: "-1px", paddingTop: "110px", height: "630px", borderRadius: "0px" }}>
            <Grid   >
                <Grid.Row columns={7}>

                    {loding && weather.data.map((x, i) => <Grid.Column className={x.datetime === currentDate ?"teal":""} key={i}  style={{ paddingRight: "5px",paddingLeft:"5px" ,borderRadius:"5px"}}> <Card color='teal'> <Card.Content extra>
                        {gunler[new Date((x.datetime)).getDay()]}  </Card.Content> <Image style={{ backgroundColor: "" }} src={`https://www.weatherbit.io/static/img/icons/${x.weather.icon}.png`} wrapped ui={true} />
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
