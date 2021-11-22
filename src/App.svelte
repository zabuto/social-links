<script>
    import Profile from './components/Profile.svelte';
    import Social from './components/Social.svelte';

    export let profile_handle, profile_url, social_url;
</script>

<main>
    <Profile handle={profile_handle} url={profile_url}/>
    <Social url={social_url}/>
</main>

<style>
    main {
        padding: 1rem 1.5rem;
        text-align: center;
    }

    @media (min-width: 1024px) {
        main {
            padding-left: 30%;
            padding-right: 30%;
        }
    }

    @media (min-width: 667px) {
        main {
            padding-left: 20%;
            padding-right: 20%;
        }
    }
</style>
