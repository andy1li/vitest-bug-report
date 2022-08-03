<script lang="ts">
  import { parseTiptapHtml } from './tiptap'
</script>

<main>
  {JSON.stringify(parseTiptapHtml('<p>Hello, world!</p>'))}
</main>
