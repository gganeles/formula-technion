<script>

    let email = "";
    let subject = "";
    let content = "";
    let name = "";

    let errorText = "";

    const handleClick = async () => {
        if (!email | !subject | !content | !name) {
            errorText = "Please fill in all the required boxes.";
            return;
        }
        const response = await fetch('/contactus', {
			method: 'POST',
			body: JSON.stringify({ name, subject, content, email }),
			headers: {
				'content-type': 'application/json'
			}
		});
        const data = await response.json()
        if (data) {
            email = "";
            subject = "";
            content = "";
            name = "";
            alert("Message sent successfully!");
        } else {
            errorText = typeof data == "string"|typeof data == "boolean"?"error":Object.entries(data)
        }
    };
</script>

<svelte:head>
    <title>Contact Us</title>
</svelte:head>
<div class="picture h-full w-full">
    <div class="bg-black bg-opacity-30 w-full h-full">
        <div class="pt-20 flex flex-col w-full items-center">
            <div
                class="bg-black flex flex-col bg-opacity-50 rounded-2xl p-4 max-w-[48rem] fill mb-8"
            >
                <div class="pb-8 text-lg text-center max-md:text-sm">
                    Apply to join the team:
                </div>
                <div
                    class="flex flex-row max-md:text-sm max-md:flex-wrap gap-2 justify-evenly"
                >
                    <a
                        class="rounded-full"
                        href="https://docs.google.com/forms/d/1RvenXOI3v4pQJXFL-jxb-yZfpDFnwOfScg44gcSiKZA/viewform?edit_requested=true"
                    >
                        Mechanical
                    </a>
                    <a
                        class="rounded-full"
                        href="https://docs.google.com/forms/d/1s0OdI9A3z5d1D5eMdpoqFNhAk9WYXWv7nOh531gD78k/viewform?edit_requested=true"
                    >
                        Electrical
                    </a>
                    <a
                        class="rounded-full"
                        href="https://docs.google.com/forms/d/1AIWhlK4L9dHYkgnrDZkBNFozoVzjkDsjos_uhGM_SXQ/viewform?edit_requested=true"
                    >
                        Autonomous
                    </a>
                    <a
                        class="rounded-full"
                        href="https://docs.google.com/forms/d/1v1hHaa2FxdzGaIvTxrdkJLUpytv0g34p9fEBsCMtwCM/viewform?edit_requested=true"
                    >
                        Aerodynamics
                    </a>
                    <a
                        class="rounded-full"
                        href="https://docs.google.com/forms/d/17lpNpYbqhCHOSb0YK5vY4z6IW6KIGQDbkxIfnnVAYrY/viewform?edit_requested=true"
                    >
                        Logistics
                    </a>
                </div>
            </div>
            <div
                class="bg-black flex flex-row max-sm:flex-col bg-opacity-50 rounded-2xl max-w-[48rem]"
            >
                <div class="p-4 flex-1">
                    <div class="text-3xl max-sm:text-xl">Contact Us!</div>
                    <div>
                        Fill in your details and we will get back to you within
                        1-2 business days.
                    </div>
                    <div class="text-red-500">
                        {errorText}
                    </div>
                </div>
                <form class="text-black flex flex-col gap-5 p-4 flex-1">
                    <input
                        bind:value={name}
                        placeholder="Name"
                        class="p-2 rounded-md"
                    />
                    <input
                        bind:value={email}
                        placeholder="Email or Phone#"
                        class="p-2 rounded-md"
                    />
                    <input
                        bind:value={subject}
                        placeholder="Subject"
                        class="p-2 rounded-md"
                    />
                    <textarea
                        bind:value={content}
                        placeholder="Message Content"
                        rows="7"
                        style="resize: none;"
                        class="p-2 rounded-md"
                    />
                    <button
                        class="bg-yellow-500 py-1 px-3 rounded-full text-white"
                        on:click={handleClick}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<style>
    a {
        background-color: rgb(234 179 8);
        padding: 4px 12px;
    }
    .picture {
        background-image: url("/registerCar.webp");
        background-position: center;
        background-size: cover;
    }
</style>
