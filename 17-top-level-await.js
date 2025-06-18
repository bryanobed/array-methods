// ¿Qué es top-level await? En  se añade una característica llamada Top-level await que permite el uso de await aunque no nos encontremos en funciones declaradas como async.

// Ejemplo sin top-level await
{/* <script>
  async function init() {
    const response = await fetch("/robots.txt");
    const data = await response.text();
    return data;
  }

  const data = await init();
  console.log(data);
</script> */}


// Ejemplo con top-level await
{/* <script type="module">
  async function init() {
    const response = await fetch("/robots.txt");
    const data = await response.text();
    return data;
  }

  const data = await init();
  console.log(data);
</script> */}


// Solución en otros entornos que no soportan el top-level await. envolviendo el código en una función asíncrona y auto-ejecutarla
{/* <script>
  async function init() {
    const response = await fetch("/robots.txt");
    const data = await response.text();
    return data;
  }

  (async function() {
    const data = await init();
    console.log(data);
  })();
</script> */}
