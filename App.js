import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import  {MagnifyingGlassIcon, EllipsisVerticalIcon, UserIcon}from 'react-native-heroicons/solid'
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function App() {
  return (

<View style= {{flexDirection: 'column', flex: 1, backgroundColor: 'black'}}>

<View style= {{alignSelf:'center', marginTop: 50}}>
<TouchableOpacity style={{flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between',
paddingLeft: 5, borderRadius: 25,
 width: 320, height: 50, backgroundColor: 'gray'}}>
<View style = {{flexDirection: 'row', paddingLeft: 20, alignItems: 'center', justifyContent: 'flex-start'}}>
  <MagnifyingGlassIcon size= {15} color= 'white'></MagnifyingGlassIcon>
<Text style= {{ margin: 10, fontSize:16, textAlign: 'left', color: 'white'}}>Search links</Text>
</View>
<EllipsisVerticalIcon size = {25} color = 'white' style={{marginRight: 10}}></EllipsisVerticalIcon>
</TouchableOpacity>
</View>

<ScrollView>

<View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 20}}>  
  <View style= {{borderRadius: 30, width: 60, height: 60, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
  <UserIcon size= {40} color= 'black'></UserIcon>
  </View>
  <View style = {{flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 10}}>
  <Text style = {{fontSize: 18, fontWeight: '600', color: 'white'}}>Opera</Text>
  <Text style = {{color: 'white', width: 200}}>Never miss a football moment again! Get match updates and scores......</Text>
  </View>

  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Text style={{color: 'white', paddingLeft: 10, paddingRight: 10 }}>Thu</Text>
    <View style={{width: 8, height: 8, borderRadius: 50, backgroundColor: 'green', marginTop: 6}}></View>
  </View>
  
</View>

<View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 20}}>
  <View style= {{borderRadius: 30, width: 60, height: 60, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
  <UserIcon size= {40} color= 'black'></UserIcon>
  </View>
  <View style = {{flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 10}}>
  <Text style = {{fontSize: 18, fontWeight: '600', color: 'white'}}>Opera</Text>
  <Text style ={{color: 'white', width: 200}}>Never miss a football moment again! Get match updates and scores......</Text>
  </View>

  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Text style={{color: 'white', paddingLeft: 10, paddingRight: 10 }}>Thu</Text>
    <View style={{width: 8, height: 8, borderRadius: 50, backgroundColor: 'green', marginTop: 6}}></View>
  </View>
  
</View>

<View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 20}}>
  <View style= {{borderRadius: 30, width: 60, height: 60, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center'}}>
  <UserIcon size= {40} color= 'black'></UserIcon>
  </View>
  <View style = {{flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 10}}>
  <Text style = {{fontSize: 18, fontWeight: '600', color: 'white'}}>Opera</Text>
  <Text style ={{color: 'white', width: 200}}>Never miss a football moment again! Get match updates and scores......</Text>
  </View>

  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Text style={{color: 'white', paddingLeft: 10, paddingRight: 10 }}>Thu</Text>
    <View style={{width: 8, height: 8, borderRadius: 50, backgroundColor: 'green', marginTop: 6}}></View>
  </View>
  
</View>

<View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 20}}>
  <View style= {{borderRadius: 30, width: 60, height: 60, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
  <UserIcon size= {40} color= 'black'></UserIcon>
  </View>
  <View style = {{flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 10}}>
  <Text style = {{fontSize: 18, fontWeight: '600', color: 'white'}}>Opera</Text>
  <Text style ={{color: 'white', width: 200}}>Never miss a football moment again! Get match updates and scores......</Text>
  </View>

  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Text style={{color: 'white', paddingLeft: 10, paddingRight: 10 }}>Thu</Text>
    <View style={{width: 8, height: 8, borderRadius: 50, backgroundColor: 'green', marginTop: 6}}></View>
  </View>
  
</View>

<View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 20}}>
  <View style= {{borderRadius: 30, width: 60, height: 60, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
  <UserIcon size= {40} color= 'black'></UserIcon>
  </View>
  <View style = {{flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 10}}>
  <Text style = {{fontSize: 18, fontWeight: '600', color: 'white'}}>Opera</Text>
  <Text style ={{color: 'white', width: 200}}>Never miss a football moment again! Get match updates and scores......</Text>
  </View>

  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Text style={{color: 'white', paddingLeft: 10, paddingRight: 10 }}>Thu</Text>
    <View style={{width: 8, height: 8, borderRadius: 50, backgroundColor: 'green', marginTop: 6}}></View>
  </View>
  
</View>

<View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 20}}>
  <View style= {{borderRadius: 30, width: 60, height: 60, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
  <UserIcon size= {40} color= 'black'></UserIcon>
  </View>
  <View style = {{flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 10}}>
  <Text style = {{fontSize: 18, fontWeight: '600', color: 'white'}}>Opera</Text>
  <Text style ={{color: 'white', width: 200}}>Never miss a football moment again! Get match updates and scores......</Text>
  </View>

  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Text style={{color: 'white', paddingLeft: 10, paddingRight: 10 }}>Thu</Text>
    <View style={{width: 8, height: 8, borderRadius: 50, backgroundColor: 'yellow ', marginTop: 6}}></View>
  </View>
  
</View>

<View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 20}}>
  <View style= {{borderRadius: 30, width: 60, height: 60, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center'}}>
  <UserIcon size= {40} color= 'black'></UserIcon>
  </View>
  <View style = {{flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 10}}>
  <Text style = {{fontSize: 18, fontWeight: '600', color: 'white'}}>Opera</Text>
  <Text style ={{color: 'white', width: 200}}>Never miss a football moment again! Get match updates and scores......</Text>
  </View>

  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Text style={{color: 'white', paddingLeft: 10, paddingRight: 10 }}>Thu</Text>
    <View style={{width: 8, height: 8, borderRadius: 50, backgroundColor: 'green', marginTop: 6}}></View>
  </View>
  
</View>

<View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 20}}>
  <View style= {{borderRadius: 30, width: 60, height: 60, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center'}}>
  <UserIcon size= {40} color= 'black'></UserIcon>
  </View>
  <View style = {{flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 10}}>
  <Text style = {{fontSize: 18, fontWeight: '600', color: 'white'}}>Opera</Text>
  <Text style ={{color: 'white', width: 200}}>Never miss a football moment again! Get match updates and scores......</Text>
  </View>

  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
    <Text style={{color: 'white', paddingLeft: 10, paddingRight: 10 }}>Thu</Text>
    <View style={{width: 8, height: 8, borderRadius: 50, backgroundColor: 'green', marginTop: 6}}></View>
  </View>
  
</View>
</ScrollView>

</View>
 );
}


