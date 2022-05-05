<template>
  <!-- Question Index -->
  <div>
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-bold">
        {{ index + 1 }}. {{ question.question }}
      </h3>
      <div class="flex items-center">
        <!-- Add New Question -->
        <button
          type="button"
          @click="addQuestion()"
          class="flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
        >
          <PlusIcon class="h-4 w-4 mr-2" />
          Add
        </button>
        <!--/ Add New Question -->
        <!-- Delete Question -->
        <button
          type="button"
          @click="deleteQuestion()"
          class="flex items-center text-xs py-1 px-3 rounded-sm border border-transparent text-red-500 hover:border-red-600"
        >
          <TrashIcon class="h-4 w-4" />
          Delete
        </button>
        <!--/ Delete Question -->
      </div>
    </div>
    <!--/ Question Index -->
    <div class="grid gap-3 grid-cols-12">
      <!-- Question -->
      <label
        :for="'question_text_' + model.data"
        class="block text-sm font-medium text-gray-700"
        >Question Text</label
      >
      <input
        type="text"
        :name="'question_text_' + model.data"
        v-model="model.question"
        @change="dataChange"
        :id="'question_text_' + model.data"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      <!--/ Question -->
      <!-- Question Type -->
      <div class="mt-3 col-spam-3">
        <label
          for="question_type"
          class="block text-sm font-medium text-gray-700"
          >Select Question Type</label
        >
        <select
          id="question_type"
          name="question_type"
          v-model="model.type"
          @change="typeChange"
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none foucs:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option v-for="type in questionTypes" :key="type" :value="type">
            {{ upperCaseFirst(type) }}
          </option>
        </select>
      </div>
      <!--/ Question Type-->
    </div>
    <!-- Question Description -->
    <div class="mt-3 col-span-9">
      <label
        :for="'question_description_' + model.id"
        class="block text-sm font-medium text-gray-700"
        >Description</label
      >
      <textarea
        :name="'question_description' + model.id"
        v-model="model.description"
        @change="dataChange"
        :id="'question_description' + model.id"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      ></textarea>
    </div>
    <!--/ Question Description -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PlusIcon } from '@heroicons/vue/outline';
import { TrashIcon } from '@heroicons/vue/outline';

const props = defineProps({
  question: Object,
  index: Number,
});

const emit = defineEmits(['change', 'addQuestion', 'deleteQuestion']);

// Re-create the whole question data to avoid unintentional reference change
const model = ref(JSON.stringify(props.question));

function upperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function getOptions() {
  return model.value.data.options;
}
function setOptions(options) {
  model.value.data.options = options;
}
// Check if the question should have options
function shouldHaveOptions() {
  return ['select', 'radio', 'checkbox'].includes(model.value.type);
}
// Add option
function addOption() {
  setOptions([...getOptions(), { uuid: uuidv4(), text: '' }]);
  dataChange();
}
// Remove option
function removeOption(op) {
  setOptions(getOptions().filter((opt) => opt !== op));
  dataChange();
}
function typeChange() {
  if (shouldHaveOptions()) {
    setOptions(getOptions() || []);
  }
  dataChange();
}
// Emit the data change
function dataChange() {
  const data = model.value;
  if (!shouldHaveOptions()) {
    delete data.data.options;
  }
  emit('change', data);
}
function addQuestion() {
  emit('addQuestion', props.index + 1);
}
function deleteQuestion() {
  emit('deleteQuestion', props.question);
}
</script>
