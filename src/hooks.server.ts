import { SvelteKitAuth } from '@auth/sveltekit';
import { TWITCH_CLIENT_SECRET, TWITCH_CLIENT_ID } from '$env/static/private';
import TwitchProvider from '@auth/core/providers/twitch';

export const handle = SvelteKitAuth({
	providers: [
		TwitchProvider({
			clientId: TWITCH_CLIENT_ID,
			clientSecret: TWITCH_CLIENT_SECRET,
			client: { token_endpoint_auth_method: 'client_secret_post' }
		}) as any // Typings seem broken for a bunch of providers, so just as any for now
	]
});
