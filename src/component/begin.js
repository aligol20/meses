import React, { Component } from 'react';
import {Content,
    Platform,
    StyleSheet,
    Text,
    View,TextInput,ScrollView,AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Button} from 'native-base';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


const styles = StyleSheet.create({
    ready: {width:'90%',height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#3A539B'},
    empty: {width:'90%',height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#67809F'},
});
export default class Begin extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name:'',
            family:'',
            age:'',
            sex:'',
            tall:'',
            weight:'',
            resume:'',
            betterHand:'',
            betterFoot:'',
        }
    }
    setInfo(){
        let yt=[];
        yt.push({name:this.state.name,
        family:this.state.family,
        age:this.state.age,
        sex:this.state.sex,
            tall:this.state.tall,
        weight:this.state.weight,
        resume:this.state.resume,
        betterHand:this.state.betterHand,
        betterFoot:this.state.betterFoot});
        AsyncStorage.setItem('info',JSON.stringify(yt));
        AsyncStorage.setItem('total',JSON.stringify(0));
        Actions.asl();

    }
    render(){
        return (
            <ScrollView style={{backgroundColor:'rgba(255, 255, 255, 1.0)'}}>
            <View style={{width:'100%',height:'100%',backgroundColor:'white',marginTop:10
                ,alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
                <View style={{flexDirection:'row',}}>
                <TextInput
                    style={{color:'black',borderWidth:0,borderColor:'#3A539B',width:'50%',borderRadius:7,height:50,marginBottom:20}}
                onChangeText={(value)=>this.setState({name:value})}>
                </TextInput>
                    <Text style={{color:'#3A539B',width:100,textAlign:'center',fontsize:23}}>نام:</Text>

                </View>
                <View style={{flexDirection:'row'}}>
                <TextInput
                    style={{color:'black',borderWidth:0,borderColor:'#3A539B',width:'50%',borderRadius:7,height:50,marginBottom:20}}

                    onChangeText={(value)=>this.setState({family:value})}>
                </TextInput>
                    <Text style={{color:'#3A539B',width:100,textAlign:'center',fontsize:23}}>نام خانوادگی:</Text>

                </View>
                <View style={{flexDirection:'row'}}>
                <TextInput
                    style={{color:'black',borderWidth:0,borderColor:'#3A539B',width:'50%',borderRadius:7,height:50,marginBottom:20}}
                    keyboardType={'numeric'}

                    onChangeText={(value)=>this.setState({age:value})}>
                </TextInput>
                    <Text style={{color:'#3A539B',width:100,textAlign:'center',fontsize:23}}>سن:</Text>

                </View>
                <View style={{flexDirection:'row'}}>
                <TextInput
                    style={{color:'black',borderWidth:0,borderColor:'#3A539B',width:'50%',borderRadius:7,height:50,marginBottom:20}}
                    keyboardType={'numeric'}

                    onChangeText={(value)=>this.setState({weight:value})}>
                </TextInput>
                    <Text style={{color:'#3A539B',width:100,textAlign:'center',fontsize:23}}>وزن:</Text>

                </View>
                <View style={{flexDirection:'row'}}>
                <TextInput
                    style={{color:'black',borderWidth:0,borderColor:'#3A539B',width:'50%',borderRadius:7,height:50,marginBottom:20}}
                    keyboardType={'numeric'}

                    onChangeText={(value)=>this.setState({tall:value})}>
                </TextInput>
                    <Text style={{color:'#3A539B',width:100,textAlign:'center',fontsize:23}}>قد:</Text>

                </View>
                <View style={{flexDirection:'row'}}>
                <TextInput
                    style={{color:'black',borderWidth:0,borderColor:'#3A539B',width:'50%',borderRadius:7,height:50,marginBottom:20}}
                    keyboardType={'numeric'}

                    onChangeText={(value)=>this.setState({resume:value})}>
                </TextInput>
                    <Text style={{color:'#3A539B',width:100,textAlign:'center',fontsize:23}}>سابقه فعالیت:</Text>

                </View>
                <View style={{flexDirection:'row'}}>

                <RadioGroup
                    color='#3A539B'

                    size={23}
                    style={{flexDirection:'row',width:'50%',justifyContent:'center',alignItems:'center',marginBottom:20}}
                    onSelect = {(index, value) => {this.setState({sex:value})}}>
                    <RadioButton
                        value= 'خانوم'
                        color='#3A539B'
                    >
                        <Text style={{color:'#3A539B'}}>خانوم</Text>
                    </RadioButton>
                    <RadioButton

                        value='آقا'
                        color='#3A539B'
                    >
                        <Text style={{color:'#3A539B'}}>آقا</Text>
                    </RadioButton>

                </RadioGroup>
                    <Text style={{color:'#3A539B',width:100,textAlign:'center',fontsize:23}}>جنسیت:</Text>

                </View>
                <View style={{flexDirection:'row'}}>

                <RadioGroup
                    color='#3A539B'

                    size={23}
                    style={{flexDirection:'row',width:'50%',justifyContent:'center',alignItems:'center',marginBottom:20}}
                    onSelect = {(index, value) => {this.setState({betterHand:value})}}>
                    <RadioButton
                        value= 'راست'
                        color='#3A539B'
                    >
                        <Text style={{color:'#3A539B'}}>راست</Text>
                    </RadioButton>
                    <RadioButton

                        value='چپ'
                        color='#3A539B'
                    >
                        <Text style={{color:'#3A539B'}}>چپ</Text>
                    </RadioButton>

                </RadioGroup>
                    <Text style={{color:'#3A539B',width:100,textAlign:'center',fontsize:23}}>دست برتر:</Text>

                </View>
                <View style={{flexDirection:'row'}}>

                <RadioGroup
                    color='#3A539B'

                    size={23}
                    style={{flexDirection:'row',width:'50%',justifyContent:'center',alignItems:'center',marginBottom:20}}
                    onSelect = {(index, value) => {this.setState({betterFoot:value})}}>
                    <RadioButton
                        value= 'راست'
                        color='#3A539B'
                    >
                        <Text style={{color:'#3A539B'}}>راست</Text>
                    </RadioButton>
                    <RadioButton

                        value='چپ'
                        color='#3A539B'
                    >
                        <Text style={{color:'#3A539B'}}>چپ</Text>
                    </RadioButton>

                </RadioGroup>
                    <Text style={{color:'#3A539B',width:100,textAlign:'center',fontsize:23}}>پای برتر:</Text>

                </View>
                <View>
                    <Button
                        style={this.state.name!=='' &&
                                this.state.family!==''&&
                                this.state.age!==''&&
                                this.state.sex!==''&&
                                this.state.betterFoot!==''&&
                                this.state.betterHand!==''&&
                                this.state.resume!==''&&
                                this.state.tall!==''&&
                                this.state.weight!==''?
                        styles.ready:styles.empty}
                        onPress={()=>this.state.name!=='' &&
                        this.state.family!==''&&
                        this.state.age!==''&&
                        this.state.sex!==''&&
                        this.state.betterFoot!==''&&
                        this.state.betterHand!==''&&
                        this.state.resume!==''&&
                        this.state.tall!==''&&
                        this.state.weight!==''?
                            this.setInfo(): alert('اطلاعات وارد شده کامل نیست')}
                    ><Text style={{width:'100%',color:'white',textAlign:'center'}}>شروع تست</Text>
                    </Button>
                </View>

            </View>
            </ScrollView>

        )
    }
}
module.export = Begin;