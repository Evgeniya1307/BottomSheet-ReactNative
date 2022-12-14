
import "react-native-gesture-handler";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
  } from "@gorhom/bottom-sheet";
  import { useRef, useState } from "react";
  import { AntDesign } from "@expo/vector-icons";
  import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  useWindowDimensions,
  View,
  Image,
 
} from "react-native";

export default function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [device, setDevice] = useState(false);
  const { width } = useWindowDimensions();
  const [theme, setTheme] = useState("dim");
  const [isOpen, setIsOpen] = useState(false);

  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["25%", "48%", "75%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }


  return (
    <BottomSheetModalProvider>
      <View
        style={[
          styles.container,
          { backgroundColor: isOpen ? "gray" : "white" },
        ]}
      >
      
      <View >{/*img */}
      <Image
        style={styles.tinyLogo}
        source={{
         uri: 'https://thumbs.dreamstime.com/z/%D0%B4%D0%BE%D0%BC%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D1%86%D0%B0-%D0%B8%D0%BB%D0%B8-%D0%B3%D0%BE%D1%80%D0%BD%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D1%8B%D1%85-%D1%83%D1%81%D0%BB%D1%83%D0%B3-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%BE%D1%84%D0%B8%D1%81%D0%B0-194702110.jpg',}}
      />
      </View>
        <Button title="Поиск Горничных..." onPress={handlePresentModal} />
       
        <StatusBar style="auto" />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 50 }}
          onDismiss={() => setIsOpen(false)}
        >
          <View style={styles.contentContainer}>
            <Text style={[styles.title, { marginBottom: 20 }]}>Дополнительные услуги</Text>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Дезинфекционная уборка </Text>
              <Switch
                value={darkmode}
                onChange={() => setDarkmode(!darkmode)}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Мойка окон</Text>
              <Switch value={device} onChange={() => setDevice(!device)} />
            </View>
            <Text style={styles.description}>
            Уборка квартир, домов и офисов
            </Text>
            <View
              style={{
                width: width,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: "gray",
                marginVertical: 30,
              }}
            />
            <Text style={[styles.title, { width: "100%" }]}>Наши услуги</Text>
            <Pressable style={styles.row} onPress={() => setTheme("dim")}>
              <Text style={styles.subtitle}>Простая уборка</Text>
              {theme === "dim" ? (
                <AntDesign name="checkcircle" size={24} color="#4A98E9" />
              ) : (
                <Entypo name="circle" size={24} color="#56636F" />
              )}
            </Pressable>
            <Pressable style={styles.row} onPress={() => setTheme("lightsOut")}>
              <Text style={styles.subtitle}>Генеральная уборка</Text>  
        <StatusBar style="auto" />

              {theme === "lightsOut" ? (
                <AntDesign name="checkcircle" size={24} color="#4A98E9" />
              ) : (
                <Entypo name="circle" size={24} color="#56636F" />
              )}
            </Pressable> 
          </View> 
          <Pressable style={styles.button}>
          <Button title="Заказать" color="#4A98E9" 
          onPress={handlePresentModal} />
         
         </Pressable>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
  },
  tinyLogo:{
    width: 100,
    height: 100,
    borderRadius:12
  }
});