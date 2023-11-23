<script>
import NavBar from '@/components/NavBar.vue';
import AboutMe from '@/components/AboutMe.vue';
import ContactCombined from '@/components/ContactCombined.vue';
import IntroductionPart from '@/components/IntroductionPart.vue';
import ProjectCards from '@/components/ProjectCards.vue';

let date = new Date();

let year = date.getFullYear();

export default {
    name: 'IndexPage',
    components: {
        NavBar,
        AboutMe,
        ContactCombined,
        IntroductionPart,
        ProjectCards,
    },
    data() {
        return {
            year
        }
    }
}

</script>

<template>
    <NavBar />

    <!-- Hero Section -->
    <IntroductionPart />

    <!-- About Section -->
    <AboutMe id="about" />

    <!-- Projects Section -->
    <ProjectCards id="projects" />

    <!-- Contact Section -->
    <ContactCombined id="contact" />

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-4">
        <p class="">&copy; {{ year }}</p>
        <p class="">Made by Bhupendra Madhu using Vue.JS</p>
    </footer>
</template>