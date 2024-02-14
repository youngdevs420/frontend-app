<script setup>


</script>

<template>
    <div class="sections">
        <div class="section first-section">
            
        </div>
        <div class="section second-section">
            <!-- <h1>This is second section</h1> -->
        </div>
        <div class="section third-section">
            <!-- <h1>This is Third section</h1> -->
        </div>
    </div>
</template>


<style>
.sections {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    scroll-behavior: smooth;
    white-space: nowrap; 
    /* border: 2px solid red; */
}

.sections .section {
    display: inline-block; /* Display sections in a row */
    vertical-align: top;
    height: 100vh;
    min-width: 100vw; /* Ensure each section takes at least the viewport width */
    box-sizing: border-box;
}

.sections .first-section {
    /* border: 2px solid green; */
}


.sections .third-section {
    /* border: 2px solid yellow; */
}

.sections .fourth-section {
    /* border: 2px solid pink; */
}

</style>