import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { GlassView } from './GlassView';

interface GlassCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style }) => {
  const cardStyle = StyleSheet.flatten([styles.card, style]);
  
  return (
    <GlassView style={cardStyle}>
      {children}
    </GlassView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
  },
});