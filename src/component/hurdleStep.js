import React, {Component} from 'react';
import {
    AsyncStorage,
    Platform,
    StyleSheet,
    Text,
    View, ScrollView, Switch, Alert
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
    disableView:{height:0,width:0},
    radioButton: {width: '100%', marginRight: 30}
});


export default class HurdleStep extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 100,
            scoreList: [],
            switchStates2: [
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
            ],
            q1:false,
            total:0,

        }

        console.log(this.state.switchStates2[0].s1+this.state.switchStates2[0].s2+this.state.switchStates2[0].s3,'sasaassss')

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
            d=rfr[i].s1+rfr[i].s2+rfr[i].s3;

            if (d >= 2) {
                fff = fff - rfr[i].score
            }
            console.log(d, 'jdhdfjdj')

        }
        let ri=rfr[8].s1+rfr[8].s2+rfr[8].s3;
        let le=rfr[9].s1+rfr[9].s2+rfr[9].s3;
        let ri1=rfr[10].s1+rfr[10].s2+rfr[10].s3;
        let le1=rfr[11].s1+rfr[11].s2+rfr[11].s3;
        if(ri>=2 || le>=2 && ri1<=1 && le1<=1 ){
            if(ri>=2 && le>=2){
                fff=fff+10;
            }else {
                fff=fff+5;

            }
        }

        this.setState({switchStates2:rfr});
        AsyncStorage.setItem('hs',JSON.stringify(rfr));
        let aaa = fff + this.state.total;
        AsyncStorage.setItem('total',JSON.stringify(aaa));
        AsyncStorage.setItem('hsS',JSON.stringify(Math.round(fff)));

        Alert.alert(
             'امتیاز این بخش:'+fff ,
            ' به مرحله بعد می روید؟',
            [
                {
                    text: 'بله', onPress: () => {
                    AsyncStorage.setItem('totalScore', JSON.stringify(fff));
                    Actions.ill()
                }
                },
                {text: 'خیر', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

            ],
            {cancelable: false}
        );

    }

    switches(id) {
        // switch (id){
        //     case 9:
        //         this.steppingScore(id);
        //         break;
        // }
        let trt = this.state.switchStates2;
        // console.log(trt[0].contains(true),'dewsss');
        console.log(trt[0],'redwewewe');

        return (
            <View style={{backgroundColor:'white',flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                <View style={{
                    width: '33%',

                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginRight: 3,
                    marginBottom: 10,
                    marginTop: 10
                }}>
                    <Text style={{marginBottom: 5, textAlign: 'right', width: '100%', backgroundColor: 'white'}}> مرحله
                        سوم:</Text>
                    <Switch

                        onValueChange={(value) => {
                            trt[id].s3 = value, this.setState({switchStates2: trt})
                        }}
                        value={this.state.switchStates2[id].s3}


                        style={{marginRight: 3, backgroundColor: 'white', width: '100%'}}/>

                </View>
                <View style={{
                    width: '33%',

                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginRight: 3,
                    marginBottom: 10,
                    marginTop: 10
                }}>
                    <Text style={{marginBottom: 5, textAlign: 'right', width: '100%', backgroundColor: 'white'}}> مرحله
                        دوم:</Text>
                    <Switch


                        onValueChange={(value) => {
                            trt[id].s2 = value, this.setState({switchStates2: trt})
                        }}
                        value={this.state.switchStates2[id].s2}


                        style={{marginRight: 3, backgroundColor: 'white', width: '100%'}}/>

                </View>
                <View style={{
                    width: '33%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginRight: 3,
                    marginBottom: 10,
                    marginTop: 10
                }}>
                    <Text style={{marginBottom: 5, textAlign: 'right', width: '100%', backgroundColor: 'white'}}> مرحله
                        اول:</Text>
                    <Switch


                        onValueChange={(value) => {
                            trt[id].s1 = value, this.setState({switchStates2: trt})
                        }}
                        value={this.state.switchStates2[id].s1}
                        style={{justifyContent: 'center', marginRight: 3, backgroundColor: 'white', width: '100%'}}/>

                </View>

            </View>
        )
    }

    steppingScore(id) {
        this.setState({score: 100});
        let rfr = this.state.switchStates2;
        let d = 0;
        let s = 0;


        if (rfr[id-1].s1) {
            d = d + 1;
        }
        if (rfr[id-1].s2) {
            d = d + 1;
        }
        if (rfr[id-1].s3) {
            d = d + 1;
        }
        if (rfr[id].s1) {
            s = s + 1;
        }
        if (rfr[id].s2) {
            s = s + 1;
        }
        if (rfr[id].s3) {
            s = s + 1;
        }
        if (d >= 2 && s>=2) {

            this.setState({q1:true})
        }else {

        }

    }

    render() {

        return (
            <Container >


                <ScrollView >
                    <View style={{alignItems: 'center', flex: 1, margin: 10,}}>

                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>خم در تنه آزمون دهنده به جلو یا عقب در طول
                                اجرا</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(0)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(1)}

                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>تمایل تنه آزمون دهنده به خم شدن به طرفین یا
                                پهلوها</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(2)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(3)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>چرخش تنه یا لگن آزمون دهنده به طرفین</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(4)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(5)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>قرار نگرفتن کامل چوب در پشت گردن</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(6)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(7)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>عبور ارتفاع ساق پای فرد به صورت صحیح از خط
                                شاخص</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(8)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(9)}
                        </View>
                        <View style={this.state.switchStates2[8].s3 + this.state.switchStates2[8].s2 + this.state.switchStates2[8].s1 >=2 ||
                        this.state.switchStates2[9].s3 + this.state.switchStates2[9].s2 + this.state.switchStates2[9].s1 >=2
                            ? styles.steppedView:styles.disableView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>کاهش ۲۰ درصد اول از ارتفاع کل ساق آزمون
                                دهنده</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(10)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(11)}
                        </View>
                        <View style={this.state.switchStates2[10].s3 + this.state.switchStates2[10].s2 + this.state.switchStates2[10].s1 >=2 ||
                        this.state.switchStates2[11].s3 + this.state.switchStates2[11].s2 + this.state.switchStates2[11].s1 >=2
                            ? styles.steppedView:styles.disableView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>کاهش ۲۰ درصد دوم از ارتفاع کل ساق آزمون
                                دهنده</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(12)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(13)}
                        </View>
                        <View style={this.state.switchStates2[12].s3 + this.state.switchStates2[12].s2 + this.state.switchStates2[12].s1 >=2 ||
                        this.state.switchStates2[13].s3 + this.state.switchStates2[13].s2 + this.state.switchStates2[13].s1 >=2
                            ? styles.steppedView:styles.disableView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>کاهش ۲۰ درصد سوم از ارتفاع کل ساق آزمون
                                دهنده</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(14)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(15)}
                        </View>
                        <View style={this.state.switchStates2[14].s3 + this.state.switchStates2[14].s2 + this.state.switchStates2[14].s1 >=2 ||
                        this.state.switchStates2[15].s3 + this.state.switchStates2[15].s2 + this.state.switchStates2[15].s1 >=2
                            ? styles.steppedView:styles.disableView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>کاهش ۲۰ درصد چهارم از ارتفاع کل ساق آزمون
                                دهنده</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(16)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(17)}
                        </View>
                        <View style={this.state.switchStates2[16].s3 + this.state.switchStates2[16].s2 + this.state.switchStates2[16].s1 >=2 ||
                        this.state.switchStates2[17].s3 + this.state.switchStates2[17].s2 + this.state.switchStates2[17].s1 >=2
                            ? styles.steppedView:styles.disableView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>عدم توانایی فرد در عبور از خط شاخص در
                                کمترین میزان</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(18)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(19)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right', width: '100%'}}>قرار نداشتن پاشنه پای حرکت کننده روی
                                زمین</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(20)}
                            <View style={{height: 1, backgroundColor: '#BDC3C7', margin: 10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(21)}
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
module.export = HurdleStep;