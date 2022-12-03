<script lang="ts">
  export let tags;
</script>

<div class="fixed border-l border-l-[#555454] min-h-screen">
  <div class="p-12">
    <div>
      <div class="relative">
        <svg class="absolute top-2 left-3"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 512 512"
        ><path
          fill="#8A8A8A"
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
        /></svg
      >
      </div>
      <input
        class="bg-[#373535] max-w-[300px] w-full border-2 border-[#615E5E] text-[#8A8A8A] rounded-2xl pl-9 pr-4 py-[3px]"
        type="text"
        placeholder="Search"
      />
    </div>
    <div>
      <p class="text-white my-4">Recommended Posts</p>
      <div class="max-w-[300px]">
        {#each tags as tag}
          <div class="text-white text-sm bg-[#8A8A8A] mr-2 w-fit rounded-xl cursor-pointer mb-2 py-[2px] px-4">{tag}</div>
        {/each}
      </div>
    </div>
  </div>
</div>
