<script lang="ts">
	import type { PageData } from './$types';
	import { signOut, signIn } from '@auth/sveltekit/client';

	export let data: PageData;
</script>

{#if data.session?.user}
	<p>You are signed in as {data.session.user.name}.</p>
	<p>
		If the claims were working, you should see an image and an email here, if they are not, you will
		just see a name.
	</p>
	<pre>{JSON.stringify(data.session.user, null, 4)}</pre>
	<button on:click={() => signOut()}>Sign Out</button>
{:else}
	<p>
		Inspect the url that you are sent to, you should see that the claims are incorrectly serialised
		(i.e. multiple times).
	</p>
	<button on:click={() => signIn('twitch')}>Sign in</button>
{/if}

<p style="margin-top:40px">
	If you go directly to the signin page for auth.js (<a href="/auth/signin">here</a>) then restart
	the dev server and without refreshing the page, just click login with Twitch, you should see the
	image and email populated. But doing almost anything else (such as loading this page which calls
	getSession on load), will cause it to not work properly.
</p>
<p>Also if you refresh enough, the dev server will probably crash as it runs out of memory.</p>
