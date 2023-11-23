<template>
    <div class="mr-7">
        <h1>Share your query here</h1>
        <form action="#" method="post">
            <div class="grid grid-cols-1 gap-6">
                <div class="form-control">
                    <label for="name">Name</label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
                </div>
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
                </div>
                <div class="form-control">
                    <label for="query">Your Query!!</label>
                    <textarea name="queryText" placeholder="what's your query!!" id="queryText"
                        class="textarea w-full max-w-lg rounded-lg" cols="20" rows="10"></textarea>
                </div>
            </div>
            <button style="margin: 10px 0px; width: 20%;" class="rounded-full bg-indigo-400 hover:bg-indigo-600"
                type="submit">
                Submit
            </button>
        </form>
    </div>
</template>