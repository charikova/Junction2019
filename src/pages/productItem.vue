<template>
    <div class="productItem">

    </div>
</template>

<script>
  export default {
    name: "productItem",
    props: ['data']
  };
</script>

<style scoped>
    .productItem {
        display: flex;
        flex-direction: row;
        align-items: center;
        &:not(:last-child) {
            margin-bottom: 10px;
        }
        &-img {
            width: 100px;
            height: 100px;
            border-radius: 3px;
            overflow: hidden;
        }
        &-name {
            margin-left: 10px;
            flex: 1;
        }
        &-counter {

        }
        &-openTrigger {
            padding: 10px;
        }
    }
</style>
