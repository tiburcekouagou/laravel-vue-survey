<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Quizz</h1>
        <router-link
          :to="{ name: 'SurveyCreate' }"
          class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
        >
          <PlusIcon class="h-4 w-4 -mt-1 inline-block" />
          Add New Survey
        </router-link>
      </div>
    </template>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="survey in surveys"
        :key="survey.id"
        class="flex flex-col py-4 px-6 shadow-md bg-white overflow-clip hover:bg-gray-50 h-[470px]"
      >
        <img :src="survey.image" alt="" class="w-full h-48 object-cover" />
        <h4 class="mt-4 text-lg font-bold text-center">{{ survey.title }}</h4>
        <div v-html="survey.description" class="overflow-hidden flex-1"></div>

        <div class="flex justify-between items-center mt-3">
          <router-link
            :to="{ name: 'SurveyView', params: { id: survey.id } }"
            class="flex py-2 px-4 border border-transparent text-sm rounded-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PencilIcon class="w-5 h-5 mr-2" />
            Edit
          </router-link>
          <button
            v-if="survey.id"
            type="button"
            @click="deleteSurvey(survey)"
            class="h-8 w-8 flex justify-center items-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <span class="sr-only">Delete</span>
            <TrashIcon class="h-5 w-5 -mt-1 inline-block" />
          </button>
        </div>
      </div>
    </div>
  </PageComponent>
</template>

<script setup>
import store from '../store';
import { computed } from 'vue';
import PageComponent from '../components/PageComponent.vue';
import { PlusIcon } from '@heroicons/vue/outline';
import { PencilIcon } from '@heroicons/vue/outline';
import { TrashIcon } from '@heroicons/vue/outline';

const surveys = computed(() => store.state.user.surveys);

function deleteSurvey(survey) {
  if (
    confirm(
      `Are you sure you want to delete this survey ? Operation can't be undone !!`
    )
  ) {
    // delete survey
  }
}
</script>
