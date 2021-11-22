<script>
    export let handle, url;
    let src = 'images/profile-picture.png';

    function handleClick() {
        window.location = url;
    }
</script>

<div class="profile" on:click={handleClick}>
    <div class="profile-picture-container">
        <div class="profile-picture">
            <img src={src} alt="">
        </div>
    </div>
    <div class="profile-name">{handle}</div>
</div>

<style>
    .profile {
        display: inline-block;
        width: 95px;
        height: 95px;
        text-align: center;
        cursor: pointer;
    }

    .profile-picture-container {
        display: inline-block;
        width: 88px;
        height: 88px;
        border: 3px solid #808080;
        border-radius: 50%;
    }

    .profile-picture {
        display: inline-block;
        width: 82px;
        height: 82px;
        border: 3px solid #ffffff;
        border-radius: 50%;
        overflow: hidden;
    }

    .profile-picture img {
        height: 100%;
        width: 100%
    }

    .profile-name {
        margin: .25em 0;
        display: block;
        color: #aaaaaa;
        font-size: .95em;
    }

    .profile:hover .profile-name {
        color: #333;
    }
</style>
