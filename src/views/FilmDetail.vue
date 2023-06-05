<template>
  <div class="alert alert-dark" role="alert">FilmChua</div>
  <button type="button" class="btn btn-primary">Thêm Phim Mới</button>
  <br />
  <br />
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Mã phim</th>
        <th scope="col">Tên phim</th>
        <th scope="col">Thời lượng</th>
        <th scope="col">Sản xuất</th>
        <th scope="col">Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <button type="button" class="btn btn-primary">chi tiết</button>
          &nbsp;<button type="button" class="btn btn-danger">xóa</button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>
          <button type="button" class="btn btn-primary">chi tiết</button>
          &nbsp;<button type="button" class="btn btn-danger">xóa</button>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
        <td>
          <button type="button" class="btn btn-primary">chi tiết</button>
          &nbsp;<button type="button" class="btn btn-danger">xóa</button>
        </td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <button type="button" class="btn btn-primary">chi tiết</button>
          &nbsp;<button type="button" class="btn btn-danger">xóa</button>
        </td>
      </tr>
      <tr>
        <th scope="row">5</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <button type="button" class="btn btn-primary">chi tiết</button>
          &nbsp;<button type="button" class="btn btn-danger">xóa</button>
        </td>
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <button type="button" class="btn btn-primary">chi tiết</button>
          &nbsp;<button type="button" class="btn btn-danger">xóa</button>
        </td>
      </tr>
      <tr>
        <th scope="row">7</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>
          <button type="button" class="btn btn-primary">chi tiết</button>
          &nbsp;<button type="button" class="btn btn-danger">xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
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
