<script>
    const newsDir = "/images/News/";

    const news = [
        {
            img: "1.png",
            title: "Self-driving cars: The future of Formula racing",
            source: "The Jerusalem Post",
            clickable: true,
            featured: true,
            link: "https://www.jpost.com/business-and-innovation/article-712202?utm_source=chatgpt.com",
        },
        {
            img: "3-2.png",
            title: "Formula Technion Feature",
            source: "Media Coverage",
            clickable: false,
        },
        {
            img: "4.png",
            title: "Formula Technion News",
            source: "Ministry of Foreign Affairs",
            clickable: false,
        },
        {
            img: "5-2.png",
            title: "Technion Race Car Feature",
            source: "Gear",
            clickable: true,
            link: "https://www.gear.co.il/2013_07_02_N01_%D7%9E%D7%9B%D7%95%D7%A0%D7%99%D7%AA_%D7%9E%D7%A8%D7%95%D7%A5_%D7%98%D7%9B%D7%A0%D7%99%D7%95%D7%9F",
        },
        {
            img: "6.png",
            title: "Formula Student 2017",
            source: "Auto News",
            clickable: true,
            link: "https://autonews.co.il/%d7%a4%d7%95%d7%a8%d7%9e%d7%95%d7%9c%d7%94-%d7%a1%d7%98%d7%95%d7%93%d7%a0%d7%98-2017-%d7%9e%d7%a7%d7%95%d7%9d-%d7%a9%d7%9e%d7%99%d7%a0%d7%99-%d7%9c%d7%a0%d7%91%d7%97%d7%a8%d7%aa-%d7%94%d7%98%d7%9b/",
        },
        {
            img: "8.png",
            title: "Pride for Formula Technion",
            source: "Queen of the Road",
            clickable: true,
            link: "https://www.queenoftheroad.co.il/%D7%92%D7%90%D7%95%D7%95%D7%94-%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%AA-%D7%A6%D7%95%D7%95%D7%AA-%D7%A4%D7%95%D7%A8%D7%9E%D7%95%D7%9C%D7%94-%D7%98%D7%9B%D7%A0%D7%99%D7%95%D7%9F-%D7%99%D7%AA/",
        },
        {
            img: "9.png",
            title: "Formula Technion Article",
            source: "Megafon News",
            clickable: true,
            link: "https://megafon-news.co.il/asys/archives/259727",
        },
        {
            img: "10.png",
            title: "Technion Autonomous Electric Vehicle",
            source: "Technion",
            clickable: true,
            link: "https://www.technion.ac.il/blog/2022/07/%D7%9C%D7%A8%D7%90%D7%A9%D7%95%D7%A0%D7%94-%D7%A8%D7%9B%D7%91-%D7%97%D7%A9%D7%9E%D7%9C%D7%99-%D7%90%D7%95%D7%98%D7%95%D7%A0%D7%95%D7%9E%D7%99-%D7%9C%D7%A7%D7%91%D7%95%D7%A6%D7%AA-%D7%A4%D7%95%D7%A8/",
        },
    ];

    const featuredNews = news.find((item) => item.featured) ?? news[0];
    const otherNews = news.filter((item) => item !== featuredNews);

    let selectedImage = "";

    function openPreview(item) {
        if (!item.clickable) {
            selectedImage = newsDir + item.img;
        }
    }

    function closePreview() {
        selectedImage = "";
    }
</script>

<svelte:head>
    <title>News | Formula Technion</title>
    <meta
        name="description"
        content="Formula Technion news, media coverage, articles, and press features."
    />
</svelte:head>

