import App from './App.svelte';

const main = new App({
    target: document.body,
    props: {
        profile_handle: '@myhandle',
        profile_url: 'https://www.instagram.com/myhandle/',
        social_url: './data/links.json',
    }
});

export default main;
