import React,{Component,PropsWithChildren} from "react";
import {Animated,StyleSheet,Text,View,I18Manager} from "react-native";

import  Swipeable, { RectButton } from "react-native-gesture-handler";
import {Todo} from "~/models/todo";

interface Props {
  todo: Todo;
  onToggle:()=> void;
  onDelete:()=> void;
}

export default class AppleStyleSwipeableRow extends Component<PropsWithChildren>>{
  private renderRightAction = {
    text: string,
    color: string,
    x:number,
    progress:Animated.AnimatedInterpolation<number> )=>{
      const trans = progress.interpolate({
        inputRange:[0,1],
        outputRange:[x,0],
      });

      const trans = progress.interpolate({
        inputRange: [0,1],
        outputRange: [x,0],
      });

      const pressHandler =()=>{
        if(text === "Done"|| text === "Undone"){
          this.props.onToggle();
        }else if(text === "Delete"){
          this.props.onDelete();
        }
      console.log(this.props);
      this.close();
      };

      return(
        <Animated.View style={{flex:1,transform:[{translateX:trans}]}}>
          <RectButton style={[styles.rightAction,{backgroundColor:color}]} onPress={pressHandler}>
            <Text style={styles.rightActionText}>{text}</Text>
          </RectButton>
        </Animated.View>
      );
      }
    
    private renderRightAction = (
      progress:Animated.AnimatedInterpolation<number>,
      _dragAnimatedValue:Animated.AnimatedInterpolation<number>
    )=>{
      <View style={{width:160,
      flexDirection:}}
    };
    private close = () => {
      this.swipeable.close();
    };

    render(){
      const {children} = this.props;
      return(
        <Swipeable
          ref={(c) => {
            this.swipeable = c;
          }}
          friction={2}
          leftThreshold={30}
          rightThreshold={40}
          renderRightActions={this.renderRightAction}
        >
          {this.props.children}
        </Swipeable>
      );
    }
  }

  const styles = StyleSheet.create({
    rightAction: {
      flex: 1,
      justifyContent: "center",
    },
    rightActionText: {
      color: "white",
      fontSize: 16,
      backgroundColor: "transparent",
      padding: 16,
    },
  });
