<template>
    <div>
        <UserTable/>
        <ProductTable/>
    </div>
</template>
<script>

import UserTable from '@/components/UserTable.vue'
import ProductTable from '@/components/ProductTable.vue';
import UserTableVue from '@/components/UserTable.vue';

export default {
    components: { ProductTable, UserTable },
}
</script>
<style scoped>
* {
    background-color:#E4C2A2 ;
}
</style>