import React, { Fragment } from 'react';

import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';

const Refresh = ({ refresh }) => null;
const Tip = ({ tip }) => null;



const App = () => (
  <Container>
    <Header androidStatusBarColor="#FFFAFA" style={styles.header} hasTabs>
      
      <Body>
        <Title>LoremIpsum</Title>
      </Body>
    </Header>
    <View style={styles.container}>
    <Tabs>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="refresh" /></TabHeading>}>
        <Refresh refresh={refresh}/>
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="tip" /></TabHeading>}>
        <Tip tip={tip}/>
      </Tab>
    </Tabs>
    </View>
  </Container>
);
export default App;
