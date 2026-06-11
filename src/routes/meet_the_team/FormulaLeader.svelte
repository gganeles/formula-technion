<script>
    import { DEFAULT_MEMBER_IMAGE } from "./teamData.js";

    export let name;
    export let role;
    export let picture_url;
    export let image_position = "50% 50%";
    export let linkedin_url = "";

    let imageSrc;
    $: imageSrc = picture_url || DEFAULT_MEMBER_IMAGE;

    function useFallback() {
        imageSrc = DEFAULT_MEMBER_IMAGE;
        image_position = "50% 50%";
    }
</script>

<article class="formula-leader-card group">
    <div class="formula-image-wrap">
        <div class="formula-badge">Team Leader</div>
        <img
            src={imageSrc}
            alt={name}
            loading="lazy"
            on:error={useFallback}
            style={`object-position: ${image_position};`}
            class="formula-image"
        />
    </div>

    <h2 class="formula-name">{name}</h2>
    {#if role}
        <p class="formula-role">{role}</p>
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
    .formula-leader-card {
        margin-inline: auto;
        width: min(100%, 460px);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    /* Around 4x the visual area of a regular member image */
    .formula-image-wrap {
        position: relative;
        width: min(100%, 390px);
        aspect-ratio: 4 / 5;
        overflow: hidden;
        border-radius: 2.4rem;
        background: #f1f5f9;
        box-shadow: 0 25px 65px rgb(15 23 42 / 0.22);
        border: 1px solid rgb(7 96 147 / 0.18);
    }

    .formula-badge {
        position: absolute;
        top: 1.2rem;
        left: 1.2rem;
        z-index: 2;
        border-radius: 999px;
        background: #076093;
        padding: 0.45rem 0.95rem;
        color: white;
        font-size: 0.78rem;
        font-weight: 900;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        box-shadow: 0 8px 20px rgb(15 23 42 / 0.16);
    }

    .formula-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 250ms ease;
    }

    .formula-leader-card:hover .formula-image {
        transform: scale(1.035);
    }

    .formula-name {
        margin-top: 1.5rem;
        font-size: 2.8rem;
        font-weight: 900;
        line-height: 1;
    }

    .formula-role {
        margin-top: 0.55rem;
        font-size: 1.25rem;
        color: rgb(8 47 73 / 0.72);
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
        .formula-image-wrap {
            width: min(100%, 310px);
        }

        .formula-name {
            font-size: 2rem;
        }

        .formula-role {
            font-size: 1rem;
        }
    }
</style>
