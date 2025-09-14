import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { GlassView } from './GlassView';

interface GlassButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onPress,
  style,
  textStyle,
  variant = 'primary',
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'accent':
        return styles.accent;
      default:
        return styles.primary;
    }
  };

  // Merge styles properly
  const buttonStyle = StyleSheet.flatten([styles.button, getVariantStyle(), style]);
  const textStyleMerged = StyleSheet.flatten([styles.text, textStyle]);

  return (
    <TouchableOpacity onPress={onPress}>
      <GlassView style={buttonStyle}>
        <Text style={textStyleMerged}>
          {children}
        </Text>
      </GlassView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
  },
  secondary: {
    backgroundColor: 'rgba(107, 114, 128, 0.2)',
  },
  accent: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});