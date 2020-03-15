import React, {Component} from 'react';
import {
    AsyncStorage,
    Platform,
    StyleSheet,
    Text,
    View, ScrollView, Switch, Alert, TextInput
} from 'react-native';
import {CheckBox, Button, Container} from 'native-base'
import {Actions} from 'react-native-router-flux';

import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
const styles = StyleSheet.create({
    questionView: {
        borderWidth: 0,
        borderColor: '#19B5FE',
        flexDirection: 'row',
        width: '99%',
        backgroundColor: 'white',
        marginBottom: 7,
        marginRight: 7,
        padding: 7,
        borderRadius: 7
    },
    radioButton: {width: '100%', marginRight: 30}
});


export default class ShoulderMobility extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 85,
            scoreList: [],
            switchStates: [
                0,
                0,
                0,
                0,
                0,
                0,


            ],
            total:0,

        };

    }
    componentDidMount(){
        AsyncStorage.getItem('total',(err,store)=>{
            console.log(JSON.parse(store),'qqq');
            this.setState({total:JSON.parse(store)})
        })
    }
    calculateScore() {
        this.setState({score: 85});
        let rfr = this.state.switchStates;
        let ddd = this.state.score;
        let fff = 0
        let avg1 = (parseInt(this.state.switchStates[0]) + parseInt(this.state.switchStates[1]) +parseInt(this.state.switchStates[2])) / 3;
        let avg2 = (parseInt(this.state.switchStates[3])+parseInt(this.state.switchStates[4])+parseInt(this.state.switchStates[5])) / 3;

        fff = 50-avg2 + 50-avg1;
        console.log(avg1, 'slksdklkdls');
        this.setState({switchStates:rfr});
        AsyncStorage.setItem('sm',JSON.stringify(rfr));
        let uuu = fff+ this.state.total;
        AsyncStorage.setItem('total',JSON.stringify(uuu));
        AsyncStorage.setItem('smS',JSON.stringify(Math.round(fff)));

        Alert.alert(
            'امتیاز این بخش:'+Math.round(fff) ,
            ' به مرحله بعد می روید؟',
            [
                {
                    text: 'بله', onPress: () => {
                    AsyncStorage.setItem('totalScore', JSON.stringify(fff));
                    Actions.trunkspu()
                }
                },
                {text: 'خیر', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

            ],
            {cancelable: false}
        );

    }

    inputs(id) {
        let trt = this.state.switchStates;
        console.log(trt,'dffffff');

        return (


            <TextInput
                keyboardType={'numeric'}

                onChangeText={(value) => {
                    trt[id] = value, this.setState({switchStates: trt})
                    console.log(trt[id],'kdkkdkdkd')
                }}


                style={{marginRight: 3, backgroundColor: 'white', width: '100%'}}/>




        )
    }

    render() {

        let trt = this.state.switchStates;
        return (
            <Container>


                <ScrollView >
                    <View style={{alignItems: 'center', flex: 1, margin: 10,}}>
                        <View style={styles.questionView}>

                            <View style={{
                                width: '30%',

                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginRight: 3,
                                marginBottom: 10,
                                marginTop: 10
                            }}>
                                <Text style={{
                                    marginBottom: 5,
                                    textAlign: 'center',
                                    width: '100%',
                                    backgroundColor: 'white'
                                }}> مرحله
                                    سوم:</Text>
                                {this.inputs(0)}
                            </View>
                            <View style={{
                                width: '30%',

                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginRight: 3,
                                marginBottom: 10,
                                marginTop: 10
                            }}>
                                <Text style={{
                                    marginBottom: 5,
                                    textAlign: 'center',
                                    width: '100%',
                                    backgroundColor: 'white'
                                }}> مرحله
                                    دوم:</Text>
                                {this.inputs(1)}
                            </View>
                            <View style={{
                                width: '30%',

                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginRight: 3,
                                marginBottom: 10,
                                marginTop: 10
                            }}>
                                <Text style={{
                                    marginBottom: 5,
                                    textAlign: 'center',
                                    width: '100%',
                                    backgroundColor: 'white'
                                }}> مرحله
                                    اول:</Text>
                                {this.inputs(2)}
                            </View>
                            <Text style={{textAlign: 'right'}}>چپ</Text>


                        </View>
                        <View style={styles.questionView}>
                            <View style={{
                                width: '30%',

                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginRight: 3,
                                marginBottom: 10,
                                marginTop: 10
                            }}>
                                <Text style={{
                                    marginBottom: 5,
                                    textAlign: 'center',
                                    width: '100%',
                                    backgroundColor: 'white'
                                }}> مرحله
                                    سوم:</Text>
                                {this.inputs(3)}
                            </View>
                            <View style={{
                                width: '30%',

                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginRight: 3,
                                marginBottom: 10,
                                marginTop: 10
                            }}>
                                <Text style={{
                                    marginBottom: 5,
                                    textAlign: 'center',
                                    width: '100%',
                                    backgroundColor: 'white'
                                }}> مرحله
                                    دوم:</Text>
                                {this.inputs(4)}
                            </View>
                            <View style={{
                                width: '30%',

                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                marginRight: 3,
                                marginBottom: 10,
                                marginTop: 10
                            }}>
                                <Text style={{
                                    marginBottom: 5,
                                    textAlign: 'center',
                                    width: '100%',
                                    backgroundColor: 'white'
                                }}> مرحله
                                    اول:</Text>
                                {this.inputs(5)}
                            </View>
                            <Text style={{textAlign: 'right'}}>راست</Text>

                        </View>

                    </View>

                </ScrollView>
                <Button
                    onPress={() => this.calculateScore()}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        borderRadius: 0,
                        height: 50,
                        backgroundColor: 'blue'
                    }}
                >
                    <Text style={{color: 'white'}}>مرحله بعد</Text>
                </Button>
            </Container>



        )
    }
}
module.export = ShoulderMobility;