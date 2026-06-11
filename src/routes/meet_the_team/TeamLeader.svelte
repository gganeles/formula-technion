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

<article class="leader-card group">
    <div class="leader-image-wrap">
        <div class="leader-badge">Leader</div>
        <img
            src={imageSrc}
            alt={name}
            loading="lazy"
            on:error={useFallback}
            style={`object-position: ${image_position};`}
            class="leader-image"
        />
    </div>

    <h3 class="leader-name">
        {name}
    </h3>

    {#if role}
        <p class="leader-role">
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
    .leader-card {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    /* Around 2.5x the visual area of a regular member image */
    .leader-image-wrap {
        position: relative;
        width: min(100%, 320px);
        aspect-ratio: 4 / 5;
        overflow: hidden;
        border-radius: 2rem;
        background: #f1f5f9;
        box-shadow: 0 18px 45px rgb(15 23 42 / 0.22);
        border: 1px solid rgb(255 255 255 / 0.35);
    }

    .leader-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        z-index: 2;
        border-radius: 999px;
        background: rgb(255 255 255 / 0.92);
        padding: 0.35rem 0.8rem;
        font-size: 0.72rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #076093;
        box-shadow: 0 8px 20px rgb(15 23 42 / 0.16);
    }

    .leader-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 250ms ease;
    }

    .leader-card:hover .leader-image {
        transform: scale(1.04);
    }

    .leader-name {
        margin-top: 1.4rem;
        font-size: 1.9rem;
        font-weight: 900;
        line-height: 1.1;
    }

    .leader-role {
        margin-top: 0.35rem;
        font-size: 1.05rem;
        line-height: 1.3;
        opacity: 0.76;
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
        .leader-image-wrap {
            width: min(100%, 280px);
        }

        .leader-name {
            font-size: 1.45rem;
        }

        .leader-role {
            font-size: 0.95rem;
        }
    }
</style>
