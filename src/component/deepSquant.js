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
    disableView:{height:0,width:0},

    radioButton: {width: '100%', marginRight: 30}
});


export default class DeepSquat extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 100,
            scoreList: [],
            switchStates2: [
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 40},
                {s1: false, s2: false, s3: false, score: 0},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},


            ],
            total:0,

        }

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

        if(rfr[2].s1+rfr[2].s2+rfr[2].s3>=2){
            rfr[2].score = 0
        }
        // if(rfr[5].s1+rfr[5].s2+rfr[5].s3>=2){
        //     rfr[5].score=10;
        // }
        let fff = 100;
        let rrr= 0;
        // fff=fff-rfr[5].score;

        for (let i = 0; i < rfr.length; i++) {
            let d = 0;
            d=rfr[i].s1+rfr[i].s2+rfr[i].s3;
            if (d >= 2) {
                fff = fff - rfr[i].score
            }
            if(i===3){
                d=rfr[2].s1+rfr[2].s2+rfr[2].s3;
                if (d >= 2) {
                    fff = fff - rfr[i].score
                }


            }

            console.log(d, 'jdhdfjdj')

        }
        for (let  i =0;i<rfr.length;i++){
            rrr=rfr[i].score+rrr;
        }
        let mmm = fff + this.state.total;
        this.setState({switchStates2:rfr});
        AsyncStorage.setItem('ds',JSON.stringify(rfr));
        AsyncStorage.setItem('total',JSON.stringify(mmm));
        AsyncStorage.setItem('dsS',JSON.stringify(Math.round(fff)));

        Alert.alert(
            'امتیاز این بخش:'+fff,
            ' به مرحله بعد می روید؟',
            [
                {text: 'بله', onPress: () => {
                    AsyncStorage.setItem('totalScore', JSON.stringify(fff));
                    Actions.hs() }
                },
                {text: 'خیر', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

            ],
            {cancelable: false}
        );

    }

    switches(id) {
        let trt = this.state.switchStates2;

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
                            trt[id].s3 = value, this.setState({switchStates2: trt})
                        }}
                        value={this.state.switchStates2[id].s3}


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
                            trt[id].s2 = value, this.setState({switchStates2: trt})
                        }}
                        value={this.state.switchStates2[id].s2}


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
                            trt[id].s1 = value, this.setState({switchStates2: trt})
                        }}
                        value={this.state.switchStates2[id].s1}
                        style={{justifyContent:'center',marginRight: 3, backgroundColor: 'white', width: '100%'}}/>

                </View>

            </View>
        )
    }

    render() {
        let trt = this.state.switchStates2;

        return (
            <Container>


                <ScrollView >
                    <View style={{alignItems: 'center', flex: 1, margin: 10}}>

                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>باز یا بسته بودن پاها بیشتر یا کمتر از عرض شانه ها</Text>


                            {this.switches(0)}

                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>انحراف پنجه های پا به سمت داخل و خارج</Text>

                            {this.switches(1)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>نیاز به قرار دادن دیسک قابل تنظیم</Text>

                            {this.switches(2)}
                        </View>
                        <View style={this.state.switchStates2[2].s1 + this.state.switchStates2[2].s2 + this.state.switchStates2[2].s3 >= 2 ?
                            styles.steppedView : styles.disableView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>قرار دادن دیسک قابل تنظیم</Text>

                            <ScrollView
                            horizontal={true}>
                            <RadioGroup
                                size={23}
                                style={{flexDirection:'row',width:'100%'}}
                                onSelect = {(index, value) => {trt[2].score = 0;console.log(parseInt(value)*5,'zaaaaaaaaa');trt[3].score=parseInt(value)*5; this.setState({switchStates2:trt,})}}>
                                <RadioButton
                                    value= '8'
                                    color='blue'
                                >
                                    <Text>8/8</Text>
                                </RadioButton>
                                <RadioButton

                                    value='7'
                                    color='blue'
                                >
                                    <Text>7/8</Text>
                                </RadioButton>
                                <RadioButton

                                    value='6'
                                color='blue'
                            >
                                <Text>6/8</Text>
                            </RadioButton>
                                <RadioButton

                                    value='5'
                                color='blue'
                            >
                                <Text>5/8</Text>
                            </RadioButton>
                                <RadioButton

                                    value='4'
                                    color='blue'
                                >
                                    <Text>4/8</Text>
                                </RadioButton>
                                <RadioButton

                                    value='3'
                                    color='blue'
                                >
                                    <Text>3/8</Text>
                                </RadioButton>
                                <RadioButton

                                    value='2'
                                    color='blue'
                                >
                                    <Text>2/8</Text>
                                </RadioButton>
                                <RadioButton

                                    value='1'
                                    color='blue'
                                >
                                    <Text>1/8</Text>
                                </RadioButton>
                            </RadioGroup>
                            </ScrollView>
                        </View>

                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>جلوتر رفتن زانوها از نوک انگشتان پا</Text>

                            {this.switches(4)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>برخورد نکردن کامل باسن با سطح خلفی ساق پا</Text>

                            {this.switches(5)}
                        </View>
                        <View style={this.state.switchStates2[5].s1 + this.state.switchStates2[5].s2+this.state.switchStates2[5].s3 >=2
                            ?styles.steppedView:styles.disableView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>زاویه بین ران و ساق کمتر از ۴۵ درجه</Text>

                            {this.switches(6)}
                        </View>

                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>مشاهده فلکشن در تنه حین اجرا</Text>

                            {this.switches(8)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>مشاهده انحراف در چوب</Text>

                            {this.switches(9)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>مشاهده فلکشن در آرنج ها در طی انجام آزمون</Text>

                            {this.switches(10)}
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
module.export = DeepSquat;