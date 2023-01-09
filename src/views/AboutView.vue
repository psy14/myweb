<template>
  <div class="about">
    <div class="contact animate__animated animate__swing">
      <div class="resume">
        <div class="title">個人介紹</div>
        <div class="tech">
          高級java程序員
        </div>

        <div class="tech">項目經驗:<br/>
          <div class="tech-item">
            1.視訊<br/>
            2.IM<br/>
            3.電子游戲<br/>
            4.彩票<br/>
          </div>
        </div>

        <div class="tech">聯係方式:<br/>
          <div class="tech-item">
            telegram: @wowwow08
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
