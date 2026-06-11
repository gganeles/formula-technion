<script>
    import { DEFAULT_MEMBER_IMAGE } from "./teamData.js";

    export let name;
    export let picture_url;
    export let role;
    export let image_position = "50% 50%";
    export let linkedin_url = "";

    let imageSrc;
    $: imageSrc = picture_url || DEFAULT_MEMBER_IMAGE;

    function useFallback() {
        imageSrc = DEFAULT_MEMBER_IMAGE;
        image_position = "50% 50%";
    }
</script>

<article class="member-card group">
    <div class="member-image-wrap">
        <img
            src={imageSrc}
            alt={name}
            loading="lazy"
            on:error={useFallback}
            style={`object-position: ${image_position};`}
            class="member-image"
        />
    </div>

    <h3 class="member-name">
        {name}
    </h3>

    {#if role}
        <p class="member-role">
            {role}
        </p>
    {/if}

    {#if linkedin_url}
        <a
            class="linkedin-link"
            href={linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name}'s LinkedIn profile`}
            title="LinkedIn"
        >
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="linkedin-icon"
            >
                <path
                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
                    fill="currentColor"
                />
            </svg>
        </a>
    {/if}
</article>

<style>
    .member-card {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .member-image-wrap {
        width: 100%;
        aspect-ratio: 4 / 5;
        overflow: hidden;
        border-radius: 1.25rem;
        background: #f1f5f9;
        box-shadow: 0 10px 25px rgb(15 23 42 / 0.12);
        border: 1px solid rgb(15 23 42 / 0.08);
    }

    .member-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 250ms ease;
    }

    .member-card:hover .member-image {
        transform: scale(1.04);
    }

    .member-name {
        margin-top: 1rem;
        font-size: 1.05rem;
        font-weight: 800;
        line-height: 1.15;
    }

    .member-role {
        margin-top: 0.35rem;
        font-size: 0.93rem;
        line-height: 1.3;
        opacity: 0.72;
    }



    .linkedin-link {
        margin-top: 0.85rem;
        width: 2.25rem;
        height: 2.25rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        color: currentColor;
        background: rgb(255 255 255 / 0.16);
        border: 1px solid currentColor;
        opacity: 0.82;
        transition:
            transform 180ms ease,
            opacity 180ms ease,
            background-color 180ms ease;
    }

    .linkedin-link:hover {
        transform: translateY(-2px);
        opacity: 1;
        background: rgb(255 255 255 / 0.28);
        text-decoration: none;
    }

    .linkedin-icon {
        width: 1.05rem;
        height: 1.05rem;
        display: block;
    }

    @media (max-width: 640px) {
        .member-name {
            font-size: 0.9rem;
        }

        .member-role {
            font-size: 0.78rem;
        }
    }
</style>
