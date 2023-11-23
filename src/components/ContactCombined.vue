<script>
import ContactLinks from './Contacts/ContactLinks.vue';
// import ContactForm from './Contacts/ContactForm.vue';

export default {
    name: "ContactCombined",
    props: {
        id: String
    },
    components: { ContactLinks }
}
</script>
<template>
    <section class="py-12 bg-gray-400" :id="id">
        <div class="mx-auto">
            <h2 class="text-2xl font-bold mb-8 text-center">How to Connect? 🤔</h2>
            <!-- Add your contact form or details here -->
            <div class="px-10">
                <div class="grid grid-cols-2">
                </div>
                <ContactLinks />
            </div>
        </div>
    </section>
</template>