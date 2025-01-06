<script>
    import { enhance } from "$app/forms";

    /** @type {import('./$types').ActionData} */
    export let form
    $: if (form?.success) {
        alert("Email sent successfully.")
    }
</script>

<svelte:head>
    <title>Contact Us</title>
</svelte:head>

<div class="w-full picture absolute h-full">
    <div class="bg-black bg-opacity-30 w-full h-full">
        <div class="pt-20 px-20 max-sm:px-10 flex flex-col w-full items-center">
            <div
                class="h-full bg-black flex flex-row max-sm:flex-col bg-opacity-50 rounded-2xl max-w-[48rem]"
            >
                <div class="p-4 flex-1">
                    <div class="text-3xl max-sm:text-xl">Contact Us!</div>
                    <div>
                        Fill in your details and we will get back to you within
                        1-2 business days.
                    </div>
                    {#if form?.missing}
                        <div class="text-red-500">
                            Please fill in all of the boxes
                        </div>
                    {:else if form?.failed}
                        <div class="text-red-500">{form?.errorText}</div>
                    {/if}
                </div>
                <form
                    method="POST"
                    class="text-black flex flex-col gap-5 p-4 flex-1"
                    use:enhance
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
