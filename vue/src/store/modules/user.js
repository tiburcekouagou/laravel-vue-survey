import axios from "axios";
import axiosClient from "../../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "Tiburce Kougou",
    slug: "tiburce-kouagou-quizz-content",
    status: "good",
    image: "https://avatars.githubusercontent.com/u/46634703?v=4",
    description: "My name is Tiburce Kouagou and I am the creator of Quizz App.. This is a very short description of the work that i did",
    created_at: "2022-05-04T18:00:00Z",
    updated_at: "2022-05-04T18:00:00Z",
    expire_date: "04-05-2022",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you ?",
        description: null,
        data: {
          options: [
            { uuid: 'd075d15f-8283-4a54-a07b-47c600320611', text: 'USA' },
            { uuid: 'afa1feb6-4e0d-46ff-b4e4-1183d92ed93f', text: 'Georgia' },
            { uuid: '5f816c02-423b-479e-a78e-475f32fb6c25', text: 'Germany' },
            { uuid: '237f516c-69fc-4e46-b338-a31471f4ebee', text: 'India' },
            { uuid: '29655d48-5f93-41bb-92c9-de681e7152cc', text: 'United Kingdom' }
          ]
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "Which application do you want me to develop next ?",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Assumeda cumque earum",
        data: {
          options: [
            { uuid: '729e1ffc-4721-4aed-8f4c-cbbbc45cddec', text: 'JavaScript' },
            { uuid: '85e81c6a-fafb-42fc-a421-321e6bf98091', text: 'PHP' },
            { uuid: 'e1979226-e140-4656-9c65-abce58847f95', text: 'Laravel' },
            { uuid: 'd8658362-a6e1-4e94-8d68-674791aef563', text: 'VueJs' },
          ]
        }
      },
      {
        id: 3,
        type: 'checkbox',
        question: 'Which PHP framework videos do you want to see on my channel ?',
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Assumeda cumque earum",
        data: {
          options: [
            { uuid: '35c81675-ad45-4102-8433-b65a774aa0f8', text: 'Laravel' },
            { uuid: '00b798b6-d632-45fb-a8ec-e494f64309e8', text: 'CodeIgniter' },
            { uuid: 'f59d8cd4-b889-4bb0-bb04-6b4c8a6e7a70', text: 'Symfony' },
          ]
        }
      },
      {
        id: 4,
        type: 'radio',
        question: 'Which Laravel frameword do you love the most ?',
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Assumeda cumque earum",
        data: {
          options: [
            { uuid: '71fd0391-aad0-4edc-b582-1aa70855466f', text: 'Laravel' },
            { uuid: '113e285b-4a18-4300-a811-44c23178e35a', text: 'CodeIgniter' },
            { uuid: '71abf5a8-0c27-492c-8f80-e2af86a7bad7', text: 'Symfony' },
          ]
        }
      },
      {
        id: 5,
        type: 'checkbox',
        question: 'What type of projects do you want to see on my channel built with Laravel ?',
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Assumeda cumque earum",
        data: {
          options: [
            { uuid: '08879026-a1ad-4e82-9ab4-eef429192ade', text: 'Laravel' },
            { uuid: '817cbadf-2967-42cc-988d-1840cd5bbbe0', text: 'CodeIgniter' },
            { uuid: '30ad1421-edf2-488a-b1ac-67591132cea7', text: 'Symfony' },
          ]
        }
      },
      {
        id: 6,
        type: 'text',
        question: 'What is your favorite YouTube Channel?',
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What do you think about Tiburce Kouagou ?",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Assumeda cumque earum",
        data: {}
      },
    ],
  },
  {
    id: 200,
    title: "Laravel 8",
    slug: "laravel-8",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
    description: "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar",
    created_at: "2022-05-04 03:00:00",
    updated_at: "2022-05-04 03:00:00",
    expire_date: "04/05/2022",
    questions: [],
  },
  {
    id: 300,
    title: "Vue 3",
    slug: "vue-3",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
    description: "Vue.js (commonly referred to as Vue; pronounced \"view\") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members",
    created_at: "2022-05-04 03:00:00",
    updated_at: "2022-05-04 03:00:00",
    expire_at: "2022-05-04 03:00:00",
    questions: [],
  },
  {
    id: 400,
    title: "Tailwind 3",
    slug: "tailwind-3",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
    description: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",
    created_at: "2022-05-04 03:00:00",
    updated_at: "2022-05-04 03:00:00",
    expire_at: "2022-05-04 03:00:00",
    questions: [],
  },
]

export default {
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN')
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    login({ commit }, user) {
      return axiosClient.post('/login', user)
        .then(({ data }) => {
          commit('setUser', data)
          return data
        })
    },
    register({ commit }, user) {
      return axiosClient.post('/register', user)
        .then(({ data }) => {
          commit('setUser', data)
          return data
        })
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  mutations: {
    logout: state => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem('TOKEN')
    },

    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token)
    }
  }
}