<script>
  export let data;
  export let form;

  $: console.log(form?.data);
</script>

<pp class='p-20'>
  <h1>Responses:</h1>
  <div>{form?.data}</div>
  <div>
      {#each data.data as item, i}
          <form class="flex flex-row w-full justify-between">
            <div class="p-5">
              <div>
                Name: {item.name}
              </div>
              <div>
                Email: {item.email}
              </div>
              <div>
                Subject: {item.subject}
              </div>
              <div>
                Message: {item.content}
              </div>
            </div>
            <button type="submit" formmethod="POST" class="m-2 px-2 bg-red-500 text-white" name="id" value="{item.id}">
              delete
            </button>
          </form>
      {/each}
    </div>
</pp>
