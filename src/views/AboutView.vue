<template>
  <div class="about">
    <div class="contact animate__animated animate__swing">
      <div class="resume">
        <div class="title">個人介紹</div>
        <div class="tech">
          高級java程序員
        </div>
        <div class="tech">技術棧:<br/>
          <div class="tech-item">
            a. spring系列，springboot, springcloud.<br/>
            b. linux 運維，docker + k8s. 熟練使用shell脚本<br/>
            c. 數據庫 mysql mongo elasticsearch redis<br/>
            d. 額外 php, android等<br/>
          </div>
        </div>

        <div class="tech">參與項目:<br/>
          <div class="tech-item">
            1.游戲項目，負責所有數據結構，游戲邏輯的實現。以及編寫文檔，與外部系統交互。<br/>
            2.IM項目，負責後端開發工作，采用netty實現聊天室，存儲選用mongodb。<br/>
            3.電商項目，負責商品模塊開發工作，使用springcloud實現。<br/>
            4.内部OA工作流系統開發。<br/>
          </div>
        </div>

        <div class="tech">聯係方式:<br/>
          <div class="tech-item">
            telegram: +95 9759718207
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
 display: flex;
 justify-content: center;
 height: 500px;
}

.contact {
  width: 50%;
  text-align: center;
  font-size:  30px;
  margin: auto;
  font-weight: 500;
}

.resume {
  display: flex;
  flex-flow: column;
  justify-content: start;
  text-align: left;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

}

.tech {
  margin-top: 20px;
}
.tech-item {
  margin-left: 20px;
}
</style>
