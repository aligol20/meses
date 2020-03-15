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
        width: '100%'
    },
    radioButton: {width: '100%', marginRight: 30}
});
export default class ActiveStraightLegRaise extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 100,
            scoreList: [],
            switchStates2: [
                {shadow: 0, angle: '', score: 0,side:''},
                {shadow: 0, angle: '', score: 0,side:''},
                {shadow: 0, angle: '', score: 0,side:''},
                {shadow: 0, angle: '', score: 0,side:''},
                {shadow: 0, angle: '', score: 0,side:''},
                {shadow: 0, angle: '', score: 0,side:''},


            ],
            switchStates: [
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},




            ],
            leftLenght: 0,
            rightLenght: 0,

        }
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
                let ggg = Math.round(180 - b * 180.0 / Math.PI);
                trt[id].angle = ggg;
                trt[id].side = 'left';
                console.log('sasasssssss1',b);
                console.log('sasasssssss2',ff);

                this.setState({switchStates2: trt})
            }else {
                trt[id].side = 'left';

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
            trt[id].side = 'right';

            let arc = value / lenghtR;
            const a = Math.acos(arc);

            if (parseInt(value)>lenghtR) {
                let ff = value - lenghtR;
                const b = Math.acos(ff/lenghtR);
                trt[id].angle = Math.round(180 - b * 180.0 / Math.PI);
                this.setState({switchStates2: trt})
            }else {
                trt[id].side = 'right';

                trt[id].angle = Math.round(a * 180.0 / Math.PI);
                this.setState({switchStates2: trt});
            }
            if(value===lenghtR){
                trt[id].angle = 90;
                trt[id].side = 'right';

                this.setState({switchStates2: trt})
            }


        }
        trt[id].shadow = value;
        this.setState({switchStates2: trt})

    }
    switches(id) {
        let yuy = this.state.switchStates;
        let trt = this.state.switchStates;

        return (
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

                <View style={{
                    width:'33%',

                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginRight: 3,
                    marginBottom: 10,
                    marginTop: 10
                }}>
                    <Text style={{marginBottom:5,textAlign: 'right', width: '100%', backgroundColor: 'white'}}> مرحله
                        سوم:</Text>
                    <Switch

                        onValueChange={(value) => {
                            trt[id].s3 = value, this.setState({switchStates: trt})
                        }}
                        value={this.state.switchStates[id].s3}


                        style={{marginRight: 3, backgroundColor: 'white', width: '100%'}}/>

                </View>
                <View style={{
                    width:'33%',

                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginRight: 3,
                    marginBottom: 10,
                    marginTop: 10
                }}>
                    <Text style={{marginBottom:5,textAlign: 'right', width: '100%', backgroundColor: 'white'}}> مرحله
                        دوم:</Text>
                    <Switch


                        onValueChange={(value) => {
                            trt[id].s2 = value, this.setState({switchStates: trt})
                        }}
                        value={this.state.switchStates[id].s2}


                        style={{marginRight: 3, backgroundColor: 'white', width: '100%'}}/>

                </View>
                <View style={{
                    width:'33%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginRight: 3,
                    marginBottom: 10,
                    marginTop: 10
                }}>
                    <Text style={{marginBottom:5,textAlign: 'right', width: '100%', backgroundColor: 'white'}}> مرحله
                        اول:</Text>
                    <Switch


                        onValueChange={(value) => {
                            trt[id].s1 = value, this.setState({switchStates: trt})
                        }}
                        value={this.state.switchStates[id].s1}
                        style={{justifyContent:'center',marginRight: 3, backgroundColor: 'white', width: '100%'}}/>

                </View>

            </View>
        )
    }
    inputs(id, side) {
        let trt = this.state.switchStates2;

        return (
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>


                <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
                    <TextInput
                        keyboardType={'numeric'}

                        onChangeText={(value) => {

                            this.calculateThings(value, id, side)
                        }
                        }


                        style={{width:35,marginLeft:7,marginRight: 3,borderBottomWidth:0,borderColor:'blue'}}/>
                    <Text>طول سایه پا:</Text>

                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
                    <Text
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            marginRight: 3,
                            backgroundColor: 'white',
                            borderRadius: 2,
                            width: '45%',
                            height: 30,
                            color:'green',
                            borderWidth: 0,
                            borderColor: '#52B3D9'
                        }}>{trt[id].angle}</Text>
                    <Text style={{width: '45%'}}>زاویه</Text>

                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
                    <TextInput
                        keyboardType={'numeric'}

                        onChangeText={(value) => {parseInt(value)>35 ? alert('مقادیر وارد شده صحیح نیست'):
                            console.log(value, 'saqwsaqw');
                            trt[id].score = value;
                            this.setState({switchStates2:trt})
                        }
                        }


                        style={{width:40,marginLeft:3,marginRight: 3, backgroundColor: 'white',borderBottomWidth:0,borderColor:'blue'}}/>
                    <Text style={{width: '45%'}}>نمره:</Text>

                </View>


            </View>
        )
    }
    calculate(){
        let k =this.state.switchStates2;
        const s1=k[0].score;
        const s2=k[1].score;
        const s3=k[2].score;
        const avg1 = (parseInt(s1)+parseInt(s2)+parseInt(s3))/3;
        const avg2 = (parseInt(k[3].score)+parseInt(k[4].score)+parseInt(k[5].score))/3;
        this.setState({score: 100});
        let rfr = this.state.switchStates;
        console.log(avg1, 'slksdklkdls');
        let fff = 30;
        let rrr= 0;

        for (let i = 0; i < rfr.length; i++) {
            let d = 0;
            d=rfr[i].s1+rfr[i].s2+rfr[i].s3;
            if (d >= 2) {
                fff = fff - rfr[i].score
            }

            console.log(d, 'jdhdfjdj')

        }
        console.log(fff,'wqe1');
        console.log(avg1,'wqe2');
        console.log(avg2,'wqe3');

        fff=fff+70-avg1-avg2;
        this.setState({switchStates:rfr,switchStates2:k});
        try {
            AsyncStorage.setItem('asl1', JSON.stringify(rfr));
            AsyncStorage.setItem('asl2', JSON.stringify(k));
            AsyncStorage.setItem('total', JSON.stringify(fff));
            AsyncStorage.setItem('aslS',JSON.stringify(Math.round(fff)));
            console.log('xxxxxxxx')

        }catch (err){
            console.log(err,'xxxxxxx')
        }

        Alert.alert(
            'امتیاز این بخش:'+Math.round(fff),
            ' به مرحله بعد می روید؟',
            [
                {text: 'بله', onPress: () => {
                    AsyncStorage.setItem('totalScore', JSON.stringify(fff));
                    Actions.assl() }
                },
                {text: 'خیر', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

            ],
            {cancelable: false}
        );

    }
    render() {
        return (
            <ScrollView>
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

                            onChangeText={(value) => this.setState({leftLenght: value})}


                            style={{marginRight: 3, backgroundColor: 'white',borderBottomWidth:0,borderColor:'blue', width: 40}}/>
                        <Text>طول پای آزمودنی از asis تا قوزک خارجی پا:</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center',borderRadius:7,borderWidth:2,borderColor:'blue', justifyContent: 'center'}}>
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


                            style={{marginRight: 3,borderBottomWidth:0,borderColor:'blue', backgroundColor: 'white', width: 40}}/>
                        <Text>طول پای آزمودنی از asis تا قوزک خارجی پا:</Text>
                    </View>
                    <View style={{borderWidth:2,borderColor:'blue',borderRadius:7,flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
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
                <View style={styles.questionView}>
                    <Text style={{textAlign: 'right',width:'100%'}}>فلکشن زانوی پای متحرک</Text>
                    <Text>سمت چپ:</Text>
                    {this.switches(0)}
                    <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                    <Text>سمت راست:</Text>
                    {this.switches(1)}

                </View>
                <View style={styles.questionView}>
                    <Text style={{textAlign: 'right',width:'100%'}}>فلکشن زانوی پای روی زمین</Text>
                    <Text>سمت چپ:</Text>
                    {this.switches(2)}
                    <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                    <Text>سمت راست:</Text>
                    {this.switches(3)}

                </View>
                <View style={styles.questionView}>
                    <Text style={{textAlign: 'right',width:'100%'}}>وضعیت کمر در لامبار</Text>
                    <Text>سمت چپ:</Text>
                    {this.switches(4)}
                    <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                    <Text>سمت راست:</Text>
                    {this.switches(5)}

                </View>
                <Button
                    onPress={()=>this.calculate()}
                    style={{backgroundColor:'blue',width: '100%', borderRadius: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color:'white'}}>مرحله بعد</Text>
                </Button>
            </ScrollView>

        )
    }
}
module.export = ActiveStraightLegRaise;