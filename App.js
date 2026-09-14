import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <View style={styles.container}>
      {currentScreen === 'home' && (
        <>
          <Text style={styles.title}>HomeCare</Text>

          <Text style={styles.subtitle}>
            Keep your home running smoothly
          </Text>

          <View style={styles.summaryContainer}>
            <View style={styles.summaryCard}>
              <Text style={styles.number}>3</Text>
              <Text>Upcoming</Text>
            </View>

            <View style={styles.summaryCard}>
              <Text style={styles.number}>1</Text>
              <Text>Overdue</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>
            Upcoming Maintenance
          </Text>

          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>
              Replace HVAC Filter
            </Text>

            <Text>Due September 20</Text>
            <Text>HVAC</Text>
          </View>

          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>
              Test Smoke Detectors
            </Text>

            <Text>Due October 1</Text>
            <Text>Safety</Text>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => setCurrentScreen('addTask')}
          >
            <Text style={styles.buttonText}>
              + Add Maintenance Task
            </Text>
          </Pressable>
        </>
      )}

      {currentScreen === 'addTask' && (
        <>
          <Pressable
            onPress={() => setCurrentScreen('home')}
          >
            <Text style={styles.backButton}>
              ← Back
            </Text>
          </Pressable>

          <Text style={styles.title}>
            Add Maintenance Task
          </Text>

          <Text style={styles.subtitle}>
            We will add the form here next.
          </Text>
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfbf4',
    padding: 24,
    paddingTop: 60,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 30,
  },

  summaryContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: '#fcfbf4',
    padding: 20,
    borderRadius: 12,
  },

  number: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  taskCard: {
    backgroundColor: '#fcfbf4',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },

  taskTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  button: {
    backgroundColor: '#2d3561',
    padding: 16,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fcfbf4',
    fontSize: 16,
    fontWeight: 'bold',
  },

  backButton: {
    fontSize: 16,
    color: '#2d3561',
    marginBottom: 20,
  },
});