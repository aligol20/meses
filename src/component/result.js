import React, { Component } from 'react';
import {Content,
    Platform,
    StyleSheet,
    AsyncStorage,
    Text,
    View
} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import {Actions} from 'react-native-router-flux';
import {Button} from 'native-base';



export default class Result extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            r:0
        }

    }

    render(){
        console.log('saaaaaa');
        AsyncStorage.getItem('total',(err,store)=>{
            console.log(JSON.parse(store),'aqzzzzzzz');
            console.log(err,'sasasasas');
            this.setState({r:JSON.parse(store)})
        });
        return (
            <View style={{backgroundColor:'white',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
                <View>
                    <Text style={{width:190,alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:30,borderWidth:0,borderColor:'blue',paddingBottom:7,paddingTop:7,borderRadius:7}}>مجموع امتیاز کسب شده:</Text>
                <Text style={{width:190,alignItems:'center',justifyContent:'center',textAlign:'center',marginBottom:30,borderWidth:2,borderColor:'blue',paddingBottom:7,paddingTop:7,borderRadius:7}}>{Math.round(this.state.r)}</Text>
                </View>
                <View>
                <Button
                    style={{width:190,alignItems:'center',justifyContent:'center',marginBottom:30,backgroundColor:'yellow'}}
                    onPress={()=>{Actions.begin();AsyncStorage.clear()}}
                ><Text style={{color:'blue'}}>شروع مجدد</Text>
                </Button>
                    <Button
                        style={{width:190,alignItems:'center',justifyContent:'center',marginBottom:30,backgroundColor:'blue'}}

                        onPress={()=>{Actions.details();}}
                    >
                        <Text style={{color:'white'}}>جزییات</Text>
                    </Button>
                </View>

            </View>

        )
    }
}
module.export = Result;