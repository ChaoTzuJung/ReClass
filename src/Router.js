import React,{Component}from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator, navigate, DrawerView } from 'react-navigation';
import { TouchableHighlight, Image, ScrollView, View,Text } from 'react-native';
import Logic from './components/Logic';
import Create from './components/Create';
import Setting from './components/Setting';
import Open from './components/Open';
import Ppt from './components/Ppt';
import Sat from './components/Sat';
import Mon from './components/Mon';
import Tue from './components/Tue';
import GoPpt2 from './components/GoPpt2';
import GoPpt1 from './components/GoPpt1';
import { Card, PricingCard, Tile, Button, Icon,Avatar } from 'react-native-elements';

show = () => {
    this.setModalVisible(true)
  };
//----------------------------------------------------------------------------------------------------StackNavigator_1__從「我的講義」到「下載ppt」
export const PptStack = StackNavigator({
  Ppt: {
    screen: Ppt,
        navigationOptions: {
        header: ({ navigate }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },
        
        left: (
          <Icon
            name='menu'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />

        ),
      })
    },
  },
    GoPpt1:{
     screen:GoPpt1,
        navigationOptions: {
        header: ({ goBack }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },
  
        left: (
          <Icon
            name='keyboard-arrow-left'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => { goBack() }}
          />

        ),
      })
    },
  },
  GoPpt2:{
     screen:GoPpt2,
        navigationOptions: {
        header: ({ goBack }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },
  
        left: (
          <Icon
            name='keyboard-arrow-left'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => { goBack() }}
          />

        ),
      })
    },
  }
},
{
  //headerMode: 'none'    //加了叉叉會不見
}
);
//---------------------------------------------------------------------------------------------------------StackNavigator_2__從「我要開課」到「我的帳戶」
export const OpenStack = StackNavigator({
  Open: {
    screen: Open,
            navigationOptions: {
        header: ({ navigate }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },

        left: (
          <Icon
            name='menu'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />

        ),
      })
    },
  },
},
{
  //headerMode: 'none'    //加了叉叉會不見
}
);
export const SettingStack = StackNavigator({
  Setting: {
    screen: Setting,
        navigationOptions: {
        header: ({ navigate }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: {
          backgroundColor: '#01C497',
          height: 69
        },
        left: (
          <Icon
            name='menu'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />

        ),
      })
    },
  },
},
{
  //headerMode: 'none'    //加了叉叉會不見
}
);
export const SatStack = StackNavigator({
  Sat: {
    screen: Sat,
    
  },
},
{
  headerMode: 'none' ,   //加了叉叉會不見
  
}
);
export const MonStack = StackNavigator({
  Mon: {
    screen: Mon,

  },
},
{
  headerMode: 'none'    //加了叉叉會不見
}
);

