import { styles } from "./styles";
import { ActivityIndicator } from "react-native";
import { theme } from '@/theme';

export function Loading() {
  return (
    <ActivityIndicator style={styles.loading} color={theme.colors.blue}/>
  )
}