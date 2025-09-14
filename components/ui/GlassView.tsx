import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { GlassView as ExpoGlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { View } from 'react-native';

interface GlassViewProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  variant?: 'regular' | 'clear' | 'tinted';
  tintColor?: string;
  interactive?: boolean;
}

export const GlassView: React.FC<GlassViewProps> = ({
  children,
  style,
  variant = 'regular',
  tintColor,
  interactive = false,
}) => {
  if (!isLiquidGlassAvailable()) {
    return (
      <View style={[style, styles.fallback]}>
        {children}
      </View>
    );
  }

  return (
    <ExpoGlassView
      style={[styles.glass, style]}
      glassEffectStyle={variant === 'tinted' ? 'regular' : variant}
      tintColor={tintColor}
      isInteractive={interactive}
    >
      {children}
    </ExpoGlassView>
  );
};

const styles = StyleSheet.create({
  glass: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  fallback: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
  },
});