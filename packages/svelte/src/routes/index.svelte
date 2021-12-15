<script lang="ts">
	import Widget from '$lib/Widget.svelte';

	const config = {
		widgetLink: new URL('https://demo.mcaptcha.org/widget/?sitekey=foo')
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Widget {config} />
