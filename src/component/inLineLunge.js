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


export default class InLineLunge extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 100,
            scoreList: [],
            switchStates2: [
                {s1: false, s2: false, s3: false, score: 2.5},
                {s1: false, s2: false, s3: false, score: 2.5},
                {s1: false, s2: false, s3: false, score: 2.5},
                {s1: false, s2: false, s3: false, score: 2.5},
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
        let ddd = fff + this.state.total;
        this.setState({switchStates2:rfr});
        AsyncStorage.setItem('ill',JSON.stringify(rfr));
        AsyncStorage.setItem('total',JSON.stringify(ddd));
        AsyncStorage.setItem('illS',JSON.stringify(Math.round(fff)));
        Alert.alert(
            'امتیاز این بخش:'+fff,
            ' به مرحله بعد می روید؟',
            [
                {text: 'بله', onPress: () => {
                    AsyncStorage.setItem('totalScore', JSON.stringify(fff));
                    Actions.rs() }
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

        return (
            <Container >


                <ScrollView >
                    <View style={{alignItems: 'center', flex: 1, margin: 10,}}>

                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>جدا شدن پاشنه پای جلو از زمین</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(0)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(1)}

                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>هم راستا نبودن پاها در حین برخواستن در یک خط نبودن</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(2)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(3)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>تماس نداشتن پای عقبی با زمین در انتهای بلند شدن</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(4)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(5)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>برخورد نداشتن زانوی عقب با سطح تخته</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(6)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(7)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>برخورد نداشتن زانوی پای عقب به پاشنه مچ پای جلو در حین نشستن</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(8)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(9)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>هم راستا نبودن پاها در هنگام اجرای آزمون</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(10)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(11)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>صاف نبودن تنه در حین ایستادن</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(12)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(13)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>صاف نبودن تنه در حین نشستن</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(14)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(15)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>عدم تعادل در برخواستن</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(16)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(17)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>عدم تعادل در نشستن</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(18)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
                            <Text>سمت راست:</Text>
                            {this.switches(19)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right',width:'100%'}}>عدم اتصال چوب به تنه و کج بودن گردن</Text>
                            <Text>سمت چپ:</Text>
                            {this.switches(20)}
                            <View style={{height:1,backgroundColor:'#BDC3C7',margin:10}}/>
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
module.export = InLineLunge;