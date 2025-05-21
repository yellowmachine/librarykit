<script lang="ts">
  export let title: string;
  export let author: { name: string };
</script>

<div class="book">
  <h2>{title}</h2>
  <p>Autor: {author.name}</p>
</div>

<style>
  .book {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 1rem;
    margin: 0.5rem 0;
    background: #fafafa;
    max-width: 300px;
  }
  h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }
  p {
    color: #555;
    margin: 0;
  }
</style>
