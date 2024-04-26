import "../global.css";
import { Slot, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import "@/utils/interop";

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    router.push("/explore");
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      {/*<Stack.Screen name="(public)" options={{ headerShown: false }} />*/}
    </Stack>
  );
}
