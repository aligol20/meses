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


export default class TrunkStabilityPushUp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            score: 85,
            scoreList: [],
            switchStates: [
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 25},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 5},
                {s1: false, s2: false, s3: false, score: 20},
                {s1: false, s2: false, s3: false, score: 10},
                {s1: false, s2: false, s3: false, score: 25},
                {s1: false, s2: false, s3: false, score: 10},


            ],
            total:0

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
        let rfr = this.state.switchStates;
        let ddd = this.state.score;
        let fff = 100;
        if(rfr[1].s1+rfr[1].s2+rfr[1].s3>=2){
            rfr[1].score=10;
            //fff=fff-10;
        }
        if(rfr[9].s1+rfr[9].s2+rfr[9].s3>=2){
            rfr[9].score=5;
            fff=fff;
        }
        console.log(fff, 'slksdklkdls');

        for (let i = 0; i < rfr.length; i++) {
            let d = 0;
            if (rfr[i].s1+rfr[i].s2+rfr[i].s3>=2) {

                fff = fff - rfr[i].score
                console.log(rfr[i].score,i, 'slksdklkdls3')

            }
            console.log(fff, 'slksdklkdls2')
        }
        this.setState({switchStates:rfr});
        let bbb = fff+this.state.total;
        AsyncStorage.setItem('total',JSON.stringify(bbb));
        AsyncStorage.setItem('tspu',JSON.stringify(rfr));
        AsyncStorage.setItem('tspuS',JSON.stringify(Math.round(fff)));

        Alert.alert(
            'امتیاز این بخش:'+fff,
            ' به مرحله بعد می روید؟',
            [
                {text: 'بله', onPress: () => {
                    AsyncStorage.setItem('totalScore', JSON.stringify(fff));
                Actions.result() }
                },
                {text: 'خیر', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

            ],
            {cancelable: false}
        );

    }

    // switches(id, score) {
    //     let yuy = this.state.switchStates;
    //     return (
    //         <View>
    //             <View style={{
    //                 justifyContent: 'flex-end',
    //                 alignItems: 'center',
    //                 flexDirection: 'row',
    //                 marginRight: 20,
    //                 marginBottom: 10,
    //                 marginTop: 10
    //             }}>
    //                 <Switch
    //                     onValueChange={(value) => {
    //                         this.calculateScore(id, score, value),
    //                             yuy.push({id: id, score: score, value: value});
    //                         this.setState({switchStates: yuy})
    //                     }}
    //                     style={{marginRight: 10, backgroundColor: 'white', width: '40%'}}/>
    //                 <Text style={{textAlign: 'right', width: '30%', backgroundColor: 'white'}}> مرحله اول:</Text>
    //             </View>
    //             <View style={{height: 1, backgroundColor: '#BDC3C7'}}/>
    //             <View style={{
    //                 justifyContent: 'flex-end',
    //                 alignItems: 'center',
    //                 flexDirection: 'row',
    //                 marginRight: 20,
    //                 marginBottom: 10,
    //                 marginTop: 10
    //             }}>
    //                 <Switch
    //                     onValueChange={(value) => {
    //                         this.calculateScore(id, score, value),
    //                             yuy.push({id: id, score: score, value: value});
    //                         this.setState({switchStates: yuy})
    //                     }}
    //
    //                     style={{marginRight: 10, backgroundColor: 'white', width: '40%'}}/>
    //
    //                 <Text style={{textAlign: 'right', width: '30%', backgroundColor: 'white'}}> مرحله دوم:</Text>
    //             </View>
    //             <View style={{height: 1, backgroundColor: '#BDC3C7'}}/>
    //             <View style={{
    //                 justifyContent: 'flex-end',
    //                 alignItems: 'center',
    //                 flexDirection: 'row',
    //                 marginRight: 20,
    //                 marginBottom: 10,
    //                 marginTop: 10
    //             }}>
    //
    //                 <Switch
    //                     onValueChange={(value) => {
    //                         this.calculateScore(id, score, value),
    //                             yuy.push({id: id, score: score, value: value});
    //                         this.setState({switchStates: yuy})
    //                     }}
    //
    //                     style={{marginRight: 10, backgroundColor: 'white', width: '40%'}}/>
    //
    //                 <Text style={{textAlign: 'right', width: '30%', backgroundColor: 'white'}}> مرحله سوم:</Text>
    //             </View>
    //         </View>
    //     )
    // }
    switches(id) {
        let trt = this.state.switchStates;
        // if(this.state.switchStates[1].s1+this.state.switchStates[1].s2+this.state.switchStates[1].s3>=2){
        //     trt[1].score=5;
        //     trt[2].score=10;
        //
        //     this.setState({switchStates:trt})
        // }
        // if(this.state.switchStates[9].s1+this.state.switchStates[9].s2+this.state.switchStates[9].s3>=2){
        //     trt[9].score=5;
        //     trt[10].score=10;
        //
        //     this.setState({switchStates:trt})
        // }
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
    render() {

        let trt = this.state.switchStates;
        return (
            <Container>


                <ScrollView >
                    <View style={{alignItems: 'center', flex: 1, margin: 10,}}>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>هم راستا نبودن گردن و تنه</Text>

                            {this.switches(0)}
                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>قرار نگرفن نوک انگشت شصت روبروی پیشانی(مردان)، قرار
                                نگرفتن
                                نوک انگشت شصت روبروی چانه(بانوان)</Text>
                            {this.switches(1)}


                        </View>
                        <View style={this.state.switchStates[1].s1+this.state.switchStates[1].s2+this.state.switchStates[1].s3>=2
                            ?styles.steppedView:styles.disableView}>
                            <Text style={{textAlign: 'right'}}>قرار نگرفتن نوک انگشت شصت روبروی چانه (مردان) قرار نگرفتن
                                نوک
                                انگشت شصت روبروی ترقوه (بانوان)</Text>
                            {this.switches(2)}

                        </View>

                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>صاف نبودن آرنج ها در ابتدا و انتها حرکت</Text>
                            {this.switches(4)}

                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>قرار نگرفتن زانوها به صورت کاملا صاف و جدا از زمین</Text>
                            {this.switches(5)}

                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>قرار نگرفتن پنجه پا روی زمین</Text>
                            {this.switches(6)}

                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>وضعیت تنه (فاصله asis از ارتفاع بهینه کمتر باشد)</Text>
                            {this.switches(7)}

                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>وضعیت تنه (فاصله asis از ارتفاع بهینه بیشتر باشد)</Text>
                            {this.switches(8)}

                        </View>
                        <View style={styles.questionView}>
                            <Text style={{textAlign: 'right'}}>اجرای آزمون (ناتوان از اجرای آزمون بدون قرارگیری زانو روی
                                زمین)</Text>
                            {this.switches(9)}

                        </View>
                        <View style={this.state.switchStates[9].s1+ this.state.switchStates[9].s2+this.state.switchStates[9].s3>=2
                            ?styles.steppedView:styles.disableView}>
                            <Text style={{textAlign: 'right'}}>اجرای آزمون(قرار دادن زانوها روی زمین و انجام آزمون)</Text>
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
module.export = TrunkStabilityPushUp;