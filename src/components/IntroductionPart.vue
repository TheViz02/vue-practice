<script>
import content from '@/assets/contents.json'

export default {
    name: "IntroductionPart",
    data() {
        return {
            content: content
        }
    }
}
</script>
<template>
    <!-- <header class="bg-gray-600 text-black h-screen flex items-center justify-center">
        <div class="text-center">
            <h1 class="text-4xl font-bold">Bhupendra Madhu</h1>
            <p class="mt-4 text-lg">Web Developer, Passionate Software Engineer.</p>
        </div>
    </header> -->
    <div class="hero min-h-screen"
        style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-xl">
                <h1 class="mb-5 text-7xl font-bold">Hello World!</h1>
                <p class="mb-5"> Welcome to my portfolio. I'm a {{ content.introContent }}</p>
                <a href="#about" class="btn btn-secondary">Get Started</a>
            </div>
        </div>
    </div>
</template>