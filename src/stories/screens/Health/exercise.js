import React, { Component, type Node } from 'react';
import styled from 'styled-components/native';
import Touchable from 'react-native-platform-touchable';
import Carousel from 'react-native-snap-carousel';
// $FlowFixMe
import { LinearGradient } from 'expo';

const Container = styled.View``;

// react-native-snap-carousel doesn't support setting different opacities
// for inactive items based on their distance from the active item, so we'll
// fake it here by fading the view in and out with gradients
const StartGradient = styled(LinearGradient).attrs({
  pointerEvents: 'none',
  colors: ['rgba(242, 242, 242, 0.6)', 'rgba(242, 242, 242, 0.6)', 'rgba(242, 242, 242, 0)'],
  start: [0, 0.8, 1],
  end: [1, 0.8, 1]
})`
  width: ${p => p.width + 10}px;
  height: ${p => p.width}px;
  position: absolute;
  top: 0;
  left: 0;
`;

const EndGradient = styled(LinearGradient).attrs({
  pointerEvents: 'none',
  colors: ['rgba(242, 242, 242, 0)', 'rgba(242, 242, 242, 0.6)', 'rgba(242, 242, 242, 0.6)'],
  start: [0, 0.8, 1],
  end: [1, 0.8, 1]
})`
  width: ${p => p.width + 10}px;
  height: ${p => p.width}px;
  position: absolute;
  top: 0;
  right: 0;
`;

// show a ring around the focused item
const FocusCircle = styled.View.attrs({ pointerEvents: 'none' })`
  position: absolute;
  top: 0;
  left: ${p => p.width * p.offset};
  bottom: 0;
  width: ${p => p.width};
  height: ${p => p.width};
  border-radius: ${p => p.width};
  border-color: white;
  border-width: 2;
`;

// when an item is touched, we should snap to it
const ItemWrapper = styled(Touchable).attrs({
  activeOpacity: 0.8,
  background: Touchable.SelectableBackgroundBorderless()
})`
  background-color: transparent;
  width: ${p => p.width}px;
  height: ${p => p.width}px;
  align-items: center;
  justify-content: center;
`;

type Props<T> = {
  onItemSelected: (item: T) => void,
  renderItem: (item: T) => Node,
  items: T[],
  initialItem: T,
  itemWidth: number,
  visibleItemCount: number
};

export default class HorizontalPicker extends Component<Props<*>, *> {
  carouselRef = null;
  props: Props<*>;

  static defaultProps = {
    itemWidth: 60,
    visibleItemCount: 5
  };

  moveToItem = (index: number) => {
    if (this.carouselRef) {
      this.carouselRef.snapToItem(index);
    }
  };

  onSnapToItem = (index: number) => {
    this.props.onItemSelected(this.props.items[index]);
  };

  renderItem = ({ item, index }: { item: *, index: number }) => {
    return (
      <ItemWrapper width={this.props.itemWidth} onPress={() => this.moveToItem(index)}>
        {this.props.renderItem(item)}
      </ItemWrapper>
    );
  };

  render() {
    const { items, initialItem, itemWidth, visibleItemCount } = this.props;
    return (
      <Container>
        <Carousel
          ref={ref => {
            this.carouselRef = ref;
          }}
          data={items}
          firstItem={items.indexOf(initialItem)}
          renderItem={this.renderItem}
          onSnapToItem={this.onSnapToItem}
          sliderWidth={visibleItemCount * itemWidth}
          itemWidth={itemWidth}
          activeSlideOffset={10}
          inactiveSlideScale={0.8}
          inactiveSlideShift={-16}
        />
        <StartGradient width={itemWidth} />
        <FocusCircle width={itemWidth} offset={(visibleItemCount - 1) / 2} />
        <EndGradient width={itemWidth} />
      </Container>
    );
  }
}
// import React, { Component } from "react";
// import {
//   AppRegistry,
//   Picker,
//   Platform,
//   StyleSheet,
//   TextInput,
//   View
// } from "react-native";

