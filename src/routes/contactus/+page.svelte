<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<svelte:head>
    <title>Contact Us</title>
</svelte:head>
<div class="flex h-[100%] w-full picture">
    <div class="bg-black bg-opacity-30 w-full h-full">
        <div class="pt-20 flex flex-col w-full items-center">
            <div
                class="bg-black flex flex-col bg-opacity-50 sm:rounded-2xl p-4 max-w-[48rem] fill mb-8"
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
                class="bg-black flex flex-row max-sm:flex-col bg-opacity-50 sm:rounded-2xl max-w-[48rem]"
            >
                <div class="p-4 flex-1">
                    <div class="text-3xl max-sm:text-xl">Contact Us!</div>
                    <div>
                        Fill in your details and we will get back to you within
                        1-2 business days.
                    </div>
                    {#if form?.success}
                        <div >Email Sent Successfully!</div>
                    {:else if form?.missing}
                        <div class="text-red-500">Please fill in all of the boxes</div>
                    {:else if form?.failed}
                        <div class="text-red-500">{form?.errorText}</div>
                    {/if}
                </div>
                <form
                    method="POST"
                    class="text-black flex flex-col gap-5 p-4 flex-1"
                    data-static-form-name="contact"
                >
                    <input
                        name="name"
                        placeholder="Name"
                        class="p-2 rounded-md"
                    />
                    <input
                        name="email"
                        placeholder="Email or Phone#"
                        class="p-2 rounded-md"
                    />
                    <input
                        name="subject"
                        placeholder="Subject"
                        class="p-2 rounded-md"
                    />
                    <textarea
                        name="content"
                        placeholder="Message Content"
                        rows="7"
                        style="resize: none;"
                        class="p-2 rounded-md"
                    />
                    <button
                        class="bg-yellow-500 py-1 px-3 rounded-full text-white"
                        type="Submit"
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
