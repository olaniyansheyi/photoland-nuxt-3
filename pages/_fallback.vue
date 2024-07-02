<script setup>
import { useError } from "#app";

useError({ statusCode: 404, message: "Page Not Found" });
</script>