// const programmingLanguages = [
//   {
//     label: 'Java',
//     value: 'java',
//   },
//   {
//     label: 'JavaScript',
//     value: 'js',
//   },
//   {
//     label: 'Python',
//     value: 'python',
//   },
//   {
//     label: 'Ruby',
//     value: 'ruby',
//   },
//   {
//     label: 'C#',
//     value: 'csharp',
//   },
//   {
//     label: 'C++',
//     value: 'cpp',
//   },
//   {
//     label: 'C',
//     value: 'c',
//   },
//   {
//     label: 'Go',
//     value: 'go',
//   }
// ];

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text1: '',
//       text2: '',
//       language: '',
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.content}>
//           <Picker
//             selectedValue={this.state.language}
//             onValueChange={itemValue => this.setState({ language: itemValue })}>
//             {programmingLanguages.map((i, index) => (
//               <Picker.Item key={index} label={i.label} value={i.value} />
//             ))}
//           </Picker>
//         </View>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     marginLeft: 15,
//     marginRight: 15,
//     marginBottom: 5,
//     alignSelf: 'stretch',
//     justifyContent: 'center',
//   },
//   inputContainer: {
//     ...Platform.select({
//       ios: {
//         borderBottomColor: 'gray',
//         borderBottomWidth: 1,
//       },
//     }),
//   },
//   input: {
//     height: 40
//   }
// });

// import * as React from "react";
// import {
//   Container,
//   Text,
// } from "native-base";
// import { Image, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
// import MyHeader from "../Header";
// import Svg from "react-native-svg";
// import {
//     VictoryAxis,
//     VictoryChart,
//     VictoryGroup,
//     VictoryStack,
//     VictoryCandlestick,
//     VictoryErrorBar,
//     VictoryBar,
//     VictoryLine,
//     VictoryArea,
//     VictoryScatter,
//     VictoryTooltip,
//     VictoryZoomContainer,
//     VictoryVoronoiContainer,
//     VictorySelectionContainer,
//     VictoryBrushContainer,
//     VictoryCursorContainer,
//     VictoryPie,
//     VictoryLabel,
//     VictoryLegend,
//     createContainer
//   } from "victory-native";
//   import { VictoryTheme } from "victory-core";
// class Exercise extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <Container style={styles.container}>
//         <MyHeader {...this.props} />
//         <VictoryBar
//             data={[
//             {x: 1, y: 3, label: "Alpha"},
//             {x: 2, y: 4, label: "Bravo"},
//             {x: 3, y: 6, label: "Charlie"},
//             {x: 4, y: 3, label: "Delta"},
//             {x: 5, y: 7, label: "Echo"},
//             ]}
//             labelComponent={
//             <VictoryLabel angle={90} verticalAnchor="middle" textAnchor="end"/>
//             }
//         />
//       </Container>
//     );
//   }
// }
// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: "#FBFAFA",
//         flex: 1,
//     },
//     hilightBox: { 
//         borderWidth: 1,
//         borderRadius: 50,
//         backgroundColor: '#f0f5f5',
//         borderColor: '#fff',
//         marginTop: 10,
//         padding:5,
//     },
// 	headerText: {
// 		fontFamily: 'Prompt',
// 		fontSize: 18,
//         margin: 15,
//         marginBottom: 0
// 	},
// 	text: {
// 		fontFamily: 'Prompt',
//         fontSize: 20,
// 		textAlign: "center",
// 		color: '#001C64'
//     },
//     greyText: {
// 		fontFamily: 'Prompt',
//         fontSize: 15,
//         color: 'grey',
//         marginLeft: 15
//     },
//     TopSection: {
//         width: '90%',
//         alignSelf: 'center',
//         borderBottomWidth: 1/2,
//         borderColor: 'grey',
//         paddingBottom: 20
//     },
//     BottomSection: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 10
//     },
//     card: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '50%',
//         height: 150
//     }
// });
// export default App;
