import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "./../constant/Colors";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../assets/images/landing.png")}
        style={{
          width: "100%",
          height: "300",
          marginTop: 70,
        }}
      />
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: "100%",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight:'bold',
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: 'outfit-bold'
          }}
        >
          Welcome to Coaching Guru
        </Text>

        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: 'outfit'
          }}
        >
          Transfor your ideas into engaging educational content effectively with
          APP
        </Text>

        <TouchableOpacity onPress={()=>router.push('./auth/signUp')} style={[styles.button]}>
          <Text style={[styles.buttonText, {color: Colors.PRIMARY}]}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>router.push('./auth/signIn')}
          style={[
            styles.button,
            {
              backgroundColor: Colors.PRIMARY,
              borderWidth: 1,
              borderColor: Colors.WHITE,
            },
          ]}
        >
          <Text style={[styles.buttonText, {color: Colors.WHITE}]}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    fontSize: 20,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
  },
});
