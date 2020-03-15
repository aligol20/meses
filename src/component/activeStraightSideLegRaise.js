import React, {Component} from 'react';
import {
    AsyncStorage,
    Platform,
    StyleSheet,
    Text,
    View, ScrollView, Switch, Alert, TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {CheckBox, Button, Container} from 'native-base'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

const styles = StyleSheet.create({
    questionView: {
        borderColor: '#19B5FE',
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 7,
        marginRight: 7,
        padding: 7,
        width: '100%',
        height:"90%"
    },
    radioButton: {width: '100%', marginRight: 30}
});
export default class ActiveStraightSideLegRaise extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 100,
            scoreList: [],
            total:0,
            switchStates2: [
                {shadow: 0, angle: 0, score: 0},
                {shadow: 0, angle: 0, score: 0},
                {shadow: 0, angle: 0, score: 0},
                {shadow: 0, angle: 0, score: 0},
                {shadow: 0, angle: 0, score: 0},
                {shadow: 0, angle: 0, score: 0},


            ],
            leftLenght: 0,
            rightLenght: 0,

        };

    }
    componentDidMount(){
        AsyncStorage.getItem('total',(err,store)=>{
            console.log(JSON.parse(store),'qqq');
            this.setState({total:JSON.parse(store)})
        })
    }
    calculate(){
        let k =this.state.switchStates2;
        const s1=k[0].score;
        const s2=k[1].score;
        const s3=k[2].score;
        const avg1 = (parseInt(s1)+parseInt(s2)+parseInt(s3))/3;
        const avg2 = (parseInt(k[3].score)+parseInt(k[4].score)+parseInt(k[5].score))/3;
        this.setState({score: 100});
        console.log(avg1, 'slksdklkdls');
        let fff = 0;
        let rrr= 0;


        fff=100-(avg1+avg2);
        let yyy= fff + this.state.total
        this.setState({switchStates2:k});
        AsyncStorage.setItem('assl',JSON.stringify(k));
        AsyncStorage.setItem('total',JSON.stringify(yyy));
        AsyncStorage.setItem('asslS',JSON.stringify(Math.round(fff)));

        Alert.alert(
            'امتیاز این بخش:'+Math.round(fff),
            ' به مرحله بعد می روید؟',
            [
                {text: 'بله', onPress: () => {
                    AsyncStorage.setItem('totalScore', JSON.stringify(fff));
                    Actions.ds() }
                },
                {text: 'خیر', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

            ],
            {cancelable: false}
        );

    }
    calculateThings(value, id, side) {
        console.log(value, id, side, 'saqwsaqw');

        let trt = this.state.switchStates2;
        let lenghtR = this.state.rightLenght;
        let lenghtL = this.state.leftLenght;
        if (side === 'l') {
            let arccc = value / lenghtL;
            const a = Math.acos(arccc);

            if (parseInt(value)>lenghtL) {
                let ff = parseInt(value) - lenghtL;
                const b = Math.acos(ff/lenghtL);
                trt[id].angle = Math.round(180 - b * 180.0 / Math.PI);
                this.setState({switchStates2: trt})
            }else {
                trt[id].angle = Math.round(a * 180.0 / Math.PI);
                this.setState({switchStates2: trt})
            }
            if(value===lenghtL){
                trt[id].angle = 90;
                trt[id].side = 'left';
                console.log('nananana',value,lenghtL);


                this.setState({switchStates2: trt})
            }

        }
        if (side === 'r') {

            let arc = value / lenghtR;
            const a = Math.asin(arc);
            if (parseInt(value)>lenghtR) {
                let ff = value - lenghtR;
                const b = Math.acos(ff/lenghtR);
                trt[id].angle = Math.round(180 - b * 180.0 / Math.PI);
                this.setState({switchStates2: trt})
            }else {
                trt[id].angle = Math.round(a * 180.0 / Math.PI);
                this.setState({switchStates2: trt});
            }
            if(value===lenghtL){
                trt[id].angle = 90;
                trt[id].side = 'right';


                this.setState({switchStates2: trt})
            }


        }
        trt[id].shadow = value;
        this.setState({switchStates2: trt})

    }

    inputs(id, side) {
        let trt = this.state.switchStates2;

        return (
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>


                <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
                    <TextInput
                        keyboardType={'numeric'}

                        onChangeText={(value) => {
                            console.log(value, 'saqwsaqw');
                            this.calculateThings(value, id, side)
                        }
                        }


                        style={{marginRight: 3, backgroundColor: 'white'}}/>
                    <Text>طول سایه پا</Text>

                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
                    <Text
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            marginRight: 3,
                            color:'green',
                            backgroundColor: 'white',
                            borderRadius: 2,
                            width: '45%',
                            height: 30,
                            borderWidth: 0,
                            borderColor: '#52B3D9'
                        }}>{trt[id].angle}</Text>
                    <Text style={{width: '45%'}}>زاویه</Text>

                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
                    <TextInput
                        keyboardType={'numeric'}

                        onChangeText={(value) => {
                            parseInt(value)>50 ? alert('مقادیر وارد شده صحیح نیست'):
                            trt[id].score = value
                            this.setState({switchStates2:trt})
                        }
                        }


                        style={{marginRight: 3, backgroundColor: 'white'}}/>
                    <Text style={{width: '45%'}}>نمره</Text>

                </View>


            </View>
        )
    }

    render() {
        return (
            <ScrollView >

            <Container>
                <View style={styles.questionView}>

                    <Text>سمت چپ:</Text>
                    <View style={{
                        marginBottom: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: 50,
                        borderRadius: 5,
                        borderWidth: 0,
                        borderColor: '#336E7B',
                        flexDirection: 'row'
                    }}>
                        <TextInput
                            keyboardType={'numeric'}

                            onChangeText={(value) => this.setState({leftLenght: value})
                            }


                            style={{marginRight: 3, backgroundColor: 'white', width: 40}}/>
                        <Text>طول پای آزمودنی از asis تا قوزک خارجی پا:</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',borderWidth:2,borderRadius:7,borderColor:'blue'}}>
                        <View style={{
                            width: '31%',

                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginRight: 3,
                            marginBottom: 10,
                            marginTop: 10
                        }}>
                            <Text
                                style={{marginBottom: 5, textAlign: 'center', width: '100%', backgroundColor: 'white'}}>
                                مرحله
                                سوم:</Text>
                            {this.inputs(2, 'l')}

                        </View>

                        <View style={{width: 2, height: '100%', backgroundColor: 'blue'}}/>
                        <View style={{
                            width: '31%',

                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginRight: 3,
                            marginBottom: 10,
                            marginTop: 10
                        }}>
                            <Text
                                style={{marginBottom: 5, textAlign: 'center', width: '100%', backgroundColor: 'white'}}>
                                مرحله
                                دوم:</Text>
                            {this.inputs(1, 'l')}

                        </View>
                        <View style={{width: 2, height: '100%', backgroundColor: 'blue'}}/>
                        <View style={{
                            width: '31%',

                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginRight: 3,
                            marginBottom: 10,
                            marginTop: 10
                        }}>
                            <Text
                                style={{marginBottom: 5, textAlign: 'center', width: '100%', backgroundColor: 'white'}}>
                                مرحله
                                اول:</Text>
                            {this.inputs(0, 'l')}

                        </View>


                    </View>
                    <Text>سمت راست:</Text>
                    <View style={{
                        marginBottom: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: 50,
                        borderRadius: 5,
                        borderWidth: 0,
                        borderColor: 'blue',
                        flexDirection: 'row'
                    }}>
                        <TextInput
                            keyboardType={'numeric'}

                            onChangeText={(value) => this.setState({rightLenght: value})}


                            style={{marginRight: 3, backgroundColor: 'white', width: 40}}/>
                        <Text>طول پای آزمودنی از asis تا قوزک خارجی پا:</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',borderColor:'blue',borderWidth:2,borderRadius:7}}>
                        <View style={{
                            width: '31%',

                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginRight: 3,
                            marginBottom: 10,
                            marginTop: 10
                        }}>
                            <Text
                                style={{marginBottom: 5, textAlign: 'center', width: '100%', backgroundColor: 'white'}}>
                                مرحله
                                سوم:</Text>
                            {this.inputs(5, 'r')}

                        </View>

                        <View style={{width: 2, height: '100%', backgroundColor: 'blue'}}/>

                        <View style={{
                            width: '31%',

                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginRight: 3,
                            marginBottom: 10,
                            marginTop: 10
                        }}>
                            <Text
                                style={{marginBottom: 5, textAlign: 'center', width: '100%', backgroundColor: 'white'}}>
                                مرحله
                                دوم:</Text>
                            {this.inputs(4, 'r')}

                        </View>
                        <View style={{width: 2, height: '100%', backgroundColor: 'blue'}}/>

                        <View style={{
                            width: '31%',

                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            marginRight: 3,
                            marginBottom: 10,
                            marginTop: 10
                        }}>
                            <Text
                                style={{marginBottom: 5, textAlign: 'center', width: '100%', backgroundColor: 'white'}}>
                                مرحله
                                اول:</Text>
                            {this.inputs(3, 'r')}

                        </View>


                    </View>

                </View>
                <View style={{alignItems:'center',justifyContent:'flex-end'}}>
                <Button
                    onPress={()=>this.calculate()}
                    style={{width: '100%',height:60, borderRadius: 0, alignItems: 'center', justifyContent: 'center',backgroundColor:'blue'}}>
                    <Text style={{color:'white'}}>مرحله بعد</Text>
                </Button>
                </View>
            </Container>
            </ScrollView>

        )
    }
}
module.export = ActiveStraightSideLegRaise;