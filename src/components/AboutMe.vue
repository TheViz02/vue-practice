<script>
import content from '@/assets/contents.json';

export default {
    name: 'AboutMe',
    props: {
        id: String
    },
    data() {
        return {
            aboutSectionContent: content?.aboutSectionContent ?? '',
            skills: []
        };
    },
    mounted() { this.setSkillsData() },
    methods: {
        setSkillsData() {
            let styles = [
                'success',
                'info',
                'error',
                'warning',
            ];

            content.skills.forEach((item) => {
                this.skills.push({
                    style: this.getRandomItem(styles),
                    name: item,
                    classNameStr: `btn ml-2 mt-2 btn-${this.getRandomItem(styles)}`
                });
            });
        },
        getRandomItem(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

    }
}
</script>
<template>
    <!-- About Section -->
    <section class="bg-gray-700 py-16" :id="id">
        <h1 class="text-2xl font-bold mb-8 text-center">About Me & My Skills</h1>
        <div class="flex flex-row">
            <div class="flex-col w-1/2 px-4 py-2 rounded-md">
                <h2 class="mx-2">Hi!!</h2>
                <p class="mx-2" v-html="aboutSectionContent"></p>
            </div>
            <div class="flex-col w-1/2 px-4 py-2 text-left">
                <h2>My Skills</h2>
                <div class="">
                    <template v-for="(skill, key) in skills" v-bind:key="key">
                        <button type="button" :class="skill.classNameStr">
                            {{ skill.name }}
                        </button>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>