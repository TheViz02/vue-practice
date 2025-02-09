<script>
export default {
    name: "NavBar"
}
</script>

<template>
    <nav class="bg-gray-800 text-white p-4 sticky top-0 z-50">
        <div class="container mx-auto flex justify-between items-center">
            <a href="#" class="text-xl font-semibold">Bhupendra Madhu</a>

            <div class="flex space-x-4">
                <a href="#" class="hover:text-gray-400">Home</a>
                <a href="#about" class="hover:text-gray-400">About</a>
                <a href="#projects" class="hover:text-gray-400">Projects</a>
                <a href="#contact" class="hover:text-gray-400">Connect!!</a>
            </div>
        </div>
    </nav>
</template>