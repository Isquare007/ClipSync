
<template>
    <div class="four-container">
        <h1 class="four">
            404.
        </h1>
        <h1 class="page">
            Page Not Found
        </h1>
        <p class="p-style">The page you're looking for could not be found.</p>
        <img src="../assets/vector.svg" class="vector">
        <img src="../assets/vector-1.svg" class="vector1">
        <img src="../assets/vector-2.svg" class="vector2">
        <img src="../assets/vector-3.svg" class="vector3">
        <img src="../assets/head.svg" class="head">
        <img src="../assets/main1.svg" class="main1">
        <img src="../assets/main2.svg" class="main2">
    </div>
</template>

<script>
export default {
    name: 'PageNotFound'
}
</script>


<style scoped>
.four-container {
    position: relative;
    width: 1440px;
    height: 750px;
}

.four {
    position: absolute;
    left: 39.31%;
    right: 54.17%;
    top: 31.84%;
    bottom: 61.52%;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 500;
    font-size: 52px;
    line-height: 56px;
    /* identical to box height, or 131% */

    display: flex;
    align-items: center;

    color: #1C1C1C;
}

.page {
    position: absolute;
    left: 60.21%;
    right: 15%;
    top: 21.97%;
    bottom: 71.39%;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 48px;
    /* identical to box height, or 142% */

    display: flex;
    align-items: center;

    color: #1C1C1C;
}

.p-style {
    position: absolute;
    left: 54.03%;
    right: 10%;
    top: 38.48%;
    bottom: 58.79%;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height, or 117% */

    display: flex;
    align-items: center;

    color: #1C1C1C;
}

.vector1 {
    position: absolute;
    left: 88.21%;
    right: 3.59%;
    top: 79.9%;
    bottom: 5.45%;
}

.vector {
    position: absolute;
    left: 56.96%;
    right: 34.84%;
    top: 95.58%;
    bottom: -1.22%;
}

.vector3 {
    position: absolute;
    left: 0.13%;
    right: 92.09%;
    top: 34.21%;
    bottom: 51.92%;
}

.vector2 {
    position: absolute;
    left: 15.78%;
    right: 76.44%;
    top: 11.08%;
    bottom: 75.06%;
}

.head {
    position: absolute;
    left: 1.67%;
    right: 55.56%;
    top: 46.88%;
    bottom: -1.95%;
    max-height: 450px;
}

.main1 {
    position: absolute;
    left: 42.74%;
    right: 48.68%;
    top: 27.73%;
    bottom: 55.47%;
}

.main2 {
    position: absolute;
    left: 53.67%;
    right: 28.89%;
    top: 13.43%;
    bottom: 67.77%;
}

/* .contents {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #000002;
    width: 60%;
    height: auto;
} */</style>
