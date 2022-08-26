<script setup lang="ts">
import Navigation from "../components/Navigation.vue";
</script>

<template>
<div class="main">
    <div class="left">
        <div class="video"></div>
    </div>
    <div class="right">
        <div class="memo">
            <div class="memo-block tech">
                <div>技術實現</div>
                <div>1. 采用AI技術最新研究成果結合公司自主研發力量實現</div>
                <div>2. 達到毫秒級識別速度</div>
                <div>3. 純軟件實現，不需要采購硬件設備</div>
            </div>
            <div class="memo-block benifits">
                <div>優勢</div>
                <div>1. 加快游戲速度。根據統計，單桌每日游戲次數提高30%</div>
                <div>2. 減少人工錯誤。有效減少人工輸入錯誤和識別錯誤</div>
                <div>3. 提高自動化水平，減少人工支出</div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.main{
    display: flex;
    width: 90%;
    margin: 50px auto;
    justify-content: space-between;
}

.left {
    flex-basis: 40%;
}
.right {
    flex-basis: 50%;
}

.video {
    width:  570px;
    height: 393px;
    background: gray;
}

.memo {
    display: flex;
    flex-flow: column;
}
.memo-block {
    display: flex;
    flex-flow: column;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
}

.benifits {
  margin-top: 30px;  
}
</style>
