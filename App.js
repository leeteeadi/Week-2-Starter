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
      )

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
