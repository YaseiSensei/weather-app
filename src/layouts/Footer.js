import React from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
   
  } from 'semantic-ui-react'
import { useTheme } from '../contexts/ThemeContext'

export default function Footer() {
 const {theme}=useTheme()
    
  return (
    <Segment className={`ui  ${theme} `}  vertical style={{ padding: '5em 0em',marginTop:"-15px" }}>
    <Container style={{paddingLeft: "100px"}}>
      <Grid divided className={`  ${theme} `} >
        <Grid.Row>
          <Grid.Column  width={3}>
            <Header  className={`  ${theme} `} as='h4'  content='About' />
            <List className={`  ${theme} `} link >
              <List.Item as='a'>Lorem</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
              <List.Item as='a'>Ipsum</List.Item>
              <List.Item as='a'>Dolor</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header className={`ui  ${theme} `} as='h4' content='Services' />
            <List className={`  ${theme} `} link >
              <List.Item as='a'>Banana Pre-Order</List.Item>
              <List.Item as='a'>DNA FAQ</List.Item>
              <List.Item as='a'>How To Access</List.Item>
              <List.Item as='a'>Favorite X-Men</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header className={` ${theme} `} as='h4' >
              Footer Header
            </Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Laboriosam inventore a ea nemo reiciendis earum modi 
              ipsa minus harum, sint qui eaque sit aperiam assumenda quis ducimus. 
             
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
  )
}
