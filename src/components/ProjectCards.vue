<script>

export default {
    name: "ProjectCards",
    data() {
        return { projectCarousal: [] }
    },
    mounted() {
        this.getProjectCarousel();
    },
    methods: {
        getProjectCarousel() {
            fetch('https://api.github.com/users/theviz02/repos')
                .then((res) => res.json())
                .then((data) => {
                    data.forEach((element) => {
                        this.projectCarousal.push({
                            name: element.name,
                            full_name: element.full_name,
                            image: element.owner?.avatar_url,
                            description: element.description,
                            created_at: new Date(element.created_at).toDateString(),
                            pushed_at: new Date(element.pushed_at).toDateString(),
                            license: element.license,
                            projectPath: element.html_url
                        })
                    });
                });
        }
    }
}
</script>

<template>
    <section class="bg-secondary py-16">
        <div class="container mx-auto">
            <h2 class="text-2xl font-bold mb-8 text-center">My Projects</h2>
            <p class="text-lg text-center mb-5">
                Here are several projects I did, They all are present in my Github Profile and here available too!
            </p>
            <div class="flex justify-center">
                <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-primary rounded-box">
                    <template v-for="(project, key) in projectCarousal" v-bind:key="key">
                        <div class="carousel-item">
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <div class="avatar">
                                    <div class="w-24 ml-2 mt-2 rounded-xl">
                                        <img :src="project.image" />
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title">{{ project.name }}</h1>
                                    <h3>Created - {{ project.created_at }}</h3>
                                    <h3>Last Commit - {{ project.pushed_at }}</h3>
                                    <p>{{ project.description }}</p>
                                    <div class="card-actions justify-end">
                                        <a :href="project.projectPath" target="_blank" class="btn btn-primary">Visit
                                            Here!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>