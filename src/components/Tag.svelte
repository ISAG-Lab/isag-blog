<script lang="ts">
  export let tags;
  let scrollX = 0;
  let scrollEnd = false;
  let scrollElement;

  const scroll = (size: number) => {
    scrollElement.scrollLeft += size;
    scrollX += size;
    if (
      Math.floor(scrollElement.scrollWidth - scrollElement.scrollLeft - 100) <=
      scrollElement.offsetWidth
    ) {
      scrollEnd = true;
    } else {
      scrollEnd = false;
    }
  };
</script>

<div class="text-white mb-8 flex items-center border-b py-3 border-b-[#D9D9D9]">
  {#if scrollX !== 0}
    <button on:click={() => scroll(-80)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 320 512"
      >
        <path
          fill="#FFFFFF"
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </svg>
    </button>
  {/if}
  <div class="overflow-hidden" bind:this={scrollElement}>
    {#each tags as tag}
      <span class="whitespace-nowrap cursor-pointer mx-8 text-sm">{tag}</span>
    {/each}
  </div>
  {#if !scrollEnd || scrollX === 0}
    <button on:click={() => scroll(80)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 320 512"
      >
        <path
          fill="#FFFFFF"
          d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
        />
      </svg>
    </button>
  {/if}
</div>
