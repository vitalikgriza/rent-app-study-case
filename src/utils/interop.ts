import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { cssInterop } from "nativewind";

cssInterop(SafeAreaView, {
  className: {
    target: "style",
  },
});

cssInterop(Text, {
  className: {
    target: "style",
  },
});

cssInterop(View, {
  className: {
    target: "style",
  },
});
