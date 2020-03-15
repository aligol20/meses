import React, { Component } from 'react';
import {
    Content,
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    AsyncStorage,
    ActivityIndicator, ScrollView
} from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { Actions } from 'react-native-router-flux';
import { Button, Icon,Container } from 'native-base';


const styles = StyleSheet.create({
    side:{width:'20%',height:550,backgroundColor:'red'},
    title:{backgroundColor:'#6BB9F0',justifyContent:'center',alignItems:'center',width:'90%',height:50,borderWidth:2,borderRadius:7,borderColor:'blue',marginBottom:5,marginTop:5},
    scoreGreen:{width:25,textAlign:'center',color:'red'},
    scoreRed:{width:25,textAlign:'center',color:'green'},
    true: {
        color: 'red',width:20
    },
    false: {
        color: 'green',width:20
    },
    item:{ flexDirection: 'row', height: 50, width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' },
    item2:{ flexDirection: 'row', height: 50, width: '95%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',borderWidth:1,borderColor:'orange',borderRadius:5 ,marginRight:10},
});
export default class Details extends Component {
    constructor(props) {

        super(props);
        const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            isLoading: true,
            data1: dss.cloneWithRows([]),
            data2: dss.cloneWithRows([]),
            data3: dss.cloneWithRows([]),
            data4: dss.cloneWithRows([]),
            data5: dss.cloneWithRows([]),
            data6: dss.cloneWithRows([]),
            data7: dss.cloneWithRows([]),
            data8: dss.cloneWithRows([]),
            data9: dss.cloneWithRows([]),
            data10: dss.cloneWithRows([]),
            s1:'',
            s2:'',
            s3:'',
            s4:'',
            s5:'',
            s6:'',
            s7:'',
            s8:'',
            s9:'',

        };
        // AsyncStorage.getItem('ds', (err, store) => {
        //     let fff = JSON.parse(store);
        //     console.log(fff, 'fffffffdddddd2');
        //     const dss = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //     this.setState({
        //         data1: dss.cloneWithRows(fff.map(function (tt) {
        //             return tt
        //         }))
        //     })
        // });
        this.getData();
    }
    getData() {
        console.log('fffffffdddddd3333');
        try {
            AsyncStorage.getItem('aslS', (err, store) => {
                let fff = JSON.parse(store);
                this.setState({
                    s1: fff ,
                })

            });
            AsyncStorage.getItem('asslS', (err, store) => {
                let fff = JSON.parse(store);
                this.setState({
                    s2: fff ,
                })

            });
            AsyncStorage.getItem('dsS', (err, store) => {
                let fff = JSON.parse(store);
                this.setState({
                    s3: fff ,
                })

            });
            AsyncStorage.getItem('hsS', (err, store) => {
                let fff = JSON.parse(store);
                this.setState({
                    s4: fff ,
                })

            });
            AsyncStorage.getItem('illS', (err, store) => {
                let fff = JSON.parse(store);
                this.setState({
                    s5: fff ,
                })

            });
            AsyncStorage.getItem('rsS', (err, store) => {
                let fff = JSON.parse(store);
                this.setState({
                    s6: fff ,
                })

            });
            AsyncStorage.getItem('smS', (err, store) => {
                let fff = JSON.parse(store);
                this.setState({
                    s7: fff ,
                })

            });
            AsyncStorage.getItem('tspuS', (err, store) => {
                let fff = JSON.parse(store);
                this.setState({
                    s8: fff ,
                })

            });
            AsyncStorage.getItem('ds', (err, store) => {
                let fff = JSON.parse(store);
                console.log(fff, 'fffffffdddddd2');
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    data1: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    }))
                })
            });
            AsyncStorage.getItem('hs', (err, store) => {
                let fff = JSON.parse(store);
                console.log(fff, 'fffffffdddddd3');
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    data2: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    }))
                })
            });
            AsyncStorage.getItem('ill', (err, store) => {
                let fff = JSON.parse(store);
                console.log(fff, 'fffffffdddddd4');
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    data3: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    }))
                })
            });
            AsyncStorage.getItem('rs', (err, store) => {
                let fff = JSON.parse(store);
                console.log(fff, 'fffffffdddddd5');
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    data4: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    }))
                })
            });
            AsyncStorage.getItem('tspu', (err, store) => {
                let fff = JSON.parse(store);
                console.log(fff, 'fffffffdddddd6');
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    data5: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    }))
                })
            });
            AsyncStorage.getItem('asl1', (err, store) => {
                let fff = JSON.parse(store);
                console.log(fff, 'fffffffdddddd7');
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    data6: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    }))
                })
            });
            AsyncStorage.getItem('asl2', (err, store) => {
                let fff = JSON.parse(store);
                console.log(fff, 'fffffffdddddd7');
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    data7: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    }))
                })
            });
            AsyncStorage.getItem('assl', (err, store) => {
                let fff = JSON.parse(store);
                console.log(fff, 'fffffffdddddd7');
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    data8: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    }))
                })
            });
            AsyncStorage.getItem('sm', (err, store) => {
                let fff = JSON.parse(store);
                console.log(fff, 'fffffffdddddd7');
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    data9: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    }))
                })
            });
            AsyncStorage.getItem('info', (err, store) => {
                let fff = JSON.parse(store);
                const dss = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

                this.setState({
                    data10: dss.cloneWithRows(fff.map(function (tt) {
                        return tt
                    })),
                    isLoading: false,
                })

            });

            console.log(this.state.infor, 'fffffffddddssssssfffdd7');

        }
        catch (err) {
            console.log(err, 'dddddd')
        }
    }
    render() {
        if(this.state.isLoading){
            return(
            <ActivityIndicator
                style={{ height: 80 }}
                color="#6C7A89"
                size="small"
            />
            )
        }

        return (
            <ScrollView style={{backgroundColor:'white'}}>
                <Container style={{width:'100%',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <ListView

                        style={{ backgroundColor: '#00000000' }}
                        dataSource={this.state.data10}
                        renderRow={(rowData, rowID, sectionID) =>
                    <View style={{justifyContent:'flex-end',margin:5,borderColor:'blue',borderWidth:2,borderRadius:7}}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{color:'black',margin:5,textAlign:'left',width:100}}>{rowData.name}</Text>
                        <Text style={{color:'black',margin:5,textAlign:'right',width:100}}>{ 'نام:'}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Text style={{color:'black',margin:5,textAlign:'left',width:100}}>{rowData.family}</Text>
                        <Text style={{color:'black',margin:5,textAlign:'right',width:100}}>{ 'نام خانوادگی:'}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Text style={{color:'black',margin:5,textAlign:'left',width:100}}>{rowData.sex }</Text>
                        <Text style={{color:'black',margin:5,textAlign:'right',width:100}}>{ 'جنسیت:'}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Text style={{color:'black',margin:5,textAlign:'left',width:100}}>{rowData.tall}</Text>
                        <Text style={{color:'black',margin:5,textAlign:'right',width:100}}>{ 'قد:'}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Text style={{color:'black',margin:5,textAlign:'left',width:100}}>{rowData.age }</Text>
                        <Text style={{color:'black',margin:5,textAlign:'right',width:100}}>{ 'سن:'}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Text style={{color:'black',margin:5,textAlign:'left',width:100}}>{rowData.weight}</Text>
                        <Text style={{color:'black',margin:5,textAlign:'right',width:100}}>{ 'وزن:'}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Text style={{color:'black',margin:5,textAlign:'left',width:100}}>{rowData.resume }</Text>
                        <Text style={{color:'black',margin:5,textAlign:'right',width:100}}>{ 'سابقه فعالیت:'}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Text style={{color:'black',margin:5,textAlign:'left',width:100}}>{rowData.betterHand }</Text>
                        <Text style={{color:'black',margin:5,textAlign:'right',width:100}}>{ 'دست برتر:'}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <Text style={{color:'black',margin:5,textAlign:'left',width:100}}>{rowData.betterFoot }</Text>
                        <Text style={{color:'black',margin:5,textAlign:'right',width:100}}>{ 'پای برتر:'}</Text>
                        </View>

                    </View>}>
                    </ListView>
                    <View style={styles.title}>
                    <Text style={{margin:5}}>
                        {'deepSquent'+ ':' + this.state.s3}
                    </Text>
                </View>
                <View style={{flexDirection:'row',width:'100%'}}>
                <ListView

                    style={{ width: '25%', backgroundColor: 'white' }}
                    dataSource={this.state.data1}
                    renderRow={(rowData, rowID, sectionID) =>
                        <View style={sectionID==='3' && rowData.score !==0? styles.item2:styles.item}>
                            <Text style={rowData.s1 + rowData.s2 + rowData.s3 >=2 ? styles.scoreGreen:styles.scoreRed}>{rowData.score}</Text>
                            <Icon name="ios-hand-outline" style={rowData.s1 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s2 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s3 === true ? styles.true : styles.false} />


                        </View>
                    }>
                </ListView>
                <View style={{width:'75%',backgroundColor:'white',flexDirection:'row'}}>
                <View style={{width:'80%',flexDirection:'column',backgroundColor:'white'}}>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>باز یا بسته بودن پاها بیشتر یا کمتر از عرض شانه ها</Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>انحراف پنجه های پا به سمت داخل و خارج</Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نیاز به قراردادن دیسک قابل تنظیم</Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>قرار دادن دیسک قابل تنظیم</Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>جلوتر رفتن زانوها از نوک انگشتان پا</Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>برخورد نکردن کامل باسن با سطح خلفی ساق پا</Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه بین ران و ساق کمتر از ۴۵ درجه</Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}></Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>مشاهده فلکشن در تنه در حین اجرا</Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>مشاهده انحراف در چوب</Text>
                <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>مشاهده فلکشن در آرنج ها در طی انجام آزمون</Text>
                    </View>
                    <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                    <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت مچ پا</Text>
                    <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت دیسک</Text>
                    <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت زانو</Text>
                    <Text style={{height:150,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت باسن</Text>
                    <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت کمر</Text>
                    <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت آرنج ها</Text>
                    <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}> وضعیت چوبی ها</Text>

                    </View>
                </View>
                </View>
                <View style={styles.title}>
                    <Text style={{margin:5}}>
                        { 'hurdleStep'+ ':' + this.state.s4}
                    </Text>
                </View>
                    <View style={{flexDirection:'row',width:'100%'}}>
                
                <ListView

                    style={{ width: '25%', backgroundColor: 'white' }}
                    dataSource={this.state.data2}
                    renderRow={(rowData, rowID, sectionID) =>
                        <View style={styles.item}>
                            <Text style={rowData.s1 + rowData.s2 + rowData.s3 >=2 ? styles.scoreGreen:styles.scoreRed}>{rowData.score}</Text>
                            <Icon name="ios-hand-outline" style={rowData.s1 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s2 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s3 === true ? styles.true : styles.false} />

                        </View>
                    }>
                </ListView>
                    <View style={{width:'75%',backgroundColor:'white',flexDirection:'row'}}>
                        <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>

                        </View>
                        <View style={{width:'60%',flexDirection:'column',backgroundColor:'white',height:1100}}>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>خم شدن آزمون دهنده به جلو یا عقب در طول اجرا</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>تمایل تنه آزمون دهنده به خم شدن طرفین یا پهلوها</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چرخش تنه یا لگن آزمون دهنده به طرفین</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>قرار نگرفتن کامل چوب در پشت گردن</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>عبور ارتفاع ساق پای فرد به صورت صحیح از خط شاخص</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>کاهش ۲۰ درصد اول از ارتفاع کف ساق آزمون دهنده</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>کاهش ۲۰ درصد دوم از ارتفاع کف ساق آزمون دهنده</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>کاهش ۲۰ درصد سوم از ارتفاع کف ساق آزمون دهنده</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>کاهش ۲۰ درصد چهارم از ارتفاع کف ساق آزمون دهنده</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>عدم توانایی فرد در عبور از خط شاخص در کمترین میزان</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>قرار ندادن پاشنه پای حرکت کننده روی میز</Text>
                        </View>
                        <View style={{width:'20%',flexDirection:'column',backgroundColor:'white',height:1100}}>
                            <Text style={{height:400,textAlign:'center',borderWidth:1,borderColor:'#013243',alignItems:'center'}}>اندام فوقانی</Text>
                            <Text style={{height:600,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>اندام تحتانی</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت پای جلو</Text>


                        </View>
                    </View>

                </View>
                <View style={styles.title}>
                    <Text style={{margin:5}}>
                        {'inLineLunge' +  ':' + this.state.s5}
                    </Text>
                </View>
                    <View style={{flexDirection:'row',width:'100%'}}>

                <ListView

                    style={{ width: '25%', backgroundColor: '#00000000' }}
                    dataSource={this.state.data3}
                    renderRow={(rowData, rowID, sectionID) =>
                        <View style={styles.item}>
                            <Text style={rowData.s1 + rowData.s2 + rowData.s3 >=2 ? styles.scoreGreen:styles.scoreRed}>{rowData.score}</Text>
                            <Icon name="ios-hand-outline" style={rowData.s1 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s2 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s3 === true ? styles.true : styles.false} />

                        </View>
                    }>
                </ListView>
                    <View style={{width:'75%',backgroundColor:'white',flexDirection:'row'}}>
                        <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>

                        </View>
                        <View style={{width:'60%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>جدا شدن پاشنه پای جلو از زمین</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>هم راستا نبودن پاها در حین برخواستن در یک خط نبودن</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>تماس نداشتن پای عقبی با زمین در انتهای بلند شدن</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>برخورد نداشتن زانو با سطح تخته</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>برخورد نداشتن زانوی پای عقب به پاشنه مچ پای جلو در حین نشستن</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>هم راستا نبودن پاها در هنگام اجرای آزمون</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>صاف نبودن تنه در حین ایستادن</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>صاف نبودن تنه در حین نشستن</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>عدم تعادل در برخواستن</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>عدم تعادل در نشستن</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>عدم اتصال چوب به تنه و کج بودن گردن</Text>
                        </View>
                        <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:300,textAlign:'center',borderWidth:1,borderColor:'#013243',alignItems:'center'}}>وضعیت مچ پا</Text>
                            <Text style={{height:200,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت زانو</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت پاها</Text>
                            <Text style={{height:200,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>ووضعیت ستون مهره ها</Text>
                            <Text style={{height:200,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت تعادل</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت جوب مدرج</Text>


                        </View>
                    </View>

                </View>
                <View style={styles.title}>
                    <Text style={{margin:5}}>
                        {'rotaryStability' +  ':' + this.state.s6}
                    </Text>
                </View>
                    <View style={{flexDirection:'row',width:'100%'}}>

                <ListView

                    style={{ width: '25%', backgroundColor: '#00000000' }}
                    dataSource={this.state.data4}
                    renderRow={(rowData, rowID, sectionID) =>
                        <View style={styles.item}>
                            <Text style={rowData.s1 + rowData.s2 + rowData.s3 >=2 ? styles.scoreGreen:styles.scoreRed}>{rowData.score}</Text>
                            <Icon name="ios-hand-outline" style={rowData.s1 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s2 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s3 === true ? styles.true : styles.false} />

                        </View>
                    }>
                </ListView>
                    <View style={{width:'75%',backgroundColor:'white',flexDirection:'row'}}>
                        <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>

                        </View>
                        <View style={{width:'60%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>خم بودن مچ پای راست(روی انگشتان پا زمین باشد)</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>اجرای ناموفق حرکت</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>لرزش در هنگام اجرای حرکت تعادل در حرکت</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>هم راستا نبودن دست  و پا متحرک در هنگام اجرا</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>خم بودن مچ پای راست(روی انگشتان پا زمین باشد)</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>اجرای ناموفق حرکت</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>لرزش در هنگام اجرای حرکت تعادل در حرکت</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>خم بودن مچ پای چپ(روی انگشتان پا زمین باشد)</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>اجرای ناموفق حرکت</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>لرزش در هنگام اجرای حرکت تعادل در حرکت</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>هم راستا نبودن دست  و پا متحرک در هنگام اجرا</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>خم بودن مچ پای چپ(روی انگشتان پا زمین باشد)</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>اجرای ناموفق حرکت</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>لرزش در هنگام اجرای حرکت تعادل در حرکت</Text>

                        </View>
                        <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:200,textAlign:'center',borderWidth:1,borderColor:'#013243',alignItems:'center'}}>حالت اجرای دست و پای همان طرف</Text>
                            <Text style={{height:150,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>حالت اجرای دست و پای مخالف</Text>
                            <Text style={{height:200,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>حالت اجرای دست و پای همان طرف</Text>
                            <Text style={{height:150,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>حالت اجرای دست و پای مخالف</Text>



                        </View>
                    </View>

                </View>
                <View style={styles.title}>
                    <Text style={{margin:5}}>
                        {'trunkStabilityPushUp' + ':' + this.state.s8}
                    </Text>
                </View>
                <View style={{flexDirection:'row',width:'100%'}}>

                <ListView

                    style={{ width: '25%', backgroundColor: '#00000000' }}
                    dataSource={this.state.data5}
                    renderRow={(rowData, rowID, sectionID) =>
                        <View style={styles.item}>
                            <Text style={rowData.s1 + rowData.s2 + rowData.s3 >=2 ? styles.scoreGreen:styles.scoreRed}>{rowData.score}</Text>
                            <Icon name="ios-hand-outline" style={rowData.s1 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s2 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s3 === true ? styles.true : styles.false} />

                        </View>
                    }>
                </ListView>
                    <View style={{width:'75%',backgroundColor:'white',flexDirection:'row'}}>
                        <View style={{width:'80%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>هم راستا نبودن گردن و تنه</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>قرار نگرفتن نوک انگشت شصت روبروی پیشانی(مردان)،قرار نگرفتن نوک انگشت شصت روبروی چانه(بانوان)</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>قرار نگرفتن نوک انگشت شصت روبروی چانه(مردان)،قرار نگرفتن نوک انگشت شصت روبروی ترقوه(بانوان)</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>قادر به انجام موارد ۲ و ۳ نبود</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>صاف نبودن آرنج ها در ابتدا و انتها حرکت</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>قرار نگرفتن زانوها به صورت کاملا صاف و جدا از زمین</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>قرار نگرفتن پنجه پا روی زمین</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت تنه(فاصله asis از ارتفاع بهینه کمتر باشد</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت تنه(فاصله asis از ارتفاع بهینه بیشتر باشد</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>اجرای آزمون،ناتوان از اجرای آزمون بدون قرار گرفتن زانو روی زمین</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>اجرای آزمون قرار دادن زانوها روی زمین و انجام آزمون</Text>


                        </View>
                    </View>

                </View>
                <View style={styles.title}>
                    <Text>
                        {'activeStraightLegRaise'+ ':' + this.state.s1}
                    </Text>
                </View>
                <View style={{flexDirection:'row',width:'100%'}}>

                <ListView

                    style={{ width: '25%', backgroundColor: '#00000000' }}
                    dataSource={this.state.data6}
                    renderRow={(rowData, rowID, sectionID) =>
                        <View style={styles.item}>
                            <Text style={rowData.s1 + rowData.s2 + rowData.s3 >=2 ? styles.scoreGreen:styles.scoreRed}>{rowData.score}</Text>
                            <Icon name="ios-hand-outline" style={rowData.s1 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s2 === true ? styles.true : styles.false} />
                            <Icon name="ios-hand-outline" style={rowData.s3 === true ? styles.true : styles.false} />

                        </View>
                    }>
                </ListView>
                    <View style={{width:'75%',backgroundColor:'white',flexDirection:'row'}}>
                        <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:50,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                        </View>
                        <View style={{width:'70%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>فلکشن زانوی پای متحرک</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>فلکشن زانوی پای روی زمین</Text>
                            <Text style={{height:100,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>وضعیت کمر در لامبار</Text>

                        </View>

                    </View>
                </View>
                    <View style={{flexDirection:'row',width:'100%'}}>

                <ListView

                    style={{ width: '25%', backgroundColor: '#00000000' }}
                    dataSource={this.state.data7}
                    renderRow={(rowData, rowID, sectionID) =>
                        <View style={{flexDirection:'column',height:75}}>
                            <Text  style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>{rowData.angle}</Text>
                            <Text  style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>{rowData.score}</Text>
                            <Text  style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>{rowData.shadow}</Text>

                        </View>
                    }>
                </ListView>
                    <View style={{width:'75%',backgroundColor:'white',flexDirection:'row'}}>
                            <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            </View>
                            <View style={{width:'70%',flexDirection:'column',backgroundColor:'white'}}>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                            </View>

                        </View>

                </View>
                <View style={styles.title}>
                    <Text>
                        { 'activeStraightSideLegRaise' + ':' + this.state.s2}
                    </Text>
                </View>
                    <View style={{flexDirection:'row',width:'100%'}}>

                <ListView

                    style={{ width: '25%', backgroundColor: '#00000000' }}
                    dataSource={this.state.data8}
                    renderRow={(rowData, rowID, sectionID) =>
                        <View style={{flexDirection:'column',height:75}}>
                            <Text  style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>{rowData.angle}</Text>
                            <Text  style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>{rowData.score}</Text>
                            <Text  style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>{rowData.shadow}</Text>

                        </View>
                    }>
                </ListView>
                    <View style={{width:'75%',backgroundColor:'white',flexDirection:'row'}}>
                            <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                                <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>
                            </View>
                            <View style={{width:'70%',flexDirection:'column',backgroundColor:'white'}}>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>نمره</Text>
                                <Text style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>طول سایه</Text>

                            </View>

                        </View>

                </View>
                <View style={styles.title}>
                    <Text>
                        {'shoulderMobility' + ':' + this.state.s7}
                    </Text>
                </View>
                <View style={{flexDirection:'row',width:'100%'}}>

                    <ListView

                        style={{ width: '25%', backgroundColor: '#00000000' }}
                        dataSource={this.state.data9}
                        renderRow={(rowData, rowID, sectionID) =>
                            <View style={{flexDirection:'column',height:25}}>
                                <Text  style={{height:25,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>{rowData}</Text>

                            </View>
                        }>
                    </ListView>
                    <View style={{width:'75%',height:300,backgroundColor:'white',flexDirection:'row'}}>
                        <View style={{width:'20%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>چپ</Text>
                            <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>راست</Text>

                        </View>
                        <View style={{width:'70%',flexDirection:'column',backgroundColor:'white'}}>
                            <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>

                            <Text style={{height:75,textAlign:'center',borderWidth:1,borderColor:'#013243'}}>زاویه</Text>


                        </View>

                    </View>

                </View>
                </Container>

            </ScrollView>

        )
    }
}
module.export = Details;