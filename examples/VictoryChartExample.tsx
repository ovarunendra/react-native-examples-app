//import liraries
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryArea,
  VictoryPie
} from 'victory-native';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

// create a component
class VictoryChartExample extends Component {
  static navigationOptions = {
    title: 'Victory Chart'
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <VictoryChart width={350} theme={VictoryTheme.material}>
            <VictoryBar data={data} x="quarter" y="earnings" />
          </VictoryChart>
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryArea
              style={{ data: { fill: '#c43a31' } }}
              data={[
                { x: 1, y: 2, y0: 0 },
                { x: 2, y: 3, y0: 1 },
                { x: 3, y: 5, y0: 1 },
                { x: 4, y: 4, y0: 2 },
                { x: 5, y: 6, y0: 2 }
              ]}
            />
          </VictoryChart>
          <VictoryPie
            colorScale={['gold', 'cyan', 'navy']}
            data={[
              { x: 'Cats', y: 35 },
              { x: 'Dogs', y: 40 },
              { x: 'Birds', y: 55 }
            ]}
          />
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  }
});

//make this component available to the app
export default VictoryChartExample;
