<template>
     <div class="row row--park" v-if="park">
        <img :src="getParkLogoByParkName(park.name)">
        <h1 style="padding-left: 1em">
            {{ parkName }}
        </h1>
        <h5 > 
        <span style="font-size:1em"> Acceso a {{ (publicType === 'PUBLIC') ? 'Publico General' : 'Escuelas de Formación' }} </span>
        </h5>
     </div>
</template>