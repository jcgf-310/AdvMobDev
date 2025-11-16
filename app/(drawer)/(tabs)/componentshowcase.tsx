import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ComponentShowcase() {
  const handleLovePress = () => {
    Alert.alert("You gave Miffy some love! ♡");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Miffy</Text>

      <View style={styles.imageBox}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/2c/3d/05/2c3d05ecb3d7c4b4b75eb10a663004e6.jpg",
          }}
          style={styles.image}
          resizeMode="contain"
          accessibilityLabel="Miffy photo"
        />
      </View>

      <Text style={styles.subtitle}>
        Click the button below to give Miffy some love!
      </Text>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.heartButton}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Give Miffy love"
          onPress={handleLovePress}
        >
          <Text style={styles.heartButtonText}>♡</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>⋆˙⟡About Miffy⟡⋆˙</Text>

      <View style={styles.paragraphBox}>
        <Text style={styles.paragraph}>
          Miffy was born in 1955. While on holiday in Egmond aan Zee, Dick Bruna
          would tell his eldest son stories about a little white bunny who
          scampered around the garden of their holiday home. This little bunny
          eventually became the inspiration for Miffy!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 16,
    color: "#2F3E46", // dark for contrast
  },
  imageBox: {
    backgroundColor: "#FFF9E6",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    width: "95%",
  },
  image: {
    width: "100%",
    height: 260,
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 17,
    color: "#2F3E46",
    marginBottom: 12,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonWrapper: {
    width: "65%",
    marginBottom: 20,
    alignItems: "center",
  },
  heartButton: {
    width: "100%",
    backgroundColor: "#ffdef2",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#f2e2ff",
  },
  heartButtonText: {
    fontSize: 20,
    color: "#2F3E46",
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#C2185B",
    textAlign: "center",
  },
  paragraphBox: {
    backgroundColor: "#F0F4C3",
    padding: 16,
    borderRadius: 12,
    width: "92%",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#2F3E46",
    backgroundColor: "#ffffe3", // pale yellow
    padding: 12,
    borderRadius: 10,
    textAlign: "left",
  },
});
