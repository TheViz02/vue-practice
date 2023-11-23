<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiInstagram } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import contents from '@/assets/contents.json'

export default {
    name: "ContactLinks",
    components: {
        SvgIcon
    },
    data() {
        return {
            instagram: mdiInstagram,
            linkedin: mdiLinkedin,
            github: mdiGithub,
            links: contents
        }
    }
}
</script>

<template>
    <div class="flex justify-center">
        <div class="join bg-primary hover:bg-secondary lg:join-horizontal">
            <a :href="links.instagram" target="_blank" class="btn join-item bg-primary">
                <svg-icon type="mdi" :path="instagram" class="mr-2" />
                Instagram
            </a>
            <a :href="links.linkedin" target="_blank" class="btn join-item bg-primary">
                <svg-icon type="mdi" :path="linkedin" class="mr-2" />
                Linkedin
            </a>
            <a :href="links.github" target="_blank" class="btn join-item bg-primary">
                <svg-icon type="mdi" :path="github" class="mr-2" />
                GitHub
            </a>
        </div>
    </div>
    <!-- <ul class="list-none flex-col">
        <li class="hover:bg-indigo-500 hover:rounded mr-4 mb-4 ">
            <a :href="links.instagram" class="flex items-center" target="_blank">
                <svg-icon type="mdi" :path="instagram" class="mr-2" />
                Instagram
            </a>
        </li>
        <li class="hover:bg-indigo-500 hover:rounded mr-4 mb-4 ">
            <a :href="links.linkedin" class="flex items-center" target="_blank">
                <svg-icon type="mdi" :path="linkedin" class="mr-2" />
                Linkedin
            </a>
        </li>
        <li class="hover:bg-indigo-500 hover:rounded mr-4 mb-4">
            <a :href="links.github" class="flex items-center" target="_blank">
                <svg-icon type="mdi" :path="github" class="mr-2" />
                GitHub
            </a>
        </li>
    </ul> -->
</template>