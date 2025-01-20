import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { createClient } from '@dynamic-labs/client';
import { ReactNativeExtension } from '@dynamic-labs/react-native-extension';
import { ViemExtension } from '@dynamic-labs/viem-extension';
import { SolanaExtension } from '@dynamic-labs/solana-extension';
import { ZeroDevExtension } from '@dynamic-labs/zerodev-extension';

export const dynamicClient = createClient({
	// Find your environment id at https://app.dynamic.xyz/dashboard/developer
	environmentId: '234549e4-ce7c-4f2b-b832-0bfe263df48c',

	// Optional:
	appLogoUrl: 'https://demo.dynamic.xyz/favicon-32x32.png',
	appName: 'Dynamic Demo'
})
	.extend(
		ReactNativeExtension({ appOrigin: 'https://REPLACE-WITH-YOUR-DOMAIN' })
	)
	.extend(ViemExtension())
	.extend(SolanaExtension())
	.extend(ZeroDevExtension());

// TODO: Setup passkeys by following https://docs.dynamic.xyz/react-native/setup-passkey

// TODO: Check if I need to fix file resolution error by following
// https://docs.dynamic.xyz/react-native/account-abstraction#resolve-file-resolution-error-optional

export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={
				<Image
					source={require('@/assets/images/partial-react-logo.png')}
					style={styles.reactLogo}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type='title'>Welcome!</ThemedText>
				<HelloWave />
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type='subtitle'>Step 1: Try it</ThemedText>
				<ThemedText>
					Edit{' '}
					<ThemedText type='defaultSemiBold'>app/(tabs)/index.tsx</ThemedText>{' '}
					to see changes. Press{' '}
					<ThemedText type='defaultSemiBold'>
						{Platform.select({
							ios: 'cmd + d',
							android: 'cmd + m',
							web: 'F12'
						})}
					</ThemedText>{' '}
					to open developer tools.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type='subtitle'>Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type='subtitle'>Step 3: Get a fresh start</ThemedText>
				<ThemedText>
					When you're ready, run{' '}
					<ThemedText type='defaultSemiBold'>npm run reset-project</ThemedText>{' '}
					to get a fresh <ThemedText type='defaultSemiBold'>app</ThemedText>{' '}
					directory. This will move the current{' '}
					<ThemedText type='defaultSemiBold'>app</ThemedText> to{' '}
					<ThemedText type='defaultSemiBold'>app-example</ThemedText>.
				</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute'
	}
});
