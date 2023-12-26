<template>
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <slot />
            <Sidebar />
            <div>
                <slot name="socialmedia" />
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>