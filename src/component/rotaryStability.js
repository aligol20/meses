import React, {Component} from 'react';
import {
    AsyncStorage,
    Platform,
    StyleSheet,
    Text,
    View, ScrollView, Switch,Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {CheckBox, Button, Container} from 'native-base'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
const styles = StyleSheet.create({
    questionView: {
        borderWidth: 0,
        borderColor: 'blue',
        flexDirection: 'column',
        width:'98%',
        backgroundColor: 'white',
        marginBottom: 7,
        marginRight: 7,
        padding: 7,
        borderRadius: 7
    },
    steppedView: {
        borderWidth: 1,
        borderColor: '#F9690E',
        flexDirection: 'column',
        width:'98%',
        backgroundColor: 'white',
        marginBottom: 7,
        marginRight: 7,
        padding: 7,
        borderRadius: 7
    },
    radioButton: {width: '100%', marginRight: 30}
});


export default class RotaryStability extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 85,
            scoreList: [],
            switchStates2: [
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 5},


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
        this.setState({score: 100});
        let rfr = this.state.switchStates2;
        let ddd = this.state.score;
        console.log(ddd, 'slksdklkdls');
        let fff = 100;

        for (let i = 0; i < rfr.length; i++) {
            let d = 0;
            if (rfr[i].s1) {

                d = d + 1;
                console.log(d, 'jdhdfjdj1')

            }
            if (rfr[i].s2) {
                d = d + 1;
                console.log(d, 'jdhdfjdj2')

            }
            if (rfr[i].s3) {
                d = d + 1;
                console.log(d, 'jdhdfjdj3')

            }
            if (d >= 2) {
                fff = fff - rfr[i].score
            }
            console.log(d, 'jdhdfjdj')

        }

        this.setState({switchStates2:rfr});
        let ggg = fff+ this.state.total;
        AsyncStorage.setItem('total',JSON.stringify(ggg));
        AsyncStorage.setItem('rs',JSON.stringify(rfr));
        AsyncStorage.setItem('rsS',JSON.stringify(Math.round(fff)));

        Alert.alert(
           'امتیاز این بخش:'+ fff,
            ' به مرحله بعد می روید؟',
            [
                {text: 'بله', onPress: () => {
                    AsyncStorage.setItem('totalScore', JSON.stringify(fff));
                    Actions.sm() }
                },
                {text: 'خیر', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

            ],
            {cancelable: false}
        );

    }

    switches(id) {
        let yuy = this.state.switchStates;
        let trt = this.state.switchStates2;

        return (
            <View style={{flexDirection:'row',width:'100%'}}>

                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    justifyContent:'center',
                    flexDirection: 'column',

                    marginBottom: 10,
                    marginTop: 10,
                    width:'33%'

                }}>
                    <Text style={{textAlign: 'right', width: '100%', backgroundColor: 'white',marginBottom:10}}> مرحله
                        سوم:</Text>
                    <Switch

                        onValueChange={(value) => {
                            trt[id].s3 = value, this.setState({switchStates2: trt})
                        }}
                        value={this.state.switchStates2[id].s3}


                        style={{marginRight: 10, backgroundColor: 'white', width: '40%'}}/>

                </View>
                <View style={{width: 1, backgroundColor: '#BDC3C7'}}/>
                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'column',

                    marginBottom: 10,
                    marginTop: 10,
                    width:'33%'

                }}>
                    <Text style={{textAlign: 'right', width: '100%', backgroundColor: 'white',marginBottom:10}}> مرحله
                        دوم:</Text>
                    <Switch


                        onValueChange={(value) => {
                            trt[id].s2 = value, this.setState({switchStates2: trt})
                        }}
                        value={this.state.switchStates2[id].s2}


                        style={{marginRight: 10, backgroundColor: 'white', width: '40%'}}/>

                </View>
                <View style={{width: 1, backgroundColor: '#BDC3C7'}}/>
                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'column',

                    marginBottom: 10,
                    marginTop: 10,
                    width:'33%'
                }}>
                    <Text style={{textAlign: 'right', width: '100%', backgroundColor: 'white',marginBottom:10}}> مرحله
                        اول:</Text>
                    <Switch


                        onValueChange={(value) => {
                            trt[id].s1 = value, this.setState({switchStates2: trt})
                        }}
                        value={this.state.switchStates2[id].s1}
                        style={{marginRight: 10, backgroundColor: 'white', width: '40%'}}/>

                </View>
            </View>
        )
    }

    render() {

        return (
            <Container>


                <ScrollView >
                    <View style={{alignItems: 'center', flex: 1, margin: 10,}}>
                        <View>
                            <Text>سمت راست
                            </Text>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>خم بودن مچ پای راست(روی انگشتان پا زمین باشد)</Text>
                            {this.switches(0)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>اجرای ناموفق حرکت</Text>
                            {this.switches(1)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>لرزش در هنگام اجرای حرکت تعادل در حرکت</Text>
                            {this.switches(2)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>هم راستا نبودن دست و پا متحرک در هنگام اجرا</Text>
                            {this.switches(3)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>خم بودن مچ پای راست(روی انگشتان پا زمین باشد)</Text>
                            {this.switches(4)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>اجرای ناموفق حرکت</Text>
                            {this.switches(5)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>لرزش در هنگام اجرای حرکت تعادل در حرکت</Text>
                            {this.switches(6)}
                        </View>
                        <View>
                            <Text>سمت چپ
                            </Text>
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>خم بودن مچ پای چپ(روی انگشتان پا زمین باشد)</Text>
                            {this.switches(7)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>اجرای ناموفق حرکت</Text>
                            {this.switches(8)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>لرزش در هنگام اجرای حرکت تعادل در حرکت</Text>
                            {this.switches(9)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>هم راستا نبودن دست و پا متحرک در هنگام اجرا</Text>
                            {this.switches(10)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>خم بودن مچ پای چپ(روی انگشتان پا زمین باشد)</Text>
                            {this.switches(11)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>اجرای ناموفق حرکت</Text>
                            {this.switches(12)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>لرزش در هنگام اجرای حرکت تعادل در حرکت</Text>
                            {this.switches(13)}
                        </View>
                    </View>
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
                </ScrollView>
            </Container>



        )
    }
}
module.export = RotaryStability;