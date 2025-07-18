<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting: string;
  if (currentHour < 12) {
    greeting = "¡Buenos días!";
  } else if (currentHour < 19) {
    greeting = "¡Buenas tardes!";
  } else {
    greeting = "¡Buenas noches!";
  }
</script>

<h1 class="text-3xl font-bold text-white">{greeting}</h1>
