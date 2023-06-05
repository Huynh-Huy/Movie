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
    <tbody v-for="(film, index) in films" :key="film._id">
      <tr>
        <th scope="row" v-text="index + 1"></th>
        <td v-text="film.name"></td>
        <td v-text="film.time"></td>
        <td v-text="film.country[0]"></td>
        <td>
          <button @click="viewFilmDetails(film._id)" type="button" class="btn btn-primary">chi tiết</button>
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
import filmService from "../service.js/film.service";

export default {
  components: {
    FilmList,
    Paginate,
  },
  data() {
    return {
      films: []
    }
  },
  computed: {

  },
  methods: {
    viewFilmDetails(filmId) {
      this.$router.push({ name: 'admin-film-create', params: { id: filmId } });
    }
  },
  async created() {
    this.films = await filmService.getNewFilm(1);
  },
  mounted() {
  }
};
</script>

<style></style>
