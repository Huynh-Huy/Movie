<template>
  <div class="alert alert-dark" role="alert">FilmChua</div>
  <h1>Thêm Phim Mới</h1>
  <!-- <button type="button" class="btn btn-primary">Thêm Phim Mới</button> -->
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Tên Phim</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Nhập tên phim"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Nơi sản xuất</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Nhập nơi sản xuất"
      />
    </div>
    <div>
      <label for="">Ngày sản xuất</label> <br />
      <input
        type="date"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Thời Lượng</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Nhập thời lượng phim"
      />
    </div>
    <label for="exampleInputEmail1">Mô Tả</label> <br />
    <textarea
      class="form-control"
      id=""
      cols="30"
      rows="3"
      placeholder="Nhập mô tả phim"
    ></textarea>
    <div class="form-group">
      <label for="exampleFormControlFile1">Chọn hình ảnh</label> <br />
      <input
        type="file"
        class="form-control-file"
        id="exampleFormControlFile1"
      />
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { useFilmStore } from "../stores/films";
import { mapStores } from "pinia";
import FilmList from "@/components/FilmList.vue";
import Paginate from "@/components/Paginate.vue";
import { usePageStore } from "../stores/page.store";

export default {
  components: {
    FilmList,
    Paginate,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style></style>
