export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = true;
    console.log(to, from) 
    if(!isLoggedIn && to.path !== '/login') 
        return navigateTo('/login')
    else if(isLoggedIn && to.path === '/login')
        return navigateTo('/home');
})