<template>
  <ul class="header-ul">
    <li
      v-for="(item, index) in li"
      :key="index">{{ item.name }}</li>
  </ul>
</template>

<script>

export default {
  name: 'header-ul',
  data () {
    return {
      li: [
        {
          name: 'Jogar',
          group: [
            'Criar uma partida',
            'Torneios Arena',
            'Toneios Suiços',
            'Exibição simutânea'
          ]
        },
        {
          name: 'Quebra cabeças',
          group: [
            'Quebra cabeças',
            'Painel do quebra-cabeça',
            'Puzzle Streak',
            'Puzzle Storm',
            'Puzzle Racer'
          ]
        },
        {
          name: 'Aprender',
          group: [
            'Básicos do xadrez',
            'Praticar',
            'Coordenadas',
            'Estudar',
            'Professores'
          ]
        },
        {
          name: 'Assitir',
          group: [
            'Lichess TV',
            'Partidas atuais',
            'Streamers',
            'Transmissões',
            'Videoteca'
          ]
        },
        {
          name: 'Comunidade',
          group: [
            'Jogadores',
            'Equipes',
            'Fórum',
            'Doação'
          ]
        },
        {
          name: 'Ferramentas',
          group: [
            'Análise',
            'Explorador de aberturas',
            'Editor de tabuleiro',
            'Importar partida',
            'Busca avançada'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
@import 'styles.styl'
</style>
