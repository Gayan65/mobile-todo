import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { user, isLoadingUser } = useAuth();
    const segment = useSegments();

    useEffect(() => {
        const inAuthGroup = segment[0] === "auth";
        if (!user && !inAuthGroup && !isLoadingUser) {
            router.replace("/auth");
        } else if (user && inAuthGroup && !isLoadingUser) {
            router.replace("/");
        }
    }, [user, segment]);

    return <>{children}</>;
}

export default function RootLayout() {
    return (
        <AuthProvider>
            <RouteGuard>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                </Stack>
            </RouteGuard>
        </AuthProvider>
    );
}
