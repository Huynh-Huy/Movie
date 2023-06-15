<template>
    <div class="my-4">
        <div class="pt-3 background-secction">
            <div class="row">
                <div class="col-md-4">
                    <div class="text-white float-right">
                        <ul class="ul-horizon my-0">
                            <li class="" v-for="dir in film.director">{{ dir }} &nbsp;</li>
                        </ul>
                    </div>
                    <br>
                    <img :src="film.thumb_url" class="poster" alt="">
                    <!-- <title>Lưu yêu thích</title> -->
                    <!-- <br/> -->
                    <br><button class="favorite-button" :class="{ favorite: isFavorite }" @click="toggleFavorite">
                    {{ isFavorite ? 'Đã thích' : 'Yêu thích' }}
                    </button>
                </div>
                <div class="col-md-8 pt-4">
                    <div class="text-white">
                        <h3>
                            {{ film.name }}
                        </h3>
                        <div class="pt-4">
                            <p class="warp-ul">
                            <ul class="ul-horizon">
                                <li>Thể loại: &nbsp;</li>
                                <li v-for="cate in film.category">{{ cate }} &nbsp;</li>
                            </ul>
                            </p>
                            <p>Số tập: {{ film.episodes.length }}
                            </p>
                            <p class="warp-ul">
                            <ul class="ul-horizon">
                                <li>Quốc gia: &nbsp;</li>
                                <li v-for="co in film.country">{{ co }} &nbsp;</li>
                            </ul>
                            </p>
                            <p class="warp-ul">
                            <ul class="ul-horizon">
                                <li>Diễn viên: &nbsp;</li>
                                <li v-for="act in film.actor">{{ act }} &nbsp;</li>
                            </ul>
                            </p>
                            <p style="display: inline;">
                                Mô tả &nbsp; <span v-html="film.content"></span>
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        film: { type: Object, require: true },
    },
    data() {
    return {
      isFavorite: false
    }
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    }
  }
}

</script>


<style>
.favorite-button {
      
    display: block;
    margin-left: 135px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 30%;
    

    }
    .favorite-button.favorite {
      background-color: rgb(204, 16, 16);
      color: rgb(40, 61, 118);
    }

.ul-horizon li {
    display: inline;
}
</style>