<template>
    <header>
        <div class="logo">
            <p class="normal">Clib</p>
            <p class="styled">Sync</p>
        </div>
    </header>
</template>
  
<script>
export default {
    name: 'Header'
}
</script>
  
<style scoped>
header {
    position: absolute;
    height: 70px;
    width: 265px;
    line-height: 1.5;
    margin-top: 20px;
}

header .logo {
    position: absolute;
    left: 40%;
    background-image: url(../assets/logo1.png);
    background-repeat: no-repeat;
    width: 55px;
    height: 57.2px;
    background-size: 100%;
}

p.normal {
    position: absolute;
    width: 43px;
    height: 14px;
    left: 55px;
    top: 0px;
    font-family: 'Noto Serif Khojki', serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 14px;
    /* identical to box height, or 83% */
    display: flex;
    align-items: center;
    color: #000000;
}

p.styled {
    position: absolute;
    width: 38px;
    height: 16px;
    left: 90px;
    top: 19px;
    font-family: 'Pacifico', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    /* identical to box height, or 89% */
    display: flex;
    align-items: center;
    color: #000000;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  } */</style>