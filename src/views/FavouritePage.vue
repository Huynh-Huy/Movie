<template>
  <div class="container">
    <h1>Phim yêu thích</h1>

    <div class="movie-history">
      <div class="card">
        <div class="card-body">
          <img src="http://webcoban.vn/image/cat-2.jpg" alt="Phim 1" />
          <div>
            <h5 class="card-title">Tên phim 1</h5>
            <p class="card-text">Nơi sản xuất: Nơi sản xuất phim 1</p>
            <p class="card-text">Thời lượng: 120 phút</p>
            <p class="card-text">Năm sản xuất: 2020</p>
            <p class="card-text">Mô tả: Mô tả phim 1</p>
          </div>
        </div>
      </div>
    </div>

    <div class="movie-history">
      <div class="card">
        <div class="card-body">
          <img src="http://webcoban.vn/image/cat-2.jpg" alt="Phim 2" />
          <div>
            <h5 class="card-title">Tên phim 2</h5>
            <p class="card-text">Nơi sản xuất: Nơi sản xuất phim 2</p>
            <p class="card-text">Thời lượng: 90 phút</p>
            <p class="card-text">Năm sản xuất: 2019</p>
            <p class="card-text">Mô tả: Mô tả phim 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
};
</script>

<style>
.movie-history {
  margin-bottom: 20px;
}
.movie-history .card {
  padding: 10px;
}
.movie-history .card-body {
  display: flex;
  align-items: center;
}
.movie-history .card-body img {
  max-width: 100px;
  margin-right: 10px;
}
.card {
  background: black;
}
</style>
