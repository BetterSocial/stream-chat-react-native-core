import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../../contexts/themeContext/ThemeContext';
import { useTranslationContext } from '../../contexts/translationContext/TranslationContext';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    width: '100%',
  },
  errorText: {
    fontSize: 12,
    textAlign: 'center'
  },
});

export const ChannelListHeaderNetworkDownIndicator: React.FC = () => {
  const {
    theme: {
      channelListHeaderErrorIndicator: { container, errorText },
      colors: { grey, white, accent_red },
    },
  } = useTheme();
  const { t } = useTranslationContext();

  return (
    <View style={[styles.container, { backgroundColor: `${grey}E6` }, container]}>
      <Text style={[styles.errorText, { color: accent_red }, errorText]}>{t('NoNetwork')}</Text>
    </View>
  );
};

ChannelListHeaderNetworkDownIndicator.displayName =
  'ChannelListHeaderNetworkDownIndicator{channelListHeaderErrorIndicator}';