export const TueStack = StackNavigator({
  Tue: {
    screen: Tue,

  },
},
{
  headerMode: 'none'    //加了叉叉會不見
}
);
//----------------------------------------------------------------------------TabRouter＿＿ 製作tabbar
export const TabRouter = TabNavigator(
  {
    SatStack: {
      screen: SatStack,
      navigationOptions: {
        tabBar: {
          label: 'SAT',
          
        },
      },
    },
    MonStack: {
      screen: MonStack,
      navigationOptions: {
        tabBar: {
          label: 'MON',
          
        },
      },
    },
    TueStack: {
      screen: TueStack,
      navigationOptions: {
        tabBar: {
          label: 'TUE',
        
        },
      },
    },
  },
  {
    animationEnabled: 'true',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#FF8050',
      labelStyle: {
        fontSize: 18,
        position: 'absolute',
        bottom: 12,
        left: 44

      },
      style: {
        backgroundColor: '#fff',




      },
    }
  }
);
//-------------------------------------------------------------------------StackNavigator_2__從「登入畫面」到「我的帳戶」LoginStack
export const LogicStack = StackNavigator({
  //登入畫面
  Logic: {
    screen: Logic,
    navigationOptions: {
      header: {
        style: { position: "absolute" },
        //header: { visible: false } 
      }
    },
  },
  //建立帳戶
  Create: {
    screen: Create,
    navigationOptions: {
      header: ({ goBack }) => ({
        style: { position: "absolute", top: 10, left: 20, zIndex: 8 },
        left: (
          <Icon
            name='clear'
            color='#fff'
            size={20}
            iconStyle={{ marginRight: 10 }}
            onPress={() => { goBack() }}       
          /> 
        ),
      }),
    },
  },
  //引入Tabbar的出現，並讓登入鍵可以按下出發進入主畫面
  TabRouter: {
    screen: TabRouter,
    navigationOptions: {
      header: ({ navigate }) => ({
        title: <Image source={require('./img/RC-icon@1x.png')} />,
        style: { backgroundColor: '#01C497',  height: 69 },
        right: (
          <Icon
            name='search'
            color='#fff'
            size={36}
            iconStyle={{ marginRight: 10 }}
          />
        ),
          left: (
            <Icon
            name='menu'
            color='#fff'
            size={36}
            iconStyle={{ marginLeft: 10 }}
            onPress={() => navigate('DrawerOpen')}
          />
        ),
      })
    },
  },
  
},
{
  //headerMode: 'float' ,   //加了叉叉會不見
  //headerMode: 'screen' ,
  mode:'modal'//card
}
);

//-------------------------------------------------------------------DrawerRouter＿ 漢堡選單
export const DrawerRouter = DrawerNavigator(
  {
    //我的課程
    classStack: {
      screen: LogicStack,
      navigationOptions: {
        drawer: {
          label: '我的課程',
          icon: ({ tintColor }) => <Image source={require('./img/book.png')} />,
        },
      },
    },
    //我的講義
    pptStack: {
      screen: PptStack,
      navigationOptions: {
        drawer: {
          label: '我的講義',
          icon: ({ tintColor }) => <Image source={require('./img/hw.png')} />,
        },
      },
    },
    //我要開課
    openStack: {
      screen: OpenStack,
      navigationOptions: {
        drawer: {
          label: '我要開課',
          icon: ({ tintColor }) => <Image source={require('./img/pencil.png')} />,
        },
      },
    },

    //我的帳戶         
    settingStack: {
      screen: SettingStack,
      navigationOptions: {
        drawer: {
          label: '我要帳戶',
          icon: ({ tintColor }) => <Image source={require('./img/person.png')} />,
        },
      },
    },
    //登出
    LogoutStack: {
      screen: Logic,
      navigationOptions: {
        drawer: {
          label: '登出',
          icon: ({ tintColor }) => <Image source={require('./img/log-out.png')} />
        },
      },
    },
  },

  {
    initialRouteName: 'classStack',
    contentOptions: {
      activeTintColor: '#fff',
      //activeBackgroundColor:'#3CCEB0',
      inactiveTintColor: '#fff',
      style: {

      },
      //labelStyle
    },
    drawerWidth: 300,
    // drawerPosition: 'right',
    contentComponent:
    props => (
      <ScrollView style={styles.container}>
        <View >
          <DrawerView.Items {...props} />
          <Text style={styles.texts}>國立臺北教育大學</Text>
          <Text style={styles.texts1}>110319022</Text>
          <Text style={styles.texts2}>趙子榮</Text>
          <Avatar
            width={60}
            height={60}
            rounded       
            source={require('./img/profile.jpg')}
            containerStyle={{position: 'absolute', bottom: -350, right: 70}}//圖片底下的底圖移動
          />
        </View>
      </ScrollView>
    )
  }
);
//------------------------------------------------------------------------------------------------------------------------CSS Style
const styles = {

  container: {
    backgroundColor: '#3CCEB0'
  },
  texts:{
    fontSize:14,
    color:'white',
    position: 'absolute', bottom: -340 , left:40 
  },
  texts1:{
    fontSize:14,
    color:'white',
    position: 'absolute', bottom: -365 , left:40 
  },
  texts2:{
    fontSize:14,
    color:'white',
    position: 'absolute', bottom: -385 , left:40 
  }
}





