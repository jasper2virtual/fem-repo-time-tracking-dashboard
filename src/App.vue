<template>
  <div class="min-h-screen min-w-[320px] p-4 flex flex-col bg-app-neutral-veryDarkBlue justify-center items-center">
    <main class="grow px-4 py-6 container flex justify-center items-center">
      <div class="flex flex-col items-center gap-8
    desktop:min-h-[50vh] desktop:grid desktop:grid-cols-4 desktop:grid-rows-2">
        <ReportControl name="Jeremy Robson" @showDaily="showDaily" @showWeekly="showWeekly" @showMonthly="showMonthly"
          class="w-full max-w-96
      desktop:row-span-2 desktop:self-stretch
      ">
          <template #avatarImg>
            <img src="/src/assets/images/image-jeremy.png" alt="Jeremy Robson" />
          </template>
        </ReportControl>
        <ReportRecord v-for="{ typeId, timeframes } in dataJeremy" :typeId :timeframes :command
          class="w-full max-w-96 desktop:self-stretch" />
      </div>
    </main>
    <footer>
      <Attribution />
    </footer>
  </div>
</template>
<script>
import ReportControl from './components/ReportControl.vue'
import ReportRecord from './components/ReportRecord.vue'
import Attribution from './components/Attribution.vue'
import dataJeremy from '/src/assets/data-jeremy.json'
export default {
  components: {
    ReportControl,
    ReportRecord,
    Attribution
  },
  data() {
    return {
      dataJeremy,
      command: ''
    }
  },
  methods: {
    showDaily() {
      this.command = 'showDaily'
    },
    showWeekly() {
      this.command = 'showWeekly'
    },
    showMonthly() {
      this.command = 'showMonthly'
    }
  }
}
</script>