<section class="news-page">
    <section class="news-hero">
        <div class="hero-content">
            <p class="eyebrow">Media & Press</p>
            <h1>Formula Technion in the News</h1>
            <p class="hero-text">
                Discover articles, media features, and press coverage about our
                cars, competitions, engineering work, and team achievements.
            </p>
        </div>
    </section>

    <section class="featured-section">
        <div class="section-heading">
            <p class="section-kicker">Featured Story</p>
            <h2>Latest Highlight</h2>
        </div>

        {#if featuredNews.clickable}
            <a
                class="featured-card"
                href={featuredNews.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read article: ${featuredNews.title}`}
            >
                <div class="featured-image">
                    <img src={newsDir + featuredNews.img} alt={featuredNews.title} />
                </div>

                <div class="featured-info">
                    <p class="source">{featuredNews.source}</p>
                    <h3>{featuredNews.title}</h3>
                    <p class="description">
                        A highlighted media feature about Formula Technion and the
                        team's engineering journey.
                    </p>
                    <span class="button-link">Read full article →</span>
                </div>
            </a>
        {:else}
            <button
                class="featured-card"
                type="button"
                on:click={() => openPreview(featuredNews)}
                aria-label={`Preview image: ${featuredNews.title}`}
            >
                <div class="featured-image">
                    <img src={newsDir + featuredNews.img} alt={featuredNews.title} />
                </div>

                <div class="featured-info">
                    <p class="source">{featuredNews.source}</p>
                    <h3>{featuredNews.title}</h3>
                    <p class="description">
                        A highlighted media feature about Formula Technion and the
                        team's engineering journey.
                    </p>
                    <span class="button-link">Preview image</span>
                </div>
            </button>
        {/if}
    </section>

    <section class="press-section">
        <div class="section-heading">
            <p class="section-kicker">Coverage Archive</p>
            <h2>More From the Press</h2>
        </div>

        <div class="news-grid">
            {#each otherNews as item}
                {#if item.clickable}
                    <a
                        class="news-card"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read article: ${item.title}`}
                    >
                        <div class="card-image">
                            <img src={newsDir + item.img} alt={item.title} />
                        </div>

                        <div class="card-body">
                            <p>{item.source}</p>
                            <h3>{item.title}</h3>
                            <span>Open article →</span>
                        </div>
                    </a>
                {:else}
                    <button
                        class="news-card"
                        type="button"
                        on:click={() => openPreview(item)}
                        aria-label={`Preview image: ${item.title}`}
                    >
                        <div class="card-image">
                            <img src={newsDir + item.img} alt={item.title} />
                        </div>

                        <div class="card-body">
                            <p>{item.source}</p>
                            <h3>{item.title}</h3>
                            <span>Preview image</span>
                        </div>
                    </button>
                {/if}
            {/each}
        </div>
    </section>
</section>

{#if selectedImage}
    <button
        class="modal-backdrop"
        type="button"
        on:click={closePreview}
        aria-label="Close image preview"
    >
        <div class="modal-content" on:click|stopPropagation>
            <button class="close-button" type="button" on:click={closePreview}>
                ×
            </button>
            <img src={selectedImage} alt="Selected news preview" />
        </div>
    </button>
{/if}

<style>
    :global(body) {
        background: #f6f9fc;
    }

    .news-page {
        min-height: 100vh;
        padding-top: 6rem;
        background:
            radial-gradient(circle at 8% 8%, rgba(7, 96, 147, 0.14), transparent 30rem),
            linear-gradient(180deg, #f8fbfd 0%, #ffffff 45%, #f4f8fb 100%);
        color: #082f49;
    }

    .news-hero {
        min-height: 52vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5rem 1.5rem 3rem;
        text-align: center;
    }

    .hero-content {
        max-width: 980px;
    }

    .eyebrow,
    .section-kicker {
        margin: 0 0 0.9rem;
        color: #076093;
        font-size: 0.85rem;
        font-weight: 800;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    .news-hero h1 {
        max-width: 900px;
        margin: 0 auto;
        color: #063b5c;
        font-size: clamp(3rem, 7vw, 6.7rem);
        font-weight: 900;
        line-height: 0.92;
        letter-spacing: -0.05em;
    }

    .hero-text {
        max-width: 720px;
        margin: 1.6rem auto 0;
        color: #486579;
        font-size: clamp(1rem, 2vw, 1.25rem);
        line-height: 1.8;
    }

    .featured-section,
    .press-section {
        width: min(1180px, calc(100% - 2rem));
        margin: 0 auto;
    }

    .section-heading {
        margin-bottom: 1.5rem;
    }

    .section-heading h2 {
        margin: 0;
        color: #063b5c;
        font-size: clamp(2rem, 4vw, 3.4rem);
        font-weight: 900;
        letter-spacing: -0.04em;
    }

    .featured-card {
        width: 100%;
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        gap: 0;
        overflow: hidden;
        border: 1px solid rgba(7, 96, 147, 0.16);
        border-radius: 34px;
        background: #ffffff;
        color: inherit;
        text-align: left;
        text-decoration: none;
        font-family: inherit;
        box-shadow: 0 24px 70px rgba(8, 47, 73, 0.13);
        cursor: pointer;
        transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease;
    }

    .featured-card:hover {
        transform: translateY(-5px);
        border-color: rgba(7, 96, 147, 0.4);
        box-shadow: 0 34px 90px rgba(8, 47, 73, 0.2);
        text-decoration: none;
    }

    .featured-image {
        min-height: 460px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #e8f1f7, #f7fafc);
        padding: 2rem;
    }

    .featured-image img {
        max-width: 100%;
        max-height: 430px;
        object-fit: contain;
        filter: drop-shadow(0 18px 30px rgba(8, 47, 73, 0.16));
        transition: transform 220ms ease;
    }

    .featured-card:hover .featured-image img {
        transform: scale(1.03);
    }

    .featured-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2.4rem;
        background: #076093;
        color: white;
    }

    .source {
        margin: 0 0 1rem;
        color: rgba(255, 255, 255, 0.76);
        font-size: 0.9rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .featured-info h3 {
        margin: 0;
        color: white;
        font-size: clamp(2rem, 4vw, 3.4rem);
        font-weight: 900;
        line-height: 1;
        letter-spacing: -0.04em;
    }

    .description {
        margin: 1.2rem 0 0;
        color: rgba(255, 255, 255, 0.82);
        font-size: 1rem;
        line-height: 1.7;
    }

    .button-link {
        width: fit-content;
        margin-top: 1.7rem;
        display: inline-flex;
        align-items: center;
        border-radius: 999px;
        background: #ffffff;
        color: #076093;
        padding: 0.8rem 1.1rem;
        font-weight: 900;
        font-size: 0.95rem;
    }

    .press-section {
        padding: 5rem 0 6rem;
    }

    .news-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        gap: 1.4rem;
    }

    .news-card {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid rgba(7, 96, 147, 0.12);
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.96);
        color: inherit;
        text-align: left;
        text-decoration: none;
        font-family: inherit;
        padding: 0;
        cursor: pointer;
        box-shadow: 0 18px 45px rgba(8, 47, 73, 0.08);
        transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease;
    }

    .news-card:hover {
        transform: translateY(-6px);
        border-color: rgba(7, 96, 147, 0.35);
        box-shadow: 0 28px 70px rgba(8, 47, 73, 0.16);
        text-decoration: none;
    }

    .card-image {
        height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #eaf2f7;
        padding: 1.3rem;
    }

    .card-image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: transform 220ms ease;
    }

    .news-card:hover .card-image img {
        transform: scale(1.04);
    }

    .card-body {
        padding: 1.25rem 1.25rem 1.35rem;
    }

    .card-body p {
        margin: 0 0 0.45rem;
        color: #557083;
        font-size: 0.82rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .card-body h3 {
        min-height: 3rem;
        margin: 0;
        color: #082f49;
        font-size: 1.2rem;
        font-weight: 900;
        line-height: 1.25;
    }

    .card-body span {
        width: fit-content;
        margin-top: 1rem;
        display: inline-flex;
        border-radius: 999px;
        background: rgba(7, 96, 147, 0.1);
        color: #076093;
        padding: 0.48rem 0.85rem;
        font-size: 0.85rem;
        font-weight: 900;
    }

    .modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        border: 0;
        background: rgba(3, 20, 32, 0.82);
        cursor: zoom-out;
    }

    .modal-content {
        position: relative;
        max-width: min(1000px, 92vw);
        max-height: 88vh;
        cursor: default;
    }

    .modal-content img {
        max-width: 100%;
        max-height: 88vh;
        display: block;
        border-radius: 24px;
        background: white;
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.38);
    }

    .close-button {
        position: absolute;
        top: -1rem;
        right: -1rem;
        width: 2.7rem;
        height: 2.7rem;
        border: 0;
        border-radius: 50%;
        background: white;
        color: #063b5c;
        font-size: 1.8rem;
        line-height: 1;
        cursor: pointer;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
    }

    @media (max-width: 850px) {
        .news-page {
            padding-top: 5.5rem;
        }

        .news-hero {
            min-height: auto;
            padding: 4rem 1rem 2.5rem;
        }

        .featured-card {
            grid-template-columns: 1fr;
        }

        .featured-image {
            min-height: 320px;
        }

        .featured-info {
            padding: 1.7rem;
        }

        .press-section {
            padding-top: 3rem;
        }
    }

    @media (max-width: 520px) {
        .news-hero h1 {
            font-size: 3rem;
        }

        .featured-section,
        .press-section {
            width: min(100% - 1rem, 1180px);
        }

        .featured-card,
        .news-card {
            border-radius: 22px;
        }

        .card-image {
            height: 230px;
        }
    }
</style>